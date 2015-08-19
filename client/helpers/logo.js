Template.logo.onRendered(function () {
  document.querySelector('.logo__wrapper').addEventListener(
    'mousemove',
    _.debounce(logoMover(
      [
        [document.querySelector('.logo'), 'rotateZ(2deg)', 1],
        [document.querySelector('.logo__innerTrs'), '', 1.5]
      ]
    ), 10)
  )
})

function logoMover (elements) {
  elements.forEach(function (obj) {
    obj[3] = rotator(obj[0], obj[1])
  })
  return function (e) {
    elements.forEach(function (obj) {
      obj[3](
        rotation(getPos(e.clientX, obj[0].parentNode.clientWidth) * obj[2]),
        rotation(getPos(e.clientY, obj[0].parentNode.clientHeight) * obj[2])
      )
    })
  }
}

function rotation (pos) {
  return Math.round(pos / 25 * 100 ) / 100
}

function getPos (pos, len) {
  var rat = pos / len
  if(rat > 1) rat = 1
  if(rat < 0) rat = 0
  return rat * 100 - 50
}

function rotator (elem, def, dir) {
  var prop = ['rotate', prop].join('')
  var curr = {
    x: 0,
    y: 0
  }
  return function (newX, newY) {
    curr.x = newX
    curr.y = newY
    elem.style.transform =
      [
        def,
        ['rotateY(', 'deg)']
          .join(curr.y),
        ['rotateX(', 'deg)']
          .join(curr.x)
      ]
        .join(' ')
  }
}
