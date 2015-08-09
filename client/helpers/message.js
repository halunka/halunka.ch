message = function (text) {
  Blaze.renderWithData(
    Template.message,
    {
      text: text
    },
    document.body
  )
}

Template.message.events({
  'click .message__close': function (e) {
    document.body.removeChild(e.currentTarget.parentNode)
  }
})