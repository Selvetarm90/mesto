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
import {initialCards} from "../scripts/utils/initialCards.js";
import {Card} from "../scripts/components/Card.js";
import {FormValidator} from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
const validationProfileForm = new FormValidator(options, profileForm);
const validationaddCardForm = new FormValidator(options, cardForm);
const popupWithImage = new PopupWithImage('.popup_content_image');
const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, ".template-item", {handleCardClick: () => {
    popupWithImage.open(item)}});
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, ".cards");

const profileInfoSelectors = {profileName: ".info__name", profileAbout: ".info__about"}
const userInfo = new UserInfo(profileInfoSelectors);
const reductProfilePopup = new PopupWithForm(".popup_button_reduct", {callbackSubmit: (data) => {
  userInfo.setUserInfo(data);
  reductProfilePopup.close();
}});
reductButton.addEventListener('click', function(){
  validationProfileForm.validBeforeOpenForm();
  reductProfilePopup.open(userInfo.getUserInfo());
});

const addCardPopup = new PopupWithForm(".popup_button_add-item", {callbackSubmit: () => {
  cardList.renderer({name: imageTitle.value, link: imageLink.value});
  addCardPopup.close();
}});
addButton.addEventListener("click", function(){
  validationaddCardForm.validBeforeOpenForm();
  addCardPopup.open();
});

cardList.renderItems();
validationProfileForm.enableValidation();
validationaddCardForm.enableValidation();
