const popupProfile = document.querySelector(".popup_button_reduct");
const reductButton = document.querySelector(".info__button-reduct");
const formName = popupProfile.querySelector(".form-group__item_el_name");
const formJob = popupProfile.querySelector(".form-group__item_el_job");
const profileName = document.querySelector(".info__name");
const profileAbout = document.querySelector(".info__about");
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
const template = document.querySelector(".template-item");
const cards = document.querySelector(".cards");
const options = {
  buttonSubmit: '.form-group__button-save',
  inputClass: '.form-group__item',
  inputErrorClass: 'form-group__item_error',
  buttonSubmitInactiveClass: 'form-group__button-save_inactive'
};
import {initialCards} from "./initialCards.js";
import {openPopup, closePopup} from "./utils.js";
import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";

const validationProfileForm = new FormValidator(options, profileForm);
const validationaddCardForm = new FormValidator(options, cardForm);



function openPopupReduct(){
   // const inputList = Array.from(popupProfile.querySelectorAll(options.inputClass));
    formName.value = profileName.textContent;
    formJob.value = profileAbout.textContent;
   // inputList.forEach(function(input){
    //validationProfileForm.hideInpuError(input);
   // });
   validationProfileForm.setHideInputError(/*inputList*/);
   openPopup(popupProfile);
}

reductButton.addEventListener('click', function(){
 // validationProfileForm.setActiveButtonState();
 // formName.classList.remove(options.inputErrorClass);
 // formJob.classList.remove(options.inputErrorClass);
  openPopupReduct();
});

buttonCloseReduct.addEventListener('click', function(){
  closePopup(popupProfile);
});

profileForm.addEventListener('submit', function(evt){
  profileName.textContent = formName.value;
  profileAbout.textContent = formJob.value;
  closePopup(popupProfile);
});

addButton.addEventListener("click", function(){
  validationaddCardForm.setInactiveButtonState();
  openPopup(popupAddItem);
});

closePopupAddItem.addEventListener('click', function(){
  closePopup(popupAddItem);
});

cardForm .addEventListener('submit', function(evt){
  renderCard({name: imageTitle.value, link: imageLink.value});
  closePopup(popupAddItem);
  cardForm.reset();
});

buttonClosePopupImage.addEventListener("click", function(){
  closePopup(popupImage);
});

function createCard (item){
  const card = new Card (item, template);
  const cardElement = card.generateCard();
  return cardElement
}

function renderCard (item){
  cards.prepend(createCard (item));
}

initialCards.forEach((item) =>{
  renderCard(item);
});

validationProfileForm.enableValidation();
validationaddCardForm.enableValidation();
