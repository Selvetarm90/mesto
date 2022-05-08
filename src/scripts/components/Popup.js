export default class Popup {
	constructor(popupSelector){
		this._popupSelector = document.querySelector(popupSelector);
		this._buttonClosePopup = this._popupSelector.querySelector(".popup__button-close");
	}

	open(){
		this.setEventListeners();
		this._popupSelector.classList.add("popup_opened");
	}

	close(){
		this._popupSelector.classList.remove("popup_opened");
		console.log('close');
		this.delEventListeners();
	}

	_handleEscClose(evt){
		if (evt.key === "Escape"){
		  this.close();
		}
	}
	_handleOutsideClickClose (evt){
		if (evt.target === this._popupSelector){
		  this.close();
		};
	}

	setEventListeners(){
		this.escClose = ((evt) => this._handleEscClose(evt));
		this.callbackClose = (() => this.close());
		this.callbackOutClick = ((evt) => this._handleOutsideClickClose(evt));
		this._buttonClosePopup.addEventListener('click', this.callbackClose);
		document.addEventListener('keydown', this.escClose);
		this._popupSelector.addEventListener('click', this.callbackOutClick);
	}

	delEventListeners(){
		this._buttonClosePopup.removeEventListener('click', this.callbackClose);
		document.removeEventListener('keydown', this.escClose);
		this._popupSelector.removeEventListener('click', this.callbackOutClick)

	}

}
