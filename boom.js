export class Boom extends HTMLElement {
  constructor() {super()}

  get count() {
    return parseInt(this.querySelector('output[name="count"]').value)
  }
  set count(value) {
    this.querySelector('output[name="count"]').value = value
  }

  down = () => {
    if (this.count > 0) {
      this.count = this.count - 1
      return
    }
    clearInterval(this.intervalID)
    this.remove()
  }

  connectedCallback() {
    this.count = (this.localName.match(/-/g) || []).length
    this.intervalID = setInterval(this.down, 1000)
  }

  disconnectedCallback() {
    clearInterval(this.intervalID)
  }
}