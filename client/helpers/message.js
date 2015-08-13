message = function (text, type) {
  var view = Blaze.renderWithData(
    Template.message,
    {
      text: text,
      type: type || 'neutral'
    },
    document.body
  )
  setTimeout(display.bind(null, view.firstNode()), 200)
}

Template.message.events({
  'click .message__close': function (e, templ) {
    unDisplay(templ.view.firstNode())
    setTimeout(document.body.removeChild.bind(document.body, e.currentTarget.parentNode), 200)
  }
})

function display (node) {
  node.className = node.className.replace('message--hidden', '')
}

function unDisplay (node) {
  node.className += ' message--hidden'
}
