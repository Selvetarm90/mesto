const popupProfile = document.querySelector(".popup_button_reduct");
const reductButton = document.querySelector(".info__button-reduct");
const formName = popupProfile.querySelector(".form-group__item_el_name");
const formJob = popupProfile.querySelector(".form-group__item_el_job");
//const profileName = document.querySelector(".info__name");
//const profileAbout = document.querySelector(".info__about");
const profileForm = popupProfile.querySelector(".form-group");
const buttonCloseReduct = popupProfile.querySelector(".popup__button-close");
const addButton = document.querySelector(".profile__add-button");
const popupAddItem = document.querySelector(".popup_button_add-item");
const cardForm  = popupAddItem.querySelector(".form-group");
const imageTitle = popupAddItem.querySelector(".form-group__item_el_image-title");
const imageLink = popupAddItem.querySelector(".form-group__item_el_image-link");
const popupImage = document.querySelector(".popup_content_image");
const buttonClosePopupImage = popupImage.querySelector(".popup__button-close");
const closePopupAddItem = popupAddItem.querySelector(".popup__button-close");
//const cards = document.querySelector(".cards");
const options = {
  buttonSubmit: '.form-group__button-save',
  inputClass: '.form-group__item',
  inputErrorClass: 'form-group__item_error',
  buttonSubmitInactiveClass: 'form-group__button-save_inactive'
};
import {initialCards} from "./utils/initialCards.js";
//import {openPopup, closePopup} from "./utils/utils.js";
import {Card} from "./components/Card.js";
import {FormValidator} from "./components/FormValidator.js";

import Section from "./components/Section.js";
//import Popup from "./components/Popup.js";
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

function openPopupReduct(){
  formName.value = profileName.textContent;
  formJob.value = profileAbout.textContent;
  //validationProfileForm.validBeforeOpenForm();
  openPopup(popupProfile);
}

reductButton.addEventListener('click', function(){
  const reductProfilePopup = new PopupWithForm(".popup_button_reduct", {callbackSubmit: () => {
    const userInfo = new UserInfo({profileName: ".info__name", profileAbout: ".info__about"})
   // profileName.textContent = formName.value;
   // profileAbout.textContent = formJob.value;
    userInfo.setUserInfo();
    reductProfilePopup.close();
    console.log("Сабмит ок!");
  }});
  validationProfileForm.validBeforeOpenForm();
  reductProfilePopup.open();
});

//buttonCloseReduct.addEventListener('click', function(){
 // reductProfilePopup.close();
//});

//profileForm.addEventListener('submit', function(){
  //profileName.textContent = formName.value;
  //profileAbout.textContent = formJob.value;
  //reductProfilePopup.close();
//});

addButton.addEventListener("click", function(){
  const addCardPopup = new PopupWithForm(".popup_button_add-item", {callbackSubmit: () => {
    cardList.addNewCard({name: imageTitle.value, link: imageLink.value});
    addCardPopup.close();
    
    console.log("Сабмит-2 ок!");
  }});
  validationaddCardForm.validBeforeOpenForm();
  addCardPopup.open();
});

//closePopupAddItem.addEventListener('click', function(){
 // addCardPopup.close();
//});

//cardForm.addEventListener('submit', function(){
 // cardList.addNewCard({name: imageTitle.value, link: imageLink.value});
 // closePopup(popupAddItem);
 // cardForm.reset();
//});

//buttonClosePopupImage.addEventListener("click", function(){
//  closePopup(popupImage);
//});

/*
function createCard (item){
  const card = new Card (item, ".template-item");
  const cardElement = card.generateCard();
  return cardElement
}

function renderCard (item){
  cards.prepend(createCard (item));
}

initialCards.forEach((item) =>{
  renderCard(item);
});
*/
cardList.renderItems();
validationProfileForm.enableValidation();
validationaddCardForm.enableValidation();
