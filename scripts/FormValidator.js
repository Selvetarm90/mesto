function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.form));
  formList.forEach(function(elementform){
    setEventListener(elementform, config);
  }); 
}

function handleInputForm(evt, form, config, inputList){
  const input = evt.target;
  toggleButtonState(form, config, inputList);
  checkInputValidity(input, form, config);
};

function setEventListener(elementform, config){
    const inputList = Array.from(elementform.querySelectorAll(config.inputClass));
    elementform.addEventListener('input', (evt) => handleInputForm(evt, elementform, config, inputList));
    elementform.addEventListener('submit', function(evt){
      evt.preventDefault();
    });
  }

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
   setActiveButtonState(buttonSubmit);
  }
  else {
   setInactiveButtonState(buttonSubmit);
  }
}

enableValidation(options);
