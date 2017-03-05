const windowWidth = () => document.documentElement.clientWidth
const windowHeight = () => document.documentElement.clientHeight

const elemOffset = elem => {
  const rect = elem.getBoundingClientRect()
  const docElem = document.documentElement
  const win = window
  return {
    top: rect.top + win.pageYOffset - docElem.clientTop,
    left: rect.left + win.pageXOffset - docElem.clientLeft
  }
}

const once = (elem, type, handler) => {
  const fn = e => {
    e.target.removeEventListener(type, fn)
    handler()
  }
  elem.addEventListener(type, fn)
}

export { windowWidth, windowHeight, elemOffset, once }
