//import {options, setInactiveButtonState, setActiveButtonState} from "./index.js"

class FormValidator {
  constructor(config, formForValid){
    this._config = config;
    this._formForValid = formForValid;
    this._buttonSubmit = formForValid.querySelector(config.buttonSubmit);
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
    this.toggleButtonState(inputList);
    this._checkInputValidity(input);
  };

  _checkInputValidity (input){
    const isValidInput = input.validity.valid;
    if (!isValidInput){
      this._showInputErorr(input);
    }
    else this.hideInpuError(input);
  }

  setActiveButtonState(){
    this._buttonSubmit.classList.remove(this._config.buttonSubmitInactiveClass);
    this._buttonSubmit.removeAttribute("disabled");
  };

  setInactiveButtonState(){
    this._buttonSubmit.classList.add(this._config.buttonSubmitInactiveClass);
    this._buttonSubmit.setAttribute("disabled", "true");
  };

  toggleButtonState (inputList){
    if (!this._hasInvalidInput(inputList)){
     this.setActiveButtonState();
    }
    else {
     this.setInactiveButtonState();
    }
  }

  _showInputErorr (input){
    const errorMessage = this._formForValid.querySelector(`#${input.id}-error`);
    input.classList.add(this._config.inputErrorClass);
    errorMessage.textContent = input.validationMessage;
  }

  hideInpuError (input){
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
export {FormValidator};
