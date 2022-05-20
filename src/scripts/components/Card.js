class Card {
  constructor (data, id, template, {handleCardClick, handleDelIconClick, handleLikeClick}){
    this._data = data
    this._likes = data.likes;
    this._name = data.name;
    this._link = data.link;
    this._template = document.querySelector(template);
    this._item = this._getTemplate();
    this._delButton = this._item.querySelector(".item__delete");
    this._handleCardClick = handleCardClick;
    this._handleDelIconClick = handleDelIconClick;
    this._handleLikeClick = handleLikeClick;
    this._myId = id;
    this._ownerId =  data.owner._id;
    this.cardId = data._id;

  }

  _getTemplate(){
    const item =  this._template.content.querySelector(".item").cloneNode(true);
    return item;
  }

  _removeButtonTrash(){
    this._delButton.remove();
  }

  generateCard(){
    console.log(this._ownerId)
    if (this._ownerId !== this._myId){
      this._removeButtonTrash();
    }
    this._cardImage = this._item.querySelector(".item__picture");
    this._likesCount = this._item.querySelector('.item__like-count');
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likesCount.textContent = this._likes.length;
    this. _item.querySelector(".item__title").textContent = this._name;
    return this._item;
  }


  _setEventListeners(){

    this._likeButton = this._item.querySelector(".item__like");
    if (this._item.contains(this._delButton)){
      this._delButton.addEventListener("click",  () => this._handleDelIconClick({id: this.cardId, removeItem: () => this._removeItem()}));
    }
    this._likeButton.addEventListener("click", () => this._handleLikeClick(this._data));
    this._cardImage.addEventListener("click", () => this._handleCardClick());
  }

  _removeItem () {
    this._item.remove();
    this._item = null;
  };

  _toggleLike (data) {
    this._likeButton.classList.toggle("item__like_active");
    if(this._likeButton.classList.contains("item__like_active")){
      this._likesCount.textContent++;
    }
    else this._likesCount.textContent--;
  };

}

 export {Card};
