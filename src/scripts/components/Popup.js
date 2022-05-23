export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleOutsideClickClose = this._handleOutsideClickClose.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this.setEventListeners();
    this._popupElement.classList.add("popup_opened");
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    this.delEventListeners();
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  _handleOutsideClickClose(evt) {
    if (evt.target === this._popupElement || evt.target.classList.contains("popup__button-close")) {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener("keydown", this._handleEscClose);
    this._popupElement.addEventListener("click", this._handleOutsideClickClose);
  }

  delEventListeners() {
    document.removeEventListener("keydown", this._handleEscClose);
    this._popupElement.removeEventListener("click", this._handleOutsideClickClose);
  }
}
