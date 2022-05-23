import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, { callbackSubmit }) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._form = this._popupElement.querySelector(".form-group");
    this._buttonSubmit = this._form.querySelector(".form-group__button-save");
  }

  open(data) {
    this._data = data;
    super.open();
  }

  setEventListeners() {
    this._listener = (evt) => {
      evt.preventDefault();
      this._callbackSubmit({ data: this._data, button: this._buttonSubmit });
    };
    this._form.addEventListener("submit", this._listener);
    super.setEventListeners();
  }

  delEventListeners() {
    this._form.removeEventListener("submit", this._listener);
    super.delEventListeners();
  }
}
