import Popup from "./Popup.js";
export default class PopupWithImage extends Popup{
  constructor(popupSelector){
    super(popupSelector);
	  
  }

  open(data){
    this._name = data.name;
    this._link = data.link;
	  const bigSizePicture = this._popupElement.querySelector(".popup__image");
    const popupImageHeading = this._popupElement.querySelector(".popup__heading-image");
    bigSizePicture.src = this._link;
    bigSizePicture.alt = this._name;
    popupImageHeading.textContent = this._name;
    super.open();
  }
}
