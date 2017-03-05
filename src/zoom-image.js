import { elemOffset, once, windowWidth, windowHeight } from './utils'

class Size {
  constructor(w, h) {
    this.w = w
    this.h = h
  }
}

export default class ZoomImage {
  constructor(img, offset) {
    this.img = img
    this.preservedTransform = img.style.transform
    this.wrap = null
    this.overlay = null
    this.offset = offset
  }

  forceRepaint() {
    const _ = this.img.offsetWidth
    return
  }

  zoom() {
    const size = new Size(this.img.naturalWidth, this.img.naturalHeight)

    this.wrap = document.createElement('div')
    this.wrap.classList.add('zoom-img-wrap')
    this.img.parentNode.insertBefore(this.wrap, this.img)
    this.wrap.appendChild(this.img)

    this.img.classList.add('zoom-img')
    this.img.setAttribute('data-action', 'zoom-out')

    this.overlay = document.createElement('div')
    this.overlay.classList.add('zoom-overlay')
    document.body.appendChild(this.overlay)

    this.forceRepaint()
    const scale = this.calculateScale(size)

    this.forceRepaint()
    this.animate(scale)

    document.body.classList.add('zoom-overlay-open')
  }

  calculateScale(size) {
    const maxScaleFactor = size.w / this.img.width

    const viewportWidth = (windowWidth() - this.offset)
    const viewportHeight = (windowHeight() - this.offset)
    const imageAspectRatio = size.w / size.h
    const viewportAspectRatio = viewportWidth / viewportHeight

    if (size.w < viewportWidth && size.h < viewportHeight) {
      return maxScaleFactor
    } else if (imageAspectRatio < viewportAspectRatio) {
      return (viewportHeight / size.h) * maxScaleFactor
    }
    return (viewportWidth / size.w) * maxScaleFactor
  }

  animate(scale) {
    const imageOffset = elemOffset(this.img)
    const scrollTop = window.pageYOffset

    const viewportX = (windowWidth() / 2)
    const viewportY = scrollTop + (windowHeight() / 2)

    const imageCenterX = imageOffset.left + (this.img.width / 2)
    const imageCenterY = imageOffset.top + (this.img.height / 2)

    const tx = viewportX - imageCenterX
    const ty = viewportY - imageCenterY
    const tz = 0

    const imgTr = `scale(${scale})`
    const wrapTr = `translate3d(${tx}px, ${ty}px, ${tz}px)`

    this.img.style.transform = imgTr
    this.wrap.style.transform = wrapTr
  }

  dispose() {
    if (this.wrap === null || this.wrap.parentNode === null) {
      return
    }
    this.img.classList.remove('zoom-img')
    this.img.setAttribute('data-action', 'zoom')

    this.wrap.parentNode.insertBefore(this.img, this.wrap)
    this.wrap.parentNode.removeChild(this.wrap)

    document.body.removeChild(this.overlay)
    document.body.classList.remove('zoom-overlay-transitioning')
  }

  close() {
    document.body.classList.add('zoom-overlay-transitioning')
    this.img.style.transform = this.preservedTransform
    if (this.img.style.length === 0) {
      this.img.removeAttribute('style')
    }
    this.wrap.style.transform = 'none'

    once(this.img, 'transitionend', () => {
      this.dispose()
      // remove class should happen after dispose. Otherwise,
      // a new click event could fire and create a duplicate ZoomImage for
      // the same <img> element.
      document.body.classList.remove('zoom-overlay-open')
    })
  }
}
