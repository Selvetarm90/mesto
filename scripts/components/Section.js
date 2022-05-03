export default class Section {
    constructor({data, renderer}, containerSelector) {
      this._renderedItems = data;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  
    addItem(element) {
      this._container.prepend(element);
    }

    addNewCard(element){
      this._renderer(element);
    }
  
    renderItems() {
      this._renderedItems.forEach(item => {
        this._renderer(item);
      });
    }
  }
  