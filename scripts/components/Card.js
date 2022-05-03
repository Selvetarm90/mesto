import {openPopup} from "../utils/utils.js"
class Card {
  constructor (data, template, {handleCardClick}){
    this._name = data.name;
    this._link = data.link;
    this._template = document.querySelector(template);
    this._handleCardClick = handleCardClick;
  }

  _getTemplate(){
    const item =  this._template.content.querySelector(".item").cloneNode(true);
    return item;
  }

  generateCard(){
    this._item = this._getTemplate();
    this._cardImage = this._item.querySelector(".item__picture");
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this. _item.querySelector(".item__title").textContent = this._name;
    return this._item;
  }

  _setEventListeners(){
    this._delButton = this._item.querySelector(".item__delete");
    this._likeButton = this._item.querySelector(".item__like");
    this._delButton.addEventListener("click", () => this._removeItem ());
    this._likeButton.addEventListener("click", () => this._toggleLike());
    this._cardImage.addEventListener("click", () => this._handleCardClick());
  }

  _removeItem () {
    this._item.remove();
    this._item = null;
  };

  _toggleLike () {
    this._likeButton.classList.toggle("item__like_active");
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
