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
  const template = document.querySelector(".template-item");
  const cards = document.querySelector(".cards");

 // const delButton = item.querySelector(".item__delete");
  //const likeButton = item.querySelector(".item__like");
  class Card {
    constructor (name, link){
      this._name = name;
      this._link = link;
    }
    _getTemplate(){
      const item = template.content.firstElementChild.cloneNode(true);
      return item;
    }
    generateCard(){
      this._item = this._getTemplate();
      this._item.querySelector(".item__picture").src = this._link;
      this._item.querySelector(".item__picture").alt = this._name;
      this. _item.querySelector(".item__title").textContent = this._name;
      return this._item;
    }

  }
initialCards.forEach((item) =>{
  const card = new Card (item.name, item.link);
  const cardElement = card.generateCard();
  cards.prepend(cardElement);
  });

