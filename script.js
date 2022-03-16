let popupReduct = document.querySelector(".popup_button_reduct");
let reductButton = document.querySelector(".info__button-reduct");
let formName = popupReduct.querySelector(".form-group__item_el_name");
let formJob = popupReduct.querySelector(".form-group__item_el_job");
let profileName = document.querySelector(".info__name");
let profileAbout = document.querySelector(".info__about");
let savedFormReduct = popupReduct.querySelector(".form-group");
let buttonCloseReduct = popupReduct.querySelector(".popup__button-close");

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

const cards = document.querySelector(".cards");


function renderItem(object){
  item = document.querySelector(".template-item").content.firstElementChild.cloneNode(true);
  let smallSizePicture = item.querySelector(".item__picture");
  smallSizePicture.src = object.link;
  let titlePictue = item.querySelector(".item__title");
  titlePictue.textContent = object.name;
  smallSizePicture.addEventListener("click", openPopupImage);

  cards.prepend(item);

};


function openOrCloseForm(modal){
  modal.classList.toggle("popup_opened");
}

function openReduct(){
  openOrCloseForm(popupReduct);
  formName.value = profileName.textContent;
  formJob.value = profileAbout.textContent;
}

reductButton.addEventListener('click', openReduct);

buttonCloseReduct.addEventListener('click', function(){
  openOrCloseForm(popupReduct);
});

savedFormReduct.addEventListener('submit', function(evt){
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileAbout.textContent = formJob.value;
  openOrCloseForm(popupReduct);
});
const addButton = document.querySelector(".profile__add-button");
const popupAddItem = document.querySelector(".popup_button_add-item");
addButton.addEventListener("click", function(){
  openOrCloseForm(popupAddItem);
});
const closePopupAddItem = popupAddItem.querySelector(".popup__button-close");
closePopupAddItem.addEventListener('click', function(){
  openOrCloseForm(popupAddItem);
});
const saveFormAddItem = popupAddItem.querySelector(".form-group");
const imageTitle = popupAddItem.querySelector(".form-group__item_el_image-title");
const imageLink = popupAddItem.querySelector(".form-group__item_el_image-link");
saveFormAddItem.addEventListener('submit', function(evt){
  evt.preventDefault();
  renderItem({name: imageTitle.value, link: imageLink.value});
  openOrCloseForm(popupAddItem);
});
const popupImage = document.querySelector(".popup_content_image");
const buttonClosePopupImage = popupImage.querySelector(".popup__button-close");
buttonClosePopupImage.addEventListener("click", function(){
  openOrCloseForm(popupImage);
});



initialCards.map(renderItem);


 function openPopupImage (evt){
  const bigSizePicture = popupImage.querySelector(".popup__image");
  bigSizePicture.src = evt.currentTarget.src;
  popupImage.querySelector(".popup__heading-image").textContent = evt.currentTarget.nextElementSibling.textContent;
  openOrCloseForm(popupImage);
};

function removeItem (evt){

}


