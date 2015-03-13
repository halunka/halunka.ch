var Halunka = {
  config: {
    containerSelector: 'yoooloooouuu'
  }
, init: function () {
    var self = this
    self.WebGLCanvas = self.config.containerSelector()
    if(!self.WebGLCanvas) return false
    self.execBlackMagic()
  }
, execBlackMagic: function () {
    return
  }
}