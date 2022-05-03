export default class Popup {
	constructor(popupSelector){
		this._popupSelector = document.querySelector(popupSelector);
		this._buttonClosePopup = this._popupSelector.querySelector(".popup__button-close");
		this.escClose = ((evt) => this._handleEscClose(evt));
	}

	open(){
		this.setEventListeners();
		this._popupSelector.classList.add("popup_opened");
		
	}

	close(){
		this._popupSelector.classList.remove("popup_opened");
		this.delEventListeners();
	}

	_handleEscClose(evt){
		if (evt.key === "Escape"){
		  this.close();
		}
	}
	_handleOutsideClickClose (evt){
		//if (evt.target.classList.contains("popup_opened")){
		if (evt.target === this._popupSelector){
		  this.close();
		 // evt.currentTarget.removeEventListener('click', checkAndClose);
		};
	  }

	setEventListeners(){
		//const buttonClosePopup = this._popupSelector.querySelector(".popup__button-close");
		//const evtClose = ((evt) => this._handleEscClose(evt));
		this._buttonClosePopup.addEventListener('click', () => this.close());
		document.addEventListener('keydown', this.escClose);
		this._popupSelector.addEventListener('click', (evt) => this._handleOutsideClickClose(evt));
	}

	delEventListeners(){
	//	this._buttonClosePopup.removeEventListener('click', () => this.close());
  //	const evtClose = ((evt) => this._handleEscClose(evt));
		document.removeEventListener('keydown', this.escClose);

	}

}