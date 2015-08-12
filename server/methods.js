Meteor.methods({
  greetUs: function (sender, title, message) {
    check([sender, title, message], [String])
    if(!isEMailAddress(sender)) throw new Meteor.Error('invalid-email-address', 'Good day dear Madam or Sir. You have passed an invalid email address to us.')
    if(isOverRate(sender)) throw new Meteor.Error('over-rate', 'Greetings from our rate limiter: Wow! slow down, cowboy. Try again in 10 Minutes.')
    Emails.insert({
      from: sender,
      title: title,
      message: message,
      timestamp: (new Date).getTime()
    })
    Email.send({
      to: Meteor.settings.recipients,
      from: "webform@halunka.ch",
      subject: [sender, title].join(' - '),
      text: message
    })
  }
})

function isOverRate (sender, maxMailsInRate, maxRate) {
  var now = (new Date).getTime()
  maxRate = maxRate || 600000
  maxMailsInRate = maxMailsInRate || 2
  return (
    Emails.find({
      timestamp: {
        $gt: now - maxRate
      }
    })
      .count() >= maxMailsInRate
  )
}
