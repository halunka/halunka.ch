Template.logo.onRendered(function () {
  document.body.children[0].addEventListener(
    'mousemove',
    _.debounce(logoMover(
      [
        [document.querySelector('.logo'), 'rotateZ(2deg)', 1],
        [document.querySelector('.logo__innerTrs'), 'rotateZ(2deg)', 1.5]
      ]
    ))
  )
})

function logoMover (elements) {
  return function (e) {
    elements.forEach(function (obj) {
      obj[0].style.transform =
        [
          obj[1],
          ['rotateY(', 'deg)']
            .join(rotation(getPos(e.clientX, obj[0].parentNode.clientWidth) * obj[2])),
          ['rotateX(', 'deg)']
            .join(rotation(getPos(e.clientY, obj[0].parentNode.clientHeight) * obj[2]))
        ]
          .join(' ')
    })
  }
}

function rotation (pos) {
  return Math.round(pos / 10 * 100 ) / 100
}

function getPos (pos, len) {
  return pos / len * 100 - 50
}
