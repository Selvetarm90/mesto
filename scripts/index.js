const popupProfile = document.querySelector(".popup_button_reduct");
const reductButton = document.querySelector(".info__button-reduct");
const formName = popupProfile.querySelector(".form-group__item_el_name");
const formJob = popupProfile.querySelector(".form-group__item_el_job");
const profileName = document.querySelector(".info__name");
const profileAbout = document.querySelector(".info__about");
const profileForm = popupProfile.querySelector(".form-group");
const buttonCloseReduct = popupProfile.querySelector(".popup__button-close");

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
const error = profileForm.querySelectorAll(".error");


function createCard(object) {
  const item = document.querySelector(".template-item").content.firstElementChild.cloneNode(true);
  const smallSizePicture = item.querySelector(".item__picture");
  const titlePictue = item.querySelector(".item__title");
  const delButton = item.querySelector(".item__delete");
  const likeButton = item.querySelector(".item__like");
  smallSizePicture.src = object.link;
  smallSizePicture.alt = object.name;
  titlePictue.textContent = object.name;
  smallSizePicture.addEventListener("click", () => {
    openPopupImage(object)
    closeClickWithout(popupImage);
  });
  delButton.addEventListener("click", removeItem);
  likeButton.addEventListener("click", toggleLike);
  return item;
};

function checkAndClose (evt){
  if (evt.target.classList.contains("popup_opened")){
    togglePopup(evt.currentTarget);
    evt.currentTarget.removeEventListener('click', checkAndClose);
  };
}

function closeWithEsc (evt){
  if (evt.key === "Escape"){
    const item = document.querySelector(".popup_opened");
    togglePopup(item);
    document.removeEventListener('keydown', closeWithEsc);
  }
}

function closeClickWithout (item){
    item.addEventListener('click', checkAndClose);
    document.addEventListener('keydown', closeWithEsc);
}

function renderItem(object){
  const item = createCard(object)
  cards.prepend(item);
};

function togglePopup(modal){
  modal.classList.toggle("popup_opened");
  if (modal === popupProfile && popupProfile.classList.contains("popup_opened")){
    error.forEach(function(element){
      element.textContent = "";
    });
  }
}

function openReduct(){
  togglePopup(popupProfile);
  formName.value = profileName.textContent;
  formJob.value = profileAbout.textContent;
}

reductButton.addEventListener('click', function(){

  openReduct();
  closeClickWithout(popupProfile);
});

buttonCloseReduct.addEventListener('click', function(){
  togglePopup(popupProfile);
});

profileForm.addEventListener('submit', function(evt){
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileAbout.textContent = formJob.value;
  togglePopup(popupProfile);
});

const addButton = document.querySelector(".profile__add-button");
const popupAddItem = document.querySelector(".popup_button_add-item");
const saveButton = popupAddItem.querySelector(".form-group__button-save");

addButton.addEventListener("click", function(){
  saveButton.classList.add("form-group__button-save_inactive");
  saveButton.setAttribute("disabled", "disabled");
  togglePopup(popupAddItem);
  closeClickWithout(popupAddItem);
});

const closePopupAddItem = popupAddItem.querySelector(".popup__button-close");
closePopupAddItem.addEventListener('click', function(){
  togglePopup(popupAddItem);
});

const cardForm  = popupAddItem.querySelector(".form-group");
const imageTitle = popupAddItem.querySelector(".form-group__item_el_image-title");
const imageLink = popupAddItem.querySelector(".form-group__item_el_image-link");
cardForm .addEventListener('submit', function(evt){
  evt.preventDefault();
  renderItem({name: imageTitle.value, link: imageLink.value});
  togglePopup(popupAddItem);
  cardForm.reset();
});

const popupImage = document.querySelector(".popup_content_image");
const buttonClosePopupImage = popupImage.querySelector(".popup__button-close");
buttonClosePopupImage.addEventListener("click", function(){
  togglePopup(popupImage);
});

initialCards.map(renderItem);

const bigSizePicture = popupImage.querySelector(".popup__image");
const popupImageHeading = popupImage.querySelector(".popup__heading-image");
function openPopupImage (object){
  bigSizePicture.src = object.link;
  bigSizePicture.alt = object.name;
  popupImageHeading.textContent = object.name;
  togglePopup(popupImage);
};

function removeItem (evt){
  evt.currentTarget.closest('.item').remove();

}
function toggleLike (evt){
  evt.currentTarget.classList.toggle("item__like_active");
}


