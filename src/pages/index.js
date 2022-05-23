import "./index.css";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithConfirm from "../scripts/components/PopupWithConfirm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Api from "../scripts/components/Api.js";
import {
  reductButton,
  profileForm,
  inputFirsname,
  inputJob,
  buttonAddCard,
  cardForm,
  avatarForm,
  options,
} from "../scripts/utils/utils.js";
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-41",
  headers: {
    authorization: "5f54aa7b-f781-4bbd-a84a-c9d65d5c54ef",
    "Content-Type": "application/json",
  },
});

const validationProfileForm = new FormValidator(options, profileForm);
const validationaddCardForm = new FormValidator(options, cardForm);
const validationChangeAvatarForm = new FormValidator(options, avatarForm);
const popupWithImage = new PopupWithImage(".popup_content_image");
const profileInfoSelectors = {
  profileName: ".info__name",
  profileAbout: ".info__about",
  profileAvatar: ".profile__avatar",
};
const userInfo = new UserInfo(profileInfoSelectors);

const reductProfilePopup = new PopupWithForm(".popup_button_reduct", {
  callbackSubmit: (data) => {
    data.button.textContent = "Сохранение...";
    api
      .changeUserInfo(data.data)
      .then((userData) => {
        userInfo.setUserInfo(userData);
        reductProfilePopup.close();
      })
      .finally(() => (data.button.textContent = "Сохранить"))
      .catch((err) => console.log(err));
  },
});

let myId = "";
const createCard = (item) => {
  const card = new Card(item, myId, ".template-item", {
    handleCardClick: () => {
      popupWithImage.open(item);
    },
    handleDelIconClick: (data) => {
      confirmDelCard.open(data);
    },
    handleLikeClick: (callbackCard) => {
      api
        .toggleLike(callbackCard._id, card.checkStatusLike())
        .then((newCard) => {
          card.updateData(newCard);
          card.toggleLike();
        })
        .catch((err) => console.log(err));
    },
  });
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
};
const cardList = new Section(
  {
    renderer: (item) => {
      createCard(item);
    },
  },
  ".cards"
);

api
  .getAllData()
  .then(([initialCards, savedUserInfo]) => {
    myId = savedUserInfo._id;
    userInfo.setUserInfo(savedUserInfo);
    cardList.renderItems(initialCards);
  })
  .catch((err) => console.log(err));

reductButton.addEventListener("click", function () {
  validationProfileForm.validBeforeOpenForm();
  const dataForInputs = userInfo.getUserInfo();
  inputFirsname.value = dataForInputs.name;
  inputJob.value = dataForInputs.about;
  reductProfilePopup.open();
});

const changeAvatarPopup = new PopupWithForm(".popup_button_change-avatar", {
  callbackSubmit: (data) => {
    data.button.textContent = "Сохранение...";
    api
      .changeAvatar(data.data)
      .then((card) => {
        userInfo.setUserInfo(card);
        changeAvatarPopup.close();
      })
      .finally(() => (data.button.textContent = "Сохранение"))
      .catch((err) => console.log(err));
  },
});

const avatar = userInfo.getUserInfo().avatar;
avatar.addEventListener("click", () => {
  validationChangeAvatarForm.validBeforeOpenForm();
  changeAvatarPopup.open();
});

const confirmDelCard = new PopupWithConfirm(".popup_button_confirm-del", {
  callbackSubmit: (callbackData) => {
    callbackData.button.textContent = "Удаление...";
    api
      .delCard(callbackData.data.id)
      .then(() => {
        callbackData.data.removeItem();
        confirmDelCard.close();
      })
      .finally(() => (callbackData.button.textContent = "Да"))
      .catch((err) => console.log(err));
  },
});

const addCardPopup = new PopupWithForm(".popup_button_add-item", {
  callbackSubmit: (data) => {
    data.button.textContent = "Сохранение...";
    api
      .addCard({ name: data.data.title, link: data.data.link })
      .then((card) => {
        createCard(card);
        addCardPopup.close();
      })
      .finally(() => (data.button.textContent = "Создать"))
      .catch((err) => console.log(err));
  },
});

buttonAddCard.addEventListener("click", function () {
  validationaddCardForm.validBeforeOpenForm();
  addCardPopup.open();
});

validationProfileForm.enableValidation();
validationaddCardForm.enableValidation();
validationChangeAvatarForm.enableValidation();
