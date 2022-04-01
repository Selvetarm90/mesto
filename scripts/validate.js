function enableValidation(config) {
  const form = Array.from(document.querySelectorAll(config.form));

  setEventListener(form, config);
}

function setEventListener(form, config){
  form.forEach(function(element){
    const inputList = Array.from(element.querySelectorAll(config.inputClass));
    element.addEventListener('input', (evt) => handleInputForm(evt, element, config, inputList));
    element.addEventListener('submit', function(evt){
      evt.preventDefault();
    });
  });
  }

function handleInputForm(evt, form, config, inputList){
  const input = evt.target;
  toggleButtonState(form, config, inputList);
  checkInputValidity(input, form, config);
};

function checkInputValidity (input, form, config){
  const isValidInput = input.validity.valid;
  if (!isValidInput){
    showInputErorr(input, form, config);
  }
  else hideInpuError(input, form, config);
}

function showInputErorr (input, form, config){
  const errorMessage = form.querySelector(`#${input.id}-error`);
  input.classList.add(config.inputErrorClass);
  errorMessage.textContent = input.validationMessage;
}

function hideInpuError (input, form, config){
  const errorMessage = form.querySelector(`#${input.id}-error`);
  input.classList.remove(config.inputErrorClass);
  errorMessage.textContent = "";
}

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

function toggleButtonState (form, config, inputList){
  const buttonSubmit = form.querySelector(config.buttonSubmit);
  if (!hasInvalidInput(inputList)){
   buttonSubmit.classList.remove(config.buttonSubmitInactiveClass);
   buttonSubmit.removeAttribute("disabled");
  }
  else {
    buttonSubmit.classList.add(config.buttonSubmitInactiveClass);
    buttonSubmit.setAttribute("disabled", "disabled");
  }
}

enableValidation({form: '.form-group',
                  buttonSubmit: '.form-group__button-save',
                  inputClass: '.form-group__item',
                  inputErrorClass: 'form-group__item_error',
                  buttonSubmitInactiveClass: 'form-group__button-save_inactive'});
