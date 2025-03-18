export class Boom extends HTMLElement {
  constructor() {super()}

  down = () => {
    console.log(this.count)
    if (this.count > 0) {
      this.count = this.count - 1
      this.render()
      return
    }
    clearInterval(this.intervalID)
    this.remove()
  }

  render() {
    this.textContent = '💣' + '🔥'.repeat(this.count)
  }

  connectedCallback() {
    this.count = (this.localName.match(/-/g) || []).length
    this.render()
    this.intervalID = setInterval(this.down, 1000)
  }

  disconnectedCallback() {
    clearInterval(this.intervalID)
  }
}