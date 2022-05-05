import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
	constructor(popupSelector, {callbackSubmit}){
    super(popupSelector);
		this._callbackSubmit = callbackSubmit;
		this._form = this._popupSelector.querySelector(".form-group");
	}
	_getInputValues(){
		this._inputList = Array.from(this._popupSelector.querySelectorAll('.form-group__item'));
   // this._inputListValues = {};
   // this._inputListValues = this._inputList.map((input) =>{
    // return (`{${input.name}: ${input.value}}`);
  //  });
    this._inputListValues = this._inputList.reduce((result, item) => {
     // const key = Object.keys(item)[0];
      result[item.name] = item.value;
      return result;
    },{});

		return this._inputListValues;

	}


	setEventListeners(){
    this._listener = (() => this._callbackSubmit(this._getInputValues()));
		this._form.addEventListener('submit', this._listener);
		super.setEventListeners();
	}

	close(){
		super.close();
		this._getInputValues();
		this._form.reset();
	}

	delEventListeners(){
		this._form.removeEventListener('submit', this._listener);
		super.delEventListeners();
	}

}
