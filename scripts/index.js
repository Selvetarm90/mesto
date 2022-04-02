const popupProfile = document.querySelector(".popup_button_reduct");
const reductButton = document.querySelector(".info__button-reduct");
const formName = popupProfile.querySelector(".form-group__item_el_name");
const formJob = popupProfile.querySelector(".form-group__item_el_job");
const profileName = document.querySelector(".info__name");
const profileAbout = document.querySelector(".info__about");
const profileForm = popupProfile.querySelector(".form-group");
const buttonCloseReduct = popupProfile.querySelector(".popup__button-close");
const cards = document.querySelector(".cards");
const error = profileForm.querySelectorAll(".error");
const saveButtonProfile = popupProfile.querySelector(".form-group__button-save");
const addButton = document.querySelector(".profile__add-button");
const popupAddItem = document.querySelector(".popup_button_add-item");
const saveButton = popupAddItem.querySelector(".form-group__button-save");
const cardForm  = popupAddItem.querySelector(".form-group");
const imageTitle = popupAddItem.querySelector(".form-group__item_el_image-title");
const imageLink = popupAddItem.querySelector(".form-group__item_el_image-link");
const template = document.querySelector(".template-item");
const closePopupAddItem = popupAddItem.querySelector(".popup__button-close");
const popupImage = document.querySelector(".popup_content_image");
const buttonClosePopupImage = popupImage.querySelector(".popup__button-close");
const bigSizePicture = popupImage.querySelector(".popup__image");
const popupImageHeading = popupImage.querySelector(".popup__heading-image");

function createCard(object) {
  const item = template.content.firstElementChild.cloneNode(true);
  const smallSizePicture = item.querySelector(".item__picture");
  const titlePictue = item.querySelector(".item__title");
  const delButton = item.querySelector(".item__delete");
  const likeButton = item.querySelector(".item__like");
  smallSizePicture.src = object.link;
  smallSizePicture.alt = object.name;
  titlePictue.textContent = object.name;
  smallSizePicture.addEventListener("click", () => {
    openPopupImage(object)
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
  }
}

function renderItem(object){
  const newItem = createCard(object)
  cards.prepend(newItem);
};

function togglePopup(modal){
  modal.classList.toggle("popup_opened");
  modal.addEventListener('click', checkAndClose);
  document.addEventListener('keydown', closeWithEsc);
  if (!modal.classList.contains("popup_opened")){
    document.removeEventListener('keydown', closeWithEsc);
  };

}

function openReduct(){
  togglePopup(popupProfile);
  if (popupProfile.classList.contains("popup_opened")){
    error.forEach(function(spanError){
      spanError.textContent = "";
    });
  }
  formName.value = profileName.textContent;
  formJob.value = profileAbout.textContent;
}

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

reductButton.addEventListener('click', function(){
  saveButtonProfile.classList.remove("form-group__button-save_inactive");
  formName.classList.remove('form-group__item_error');
  formJob.classList.remove('form-group__item_error');
  saveButtonProfile.removeAttribute("disabled");
  openReduct();
});

buttonCloseReduct.addEventListener('click', function(){
  togglePopup(popupProfile);
});

profileForm.addEventListener('submit', function(evt){
  profileName.textContent = formName.value;
  profileAbout.textContent = formJob.value;
  togglePopup(popupProfile);
});

addButton.addEventListener("click", function(){
  saveButton.classList.add("form-group__button-save_inactive");
  saveButton.setAttribute("disabled", "disabled");
  togglePopup(popupAddItem);
});

closePopupAddItem.addEventListener('click', function(){
  togglePopup(popupAddItem);
});


cardForm .addEventListener('submit', function(evt){
  renderItem({name: imageTitle.value, link: imageLink.value});
  togglePopup(popupAddItem);
  cardForm.reset();
});

buttonClosePopupImage.addEventListener("click", function(){
  togglePopup(popupImage);
});

initialCards.forEach(renderItem);







