const popupReduct = document.querySelector(".popup_button_reduct");
const reductButton = document.querySelector(".info__button-reduct");
const formName = popupReduct.querySelector(".form-group__item_el_name");
const formJob = popupReduct.querySelector(".form-group__item_el_job");
const profileName = document.querySelector(".info__name");
const profileAbout = document.querySelector(".info__about");
const savedFormReduct = popupReduct.querySelector(".form-group");
const buttonCloseReduct = popupReduct.querySelector(".popup__button-close");

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


function createCard(object) {
  const item = document.querySelector(".template-item").content.firstElementChild.cloneNode(true);
  const smallSizePicture = item.querySelector(".item__picture");
  const titlePictue = item.querySelector(".item__title");
  const delButton = item.querySelector(".item__delete");
  const likeButton = item.querySelector(".item__like");
  smallSizePicture.src = object.link;
  titlePictue.textContent = object.name;
  smallSizePicture.addEventListener("click", openPopupImage);
  delButton.addEventListener("click", removeItem);
  likeButton.addEventListener("click", qetLike);
  return item;
};


function renderItem(object){
  const item = createCard(object)
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
  evt.currentTarget.closest('.item').remove();

}
function qetLike (evt){
  evt.currentTarget.classList.toggle("item__like_active");
}


