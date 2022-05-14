import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
	constructor(popupSelector, {callbackSubmit}){
    super(popupSelector);
		this._callbackSubmit = callbackSubmit;
		this._form = this._popupElement.querySelector(".form-group");

	}
	_getInputValues(){
		this._inputList = Array.from(this._popupElement.querySelectorAll('.form-group__item'));
    this._inputListValues = this._inputList.reduce((result, item) => {
      result[item.name] = item.value;
      return result;
    },{});
		return this._inputListValues;
	}

  open(data){
    if (data){
      const inputFirsname = this._form.querySelector('.form-group__item_el_name');
      const inputJob = this._form.querySelector('.form-group__item_el_job');
      console.log(data)
      inputFirsname.value = data.name;
      inputJob.value = data.about;
    }
    super.open()
  }

	setEventListeners(){
    this._listener = (() => this._callbackSubmit(this._getInputValues()));
		this._form.addEventListener('submit', this._listener);
		super.setEventListeners();
	}

	close(){
		super.close();
		this._form.reset();
	}

	delEventListeners(){
		this._form.removeEventListener('submit', this._listener);
		super.delEventListeners();
	}

}
