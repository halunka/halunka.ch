Template.registerHelper('not', function (expression) { return !expression })

addEventListener('touchend', function (e) {
  if (e.target.tagName === 'A') window.href = e.target.href
  return false
})
