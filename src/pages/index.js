import './index.css'

const popupProfile = document.querySelector(".popup_button_reduct");
const reductButton = document.querySelector(".info__button-reduct");
const profileForm = popupProfile.querySelector(".form-group");
const addButton = document.querySelector(".profile__add-button");
const popupAddItem = document.querySelector(".popup_button_add-item");
const cardForm  = popupAddItem.querySelector(".form-group");
const imageTitle = popupAddItem.querySelector(".form-group__item_el_image-title");
const imageLink = popupAddItem.querySelector(".form-group__item_el_image-link");
const options = {
  buttonSubmit: '.form-group__button-save',
  inputClass: '.form-group__item',
  inputErrorClass: 'form-group__item_error',
  buttonSubmitInactiveClass: 'form-group__button-save_inactive'
};
//import {initialCards} from "../scripts/utils/initialCards.js";
import {Card} from "../scripts/components/Card.js";
import {FormValidator} from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Api from '../scripts/components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41',
  headers: {
    authorization: '5f54aa7b-f781-4bbd-a84a-c9d65d5c54ef',
    'Content-Type': 'application/json'
  }
});

api.getUserInfo()
.then((savedUserInfo) =>{
  userInfo.setUserInfo(savedUserInfo);
  reductButton.addEventListener('click', function(){
    validationProfileForm.validBeforeOpenForm();
    reductProfilePopup.open(savedUserInfo);
  });
})
.catch((err) => console.log(err));

api.getInitialCards()
.then((initialCards) => {
  const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item, ".template-item", {handleCardClick: () => {
      popupWithImage.open(item)}});
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    }
  }, ".cards");
  cardList.renderItems();

  const addCardPopup = new PopupWithForm(".popup_button_add-item", {callbackSubmit: () => {
    api.addCard({name: imageTitle.value, link: imageLink.value})
    .then((card) =>{
      cardList.renderer({name: card.name, link: card.link});
      addCardPopup.close();
    })
  }});

  addButton.addEventListener("click", function(){
    validationaddCardForm.validBeforeOpenForm();
    addCardPopup.open();
  });

})
.catch((err) => console.log(err));

const validationProfileForm = new FormValidator(options, profileForm);
const validationaddCardForm = new FormValidator(options, cardForm);
const popupWithImage = new PopupWithImage('.popup_content_image');

const profileInfoSelectors = {profileName: ".info__name", profileAbout: ".info__about", profileAvatar: ".profile__avatar"}
const userInfo = new UserInfo(profileInfoSelectors);
const reductProfilePopup = new PopupWithForm(".popup_button_reduct", {callbackSubmit: (data) => {
  api.changeUserInfo(data)
    .then((userData) =>{
     console.log(userData)
     userInfo.setUserInfo(userData);
    }).catch((err) => console.log(err));
  reductProfilePopup.close();
}});




validationProfileForm.enableValidation();
validationaddCardForm.enableValidation();
