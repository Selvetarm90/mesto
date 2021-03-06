class Card {
  constructor(data, id, templateSelector, { handleCardClick, handleDelIconClick, handleLikeClick }) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._template = document.querySelector(templateSelector);
    this._handleCardClick = handleCardClick;
    this._handleDelIconClick = handleDelIconClick;
    this._handleLikeClick = handleLikeClick;
    this._myId = id;
    this._ownerId = data.owner._id;
    this.cardId = data._id;
  }

  _getTemplate() {
    return this._template.content.querySelector(".item").cloneNode(true);
  }

  _removeButtonTrash() {
    this._delButton.style.display = "none";
  }

  generateCard() {
    this._item = this._getTemplate();
    this._delButton = this._item.querySelector(".item__delete");
    this._likeButton = this._item.querySelector(".item__like");
    if (this._ownerId !== this._myId) {
      this._removeButtonTrash();
    }
    if (this.checkStatusLike()) {
      this._changeColorLike();
    }
    this._cardImage = this._item.querySelector(".item__picture");
    this._likesCount = this._item.querySelector(".item__like-count");
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setLikeCount(this._data.likes);
    this._item.querySelector(".item__title").textContent = this._name;
    return this._item;
  }

  _setEventListeners() {
    if (this._item.contains(this._delButton)) {
      this._delButton.addEventListener("click", () =>
        this._handleDelIconClick({
          id: this.cardId,
          removeItem: () => this._removeItem(),
        })
      );
    }
    this._likeButton.addEventListener("click", () => this._handleLikeClick(this._data));
    this._cardImage.addEventListener("click", this._handleCardClick);
  }

  _removeItem() {
    this._item.remove();
    this._item = null;
  }

  checkStatusLike() {
    return this._data.likes.some((item) => item._id === this._myId);
  }

  _changeColorLike() {
    this._likeButton.classList.toggle("item__like_active");
  }

  _setLikeCount() {
    this._likesCount.textContent = this._data.likes.length;
  }

  updateData(data) {
    this._data.likes = data.likes;
  }

  toggleLike() {
    this._changeColorLike();
    this._setLikeCount();
  }
}

export { Card };
