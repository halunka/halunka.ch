Template.logo.onRendered(function () {
  document.querySelector('.logo__wrapper').addEventListener(
    'mousemove',
    _.debounce(logoMover(
      [
        [document.querySelector('.logo'), 'rotateZ(2deg)', 1],
        [document.querySelector('.logo__innerTrs'), '', 1.6]
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
  var curr = [
    0,
    0
  ]
  return function (newX, newY) {
    var step = [
      (newX - curr[0]) / 3,
      (newY - curr[1]) / 3
    ]
    _.zip(
      _.range(curr[0], newX, step[0]),
      _.range(curr[1], newY, step[1])
    ).forEach(function (step, i) {
      step[0] = step[0] || newX
      step[1] = step[1] || newY
      setTimeout(function () {
        elem.style.transform =
          [
            def,
            ['rotateY(', 'deg)']
              .join(step[0]),
            ['rotateX(', 'deg)']
              .join(step[1])
          ]
            .join(' ')
      }, 10 * i)
    })
    curr[0] = newX
    curr[1] = newY
  }
}
