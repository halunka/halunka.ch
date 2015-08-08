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
    var data = extractData(e.currentTarget.parentNode)
    Meteor.call('greetUs', data.from, data.title, data.text)

    e.preventDefault()
  }
})

function checkHash () {
  if(location.href.indexOf('#mail') > -1) {
    showForm.set(true)
  } else {
    showForm.set(false)
  }
}
