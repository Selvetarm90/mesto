const popupProfile = document.querySelector(".popup_button_reduct");
const reductButton = document.querySelector(".info__button-reduct");
const formName = popupProfile.querySelector(".form-group__item_el_name");
const formJob = popupProfile.querySelector(".form-group__item_el_job");
const profileName = document.querySelector(".info__name");
const profileAbout = document.querySelector(".info__about");
const profileForm = popupProfile.querySelector(".form-group");
const buttonCloseReduct = popupProfile.querySelector(".popup__button-close");

const error = profileForm.querySelectorAll(".error");
const saveButtonProfile = popupProfile.querySelector(".form-group__button-save");
const addButton = document.querySelector(".profile__add-button");
const popupAddItem = document.querySelector(".popup_button_add-item");
const saveButton = popupAddItem.querySelector(".form-group__button-save");
const cardForm  = popupAddItem.querySelector(".form-group");
const imageTitle = popupAddItem.querySelector(".form-group__item_el_image-title");
const imageLink = popupAddItem.querySelector(".form-group__item_el_image-link");

const closePopupAddItem = popupAddItem.querySelector(".popup__button-close");
const popupImage = document.querySelector(".popup_content_image");
const buttonClosePopupImage = popupImage.querySelector(".popup__button-close");
const bigSizePicture = popupImage.querySelector(".popup__image");
const popupImageHeading = popupImage.querySelector(".popup__heading-image");
const options = {
  form: '.form-group',
  buttonSubmit: '.form-group__button-save',
  inputClass: '.form-group__item',
  inputErrorClass: 'form-group__item_error',
  buttonSubmitInactiveClass: 'form-group__button-save_inactive'
};

function createCard(card) {


  smallSizePicture.addEventListener("click", () => {
    openPopupImage(card)
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

function renderItem(card){
  const newItem = createCard(card)
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

function toggleReduct(){
  togglePopup(popupProfile);
  if (popupProfile.classList.contains("popup_opened")){
    error.forEach(function(spanError){
      spanError.textContent = "";
    });
  }

  formName.value = profileName.textContent;
  formJob.value = profileAbout.textContent;
}

function openPopupImage (card){
  bigSizePicture.src = card.link;
  bigSizePicture.alt = card.name;
  popupImageHeading.textContent = card.name;
  togglePopup(popupImage);
};

function removeItem (evt){
  evt.currentTarget.closest('.item').remove();

}
function toggleLike (evt){
  evt.currentTarget.classList.toggle("item__like_active");
}

function setActiveButtonState(button){
  button.classList.remove(options.buttonSubmitInactiveClass);
  button.removeAttribute("disabled");
};

function setInactiveButtonState(button){
  button.classList.add(options.buttonSubmitInactiveClass);
  button.setAttribute("disabled", "true");
};

reductButton.addEventListener('click', function(){
  setActiveButtonState(saveButtonProfile);
  formName.classList.remove(options.inputErrorClass);
  formJob.classList.remove(options.inputErrorClass);

  toggleReduct();
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
  setInactiveButtonState(saveButton);
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
