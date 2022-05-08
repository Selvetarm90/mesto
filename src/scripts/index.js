import '../pages/index.css'

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
import {initialCards} from "./utils/initialCards.js";
import {Card} from "./components/Card.js";
import {FormValidator} from "./components/FormValidator.js";
import Section from "./components/Section.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
const validationProfileForm = new FormValidator(options, profileForm);
const validationaddCardForm = new FormValidator(options, cardForm);
const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, ".template-item", {handleCardClick: () => {
    const popupWithImage = new PopupWithImage(item, '.popup_content_image');
    popupWithImage.open()}});
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, ".cards");

const profileInfoSelectors = {profileName: ".info__name", profileAbout: ".info__about"}
const userInfo = new UserInfo(profileInfoSelectors);
reductButton.addEventListener('click', function(){
  const reductProfilePopup = new PopupWithForm(".popup_button_reduct", {callbackSubmit: (data) => {
    userInfo.setUserInfo(data);
    reductProfilePopup.close();
  }});

  validationProfileForm.validBeforeOpenForm();
  reductProfilePopup.open(userInfo.getUserInfo());
});


addButton.addEventListener("click", function(){
  const addCardPopup = new PopupWithForm(".popup_button_add-item", {callbackSubmit: () => {
    cardList.addNewCard({name: imageTitle.value, link: imageLink.value});
    addCardPopup.close();
  }});
  validationaddCardForm.validBeforeOpenForm();
  addCardPopup.open();
});

cardList.renderItems();
validationProfileForm.enableValidation();
validationaddCardForm.enableValidation();
