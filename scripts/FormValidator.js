class FormValidator {
  constructor(config, formForValid){
    this._config = config;
    this._formForValid = formForValid;
    this._buttonSubmit = formForValid.querySelector(config.buttonSubmit);
    this._inputList = Array.from(formForValid.querySelectorAll(config.inputClass));
  }

  enableValidation() {
    this._setEventListener();
  }

  _setEventListener(){
    this._formForValid.addEventListener('input', (evt) => this._handleInputForm(evt));
    this._formForValid.addEventListener('submit', function(evt){
      evt.preventDefault();
    });
  }

  _handleInputForm(evt){
    const input = evt.target;
    this.toggleButtonState();
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

  toggleButtonState (){
    if (!this._hasInvalidInput()){
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

  _hasInvalidInput = () => {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  };
  validBeforeOpenForm (){
    this._inputList.forEach((input) =>{
      this._checkInputValidity(input);
    });
    this.toggleButtonState();
  }
}

export {FormValidator};
