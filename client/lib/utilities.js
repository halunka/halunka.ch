extractData = function extractData (elem) {
  return _.object([].slice.call(elem.querySelectorAll('input, textarea'))
    .map(function (element) {
      return [element.name, element.value]
    }))
}

getForm = function getForm (element) {
  if(!element) return false
  return element.tagName == 'FORM' ?
    element:
    getForm(element.parentNode)
}
