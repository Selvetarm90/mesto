class Card {
  constructor (data, template, {handleCardClick, handleDelIconClick}){
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._template = document.querySelector(template);
    this._item = this._getTemplate();
    this._delButton = this._item.querySelector(".item__delete");
    this._handleCardClick = handleCardClick;
    this._handleDelIconClick = handleDelIconClick;
    this._ownerId = data.owner ?  data.owner._id : {};
    this.cardId = data._id;
  }

  _getTemplate(){
    const item =  this._template.content.querySelector(".item").cloneNode(true);
    return item;
  }

  _delButtonTrash(){
    this._delButton.remove();
  }

  generateCard(){
    if (this._ownerId !== 'ba5461e5c9bdc77d58f9a499'){
      this._delButtonTrash();
    }
    this._cardImage = this._item.querySelector(".item__picture");
    this._likesCount = this._item.querySelector('.item__like-count');
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likesCount.textContent = this._likes ? this._likes.length : 0;
    this. _item.querySelector(".item__title").textContent = this._name;
    return this._item;
  }


  _setEventListeners(){

    this._likeButton = this._item.querySelector(".item__like");
    this._delButton.addEventListener("click", () => this._handleDelIconClick(this.cardId));
    this._likeButton.addEventListener("click", () => this._toggleLike());
    this._cardImage.addEventListener("click", () => this._handleCardClick());
  }

  _removeItem () {
    this._item.remove();
    this._item = null;
  };

  _toggleLike () {
    this._likeButton.classList.toggle("item__like_active");
  };

}

 export {Card};
