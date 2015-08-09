Meteor.methods({
  greetUs: function (sender, title, message) {
    check([sender, title, message], [String])
    if(!isEMailAddress(sender)) throw 'Invalid email address'
    Emails.insert({
      from: sender,
      title: title,
      message: message,
      timestamp: (new Date).getTime()
    })
    Email.send({
      to: Meteor.settings.recipients,
      from: "webform@halunka.ch",
      subject: [sender, title].join(': halunka.ch - '),
      text: message
    })
  }
})