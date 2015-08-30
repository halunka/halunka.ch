Template.logo.onRendered(function () {
  var logoWrapper = document.querySelector('.logo__wrapper')
  var gyroRotator = _.debounce(logoMover(
    [
      [document.querySelector('.logo'), 'rotateZ(2deg)', 1.2, -1.6, false],
      [document.querySelector('.logo__innerTrs'), 'translateZ(14px)', 2.2, -2.6, false],
    ]
  ), 10)
  var gyroCenter
  addEventListener('deviceorientation', function (e) {
    var curr = [e.gamma + 90, e.beta + 180]
    if(!gyroCenter) gyroCenter = curr
    gyroRotator(
      [gyroCenter[0] - curr[0], gyroCenter[1] - curr[1]],
      [180 - gyroCenter[0], 360 - gyroCenter[1]]
    )
  })
  var mouseRotator = _.debounce(logoMover(
    [
      [document.querySelector('.logo'), 'rotateZ(2deg)', 0.6, 0.6, true],
      [document.querySelector('.logo__innerTrs'), 'translateZ(14px)', 1.6, 1.6, true],
    ]
  ), 10)
  logoWrapper.addEventListener(
    'mousemove',
    function (e) {
      mouseRotator(
        [e.clientX - logoWrapper.offsetLeft, e.clientY - logoWrapper.offsetTop],
        [logoWrapper.clientWidth, logoWrapper.clientHeight],
        true
      )
    }
  )
})

function logoMover (elements) {
  elements.forEach(function (obj) {
    obj[5] = rotator(obj[0], obj[1], obj[4])
  })
  return function (pos, max) {
    elements.forEach(function (obj) {
      obj[5](
        rotation(getPos(pos[0], max[0]) * obj[2]),
        rotation(getPos(pos[1], max[1]) * obj[3] * -1)
      )
    })
  }
}

function rotation (pos) {
  return pos / 25
}

function getPos (pos, len) {
  var rat = pos / len
  return rat * 100 - 50
}

function rotator (elem, def, animate) {
  var prop = ['rotate', prop].join('')
  var curr = [
    0,
    0
  ]
  return function (newX, newY) {
    if(animate) {
      var step = [
        (newX - curr[0]) / 6,
        (newY - curr[1]) / 6
      ]
      _.zip(
        _.range(curr[0], newX, step[0]),
        _.range(curr[1], newY, step[1])
      ).forEach(function (step, i) {
        step[0] = step[0] || newX
        step[1] = step[1] || newY
        setTimeout(function () {
          rotate(elem, def, step[1], step[0])
        }, 10 * i)
      })
    } else {
      rotate(elem, def, newY, newX)
    }
    curr[0] = newX
    curr[1] = newY
  }
}

function rotate (elem, def, x, y) {
  var trs = [
      def,
      ['rotateY(', 'deg)']
        .join(roundABit(y)),
      ['rotateX(', 'deg)']
        .join(roundABit(x))
    ]
      .join(' ')
  elem.style.transform = trs
  elem.style.webkitTransform = trs
}

function roundABit (n) {
  return Math.round(n * 100) / 100
}
