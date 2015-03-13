däHalunk = Object.create(Halunka)
däHalunk.config.width = innerWidth
däHalunk.config.height = innerHeight

addEventListener('load', function () {
  document.body.appendChild(däHalunk.getCanvas())
  däHalunk.init()
})