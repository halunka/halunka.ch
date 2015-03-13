däHalunk = Object.create(Halunka)
däHalunk.config.containerSelector = function () {
  return document.querySelector('.halunkaContainer')
}

addEventListener('load', function () {
  däHalunk.init()
})