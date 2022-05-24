import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(data) {
    const bigSizePicture = this._popupElement.querySelector(".popup__image");
    const popupImageHeading = this._popupElement.querySelector(".popup__heading-image");
    bigSizePicture.src = data.link;
    bigSizePicture.alt = data.name;
    popupImageHeading.textContent = data.name;
    super.open();
  }
}
