message = function (text, type) {
  var view = Blaze.renderWithData(
    Template.message,
    {
      text: text,
      type: type || 'neutral'
    },
    document.body
  )
  function display () {
    var node = view.firstNode()
    node.className = node.className.replace('message--hidden', '')
  }
  setTimeout(display, 200)
}

Template.message.events({
  'click .message__close': function (e) {
    document.body.removeChild(e.currentTarget.parentNode)
  }
})