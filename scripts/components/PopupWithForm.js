import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
	constructor(popupSelector, {callbackSubmit}){
    super(popupSelector);
		this._callbackSubmit = callbackSubmit;
		this._form = this._popupSelector.querySelector(".form-group");
	}
	_getInputValues(){
		const inputList = this._popupSelector.querySelectorAll('.form-group__item');
		return inputList;
	
	}

	setEventListeners(){
		this._form.addEventListener('submit', this._callbackSubmit);
		super.setEventListeners();
	}

	close(){
		super.close();
		this._getInputValues();
		this._form.reset();
	}

	delEventListeners(){
		this._form.removeEventListener('submit', this._callbackSubmit);
		super.delEventListeners();
	}

}