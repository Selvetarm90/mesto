import Popup from "./Popup.js";
export default class PopupWithImage extends Popup{
  constructor(data, popupSelector){
    super(popupSelector);
	this._name = data.name;
    this._link = data.link;
  }
  open(){
	const bigSizePicture = this._popupSelector.querySelector(".popup__image");
    const popupImageHeading = this._popupSelector.querySelector(".popup__heading-image");
    bigSizePicture.src = this._link;
    bigSizePicture.alt = this._name;
    popupImageHeading.textContent = this._name;
    super.open();
	
  }
}