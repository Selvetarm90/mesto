const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
const template = document.querySelector(".template-item");
const cards = document.querySelector(".cards");

import {togglePopup, popupImage} from "./index.js"
const bigSizePicture = popupImage.querySelector(".popup__image");
const popupImageHeading = popupImage.querySelector(".popup__heading-image");
class Card {
  constructor (data){
    this._name = data.name;
    this._link = data.link;
  }

  _getTemplate(){
    const item = template.content.firstElementChild.cloneNode(true);
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
    bigSizePicture.src = this._link;
    bigSizePicture.alt = this._name;
    popupImageHeading.textContent = this._name;
    togglePopup(popupImage);
  }


}
initialCards.forEach((item) =>{
  const card = new Card (item);
  const cardElement = card.generateCard();
  cards.prepend(cardElement);
  });

