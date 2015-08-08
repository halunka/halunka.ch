extractData = function extractData (elem) {
  return _.object([].slice.call(elem.querySelectorAll('input, textarea'))
    .map(function (element) {
      return [element.name, element.value]
    }))
}
