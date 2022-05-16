export default class Section {
  constructor({data, renderer}, containerSelector) {
    this._renderedItems = data;
    this.renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    console.log(this._renderedItems)
    this._renderedItems.forEach(item => {
      this.renderer(item);
    });
  }
}
