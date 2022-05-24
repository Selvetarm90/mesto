const popupProfile = document.querySelector(".popup_button_reduct");
const reductButton = document.querySelector(".info__button-reduct");
const profileForm = popupProfile.querySelector(".form-group");
const inputFirsname = profileForm.querySelector(".form-group__item_el_name");
const inputJob = profileForm.querySelector(".form-group__item_el_job");
const buttonAddCard = document.querySelector(".profile__add-button");
const popupAddItem = document.querySelector(".popup_button_add-item");
const cardForm = popupAddItem.querySelector(".form-group");
const avatarPopup = document.querySelector(".popup_button_change-avatar");
const avatarButton = document.querySelector(".profile__avatar")
const avatarForm = avatarPopup.querySelector(".form-group");
const options = {
  buttonSubmit: ".form-group__button-save",
  inputClass: ".form-group__item",
  inputErrorClass: "form-group__item_error",
  buttonSubmitInactiveClass: "form-group__button-save_inactive",
};

export {
  reductButton,
  profileForm,
  inputFirsname,
  inputJob,
  buttonAddCard,
  cardForm,
  avatarForm,
  options,
  avatarButton
};
