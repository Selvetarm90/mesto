export default class Popup {
	constructor(popupSelector){
		this._popupElement = document.querySelector(popupSelector);
		this._buttonClosePopup = this._popupElement.querySelector(".popup__button-close");
		this.escClose = ((evt) => this._handleEscClose(evt));
		this.callbackClose = (() => this.close());
		this.callbackOutClick = ((evt) => this._handleOutsideClickClose(evt));
	}

	open(){
		this.setEventListeners();
		this._popupElement.classList.add("popup_opened");
	}

	close(){
		this._popupElement.classList.remove("popup_opened");
		this.delEventListeners();
	}

	_handleEscClose(evt){
		if (evt.key === "Escape"){
		  this.close();
		}
	}
	_handleOutsideClickClose (evt){
		if (evt.target === this._popupElement){
		  this.close();
		};
	}

	setEventListeners(){
		this._buttonClosePopup.addEventListener('click', this.callbackClose);
		document.addEventListener('keydown', this.escClose);
		this._popupElement.addEventListener('click', this.callbackOutClick);
	}

	delEventListeners(){
		this._buttonClosePopup.removeEventListener('click', this.callbackClose);
		document.removeEventListener('keydown', this.escClose);
		this._popupElement.removeEventListener('click', this.callbackOutClick)

	}

}
