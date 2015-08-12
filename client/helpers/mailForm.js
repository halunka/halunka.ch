var showForm = new ReactiveVar(false)

Meteor.startup(function () {
  Blaze.renderWithData(
    Template.mailForm,
    {showForm: showForm.get.bind(showForm)},
    document.getElementsByTagName('main')[0]
  )
})

Template.mailForm.onCreated(checkHash)

addEventListener('hashchange', checkHash)

Template.mailForm.events({
  'submit': function (e) {
    var form = getForm(e.currentTarget)
    var data = extractData(form)

    e.preventDefault()
    if(!data.text || !isEMailAddress(data.from)) return

    loader.start(form, 'mailForm')
    Meteor.call(
      'greetUs',
      data.from,
      data.title,
      data.text,
      function (err, data) {
        if (err) {
          console.error(err)
          if(err.reason) {
            message('Failed to send message :( ' + err.reason)
          } else {
            message('Failed to send message :(. Please try later.')
          }
        } else {
          message('Thanks for your message, we\'ll send you an answer ASAP :)')
          location.href = '#'
          clearForm(form)
        }
        loader.stop()
      }
    )
  },
  'blur .mailForm__text': targetValidator('mailForm__text'),
  'keyup .mailForm__text': targetValidator('mailForm__text'),
  'blur .mailForm__address': targetValidator('mailForm__address', isEMailAddress),
  'keyup .mailForm__address--invalid': targetValidator('mailForm__address', isEMailAddress),
})

function targetValidator (prefix, check) {
  check = check || function (str) { return !!str }
  return function (e) {
    var elem = e.currentTarget || e
    $(e.currentTarget)[
      check(elem.value) ?
        'removeClass' :
        'addClass'
      ](prefix + '--invalid')
  }
}

function checkHash () {
  if(location.href.indexOf('#mail') > -1) {
    showForm.set(true)
  } else {
    showForm.set(false)
  }
}

var loader = (function () {
  var element;
  var className;
  return {
    start: function (elem, prefix) {
      element = $(elem)
      className = prefix + '--loading'
      element.addClass(className)
    },
    stop: function () {
      element.removeClass(className)
    }
  }
})()
