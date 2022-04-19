import {options, setInactiveButtonState, setActiveButtonState} from "./index.js"

class FormValidator {
  constructor(config, formForValid){
    this._config = config;
    this._formForValid = formForValid;
  }

  enableValidation() {
    this._setEventListener();
  }

  _setEventListener(){
    const inputList = Array.from(this._formForValid.querySelectorAll(this._config.inputClass));
    this._formForValid.addEventListener('input', (evt) => this._handleInputForm(evt, inputList));
    this._formForValid.addEventListener('submit', function(evt){
      evt.preventDefault();
    });
  }

  _handleInputForm(evt, inputList){
    const input = evt.target;
    this._toggleButtonState(inputList);
    this._checkInputValidity(input);
  };

  _checkInputValidity (input){
    const isValidInput = input.validity.valid;
    if (!isValidInput){
      this._showInputErorr(input);
    }
    else this._hideInpuError(input);
  }

  _toggleButtonState (inputList){
    const buttonSubmit = this._formForValid.querySelector(this._config.buttonSubmit);
    if (!this._hasInvalidInput(inputList)){
     setActiveButtonState(buttonSubmit);
    }
    else {
     setInactiveButtonState(buttonSubmit);
    }
  }

  _showInputErorr (input){
    const errorMessage = this._formForValid.querySelector(`#${input.id}-error`);
    input.classList.add(this._config.inputErrorClass);
    errorMessage.textContent = input.validationMessage;
  }

  _hideInpuError (input){
    const errorMessage = this._formForValid.querySelector(`#${input.id}-error`);
    input.classList.remove(this._config.inputErrorClass);
    errorMessage.textContent = "";
  }
  _hasInvalidInput = (inputList) => {
    return inputList.some((input) => {
      return !input.validity.valid;
    });
  };
}

const profileForm = document.querySelector(".form-group[name='dateForm']");
const validationProfileForm = new FormValidator(options, profileForm);
validationProfileForm.enableValidation();

const addCardForm = document.querySelector(".form-group[name='date-form-add']");
const validationaddCardForm = new FormValidator(options, addCardForm);
validationaddCardForm.enableValidation();

