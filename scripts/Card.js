import {openPopup} from "./utils.js"
class Card {
  constructor (data, template){
    this._name = data.name;
    this._link = data.link;
    this._template = template;
  }

  _getTemplate(){
    const item = this._template.content.firstElementChild.cloneNode(true);
    return item;
  }

  generateCard(){
    this._item = this._getTemplate();
    this._setEventListeners();
    this._item.querySelector(".item__picture").src = this._link;
    this._item.querySelector(".item__picture").alt = this._name;
    this. _item.querySelector(".item__title").textContent = this._name;
    return this._item;
  }

  _setEventListeners(){
    const delButton = this._item.querySelector(".item__delete");
    const likeButton = this._item.querySelector(".item__like");
    const smallSizePicture = this._item.querySelector(".item__picture")
    delButton.addEventListener("click", (evt) => {
      this._removeItem (evt);
    });
    likeButton.addEventListener("click", (evt) => {
      this._toggleLike(evt);
    });
    smallSizePicture.addEventListener("click", () => {
      this._openPopupImage()
    });

  }

  _removeItem (evt){
    evt.currentTarget.closest('.item').remove();
  }

  _toggleLike(evt){
    evt.currentTarget.classList.toggle("item__like_active");
  };

  _openPopupImage(){
    const popupImage = document.querySelector(".popup_content_image");
    const bigSizePicture = popupImage.querySelector(".popup__image");
    const popupImageHeading = popupImage.querySelector(".popup__heading-image");
    bigSizePicture.src = this._link;
    bigSizePicture.alt = this._name;
    popupImageHeading.textContent = this._name;
    openPopup(popupImage);
  }

}

 export {Card};
