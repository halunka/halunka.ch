var Halunka = {
  config: {
    width: 0
  , height: 0
  }
, getCanvas: function () {
    var self = this
    self.scene = new THREE.Scene()
    self.camera = new THREE.PerspectiveCamera(75, self.config.width / self.config.height, 0.1, 10000)
    self.camera.position.z = 5

    self.renderer = new THREE.WebGLRenderer()
    self.renderer.setSize(self.config.width, self.config.height)
    return self.renderer.domElement
  }
, init: function () {
    var self = this
    self.createABasicForm()
    self.render()
  }
, render: function () {
    var self = this
    requestAnimationFrame(function () {
      self.render()
    })
    self.renderer.render(self.scene, self.camera)
    self.cube.rotation.x += 0.1
  }
, createABasicForm: function () {
    var self = this
    var geometry = new THREE.BoxGeometry(1, 1, 1)
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00})
    self.cube = new THREE.Mesh(geometry, material)
    self.scene.add(self.cube)
  }
, execBlackMagic: function () {
    var self = this
  }
}