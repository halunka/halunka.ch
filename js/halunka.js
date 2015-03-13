var Halunka = {
  config: {
    width: 0
  , height: 0
  }
, actions: []
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
    self.actions.forEach(function (action) {
      action()
    })
  }
, createABasicForm: function () {
    var self = this
    var geometry = new THREE.BoxGeometry(1, 1, 1)
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true})
    self.cube = new THREE.Mesh(geometry, material)
    self.scene.add(self.cube)
    self.followMouse(self.cube)
  }
, execBlackMagic: function () {
    var self = this
  }
, followMouse: function (object) {
    var self = this
  , mousePosition = {
      x: self.config.width / 2
    , y: self.config.height / 2
    }
    addEventListener('mousemove', function (e) {
      mousePosition.x = e.x
      mousePosition.y = e.y
    })

    self.actions.push(function () {
      self.cube.rotation.y = self.config.width / 100 * mousePosition.x / 10000
      self.cube.rotation.x = self.config.height / 100 * mousePosition.y / 10000
    })
  }
}