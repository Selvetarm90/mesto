function enableValidation(config) {
  const form = document.querySelector(config.form);
  const errorMessage = form.querySelector(config.inputErrorClass);
  form.addEventListener('input', (evt) => handleInputForm(evt, form, config));
  //console.log(form);


}
function handleInputForm(evt, form, config){
 const input = evt.target;

setError(input)

showErorr(input, form, config);

setButtonStatus(form, config)

function setError (input){
  const validity = input.validity;
 // console.log(validity);
}

function showErorr (input, form, config){
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.textContent = input.validationMessage;
}
function setButtonStatus (form, config){
  const buttonSubmit = form.querySelector(config.buttonSubmit);
  if (form.checkValidity()){
   buttonSubmit.classList.remove(config.buttonSubmitInactiveClass);
   //buttonSubmit.classList.add(config.buttonSubmitClass);
   buttonSubmit.removeAttribute("disabled");
  }
  else{
    buttonSubmit.classList.add(config.buttonSubmitInactiveClass);
    //buttonSubmit.classList.remove(config.buttonSubmitClass);
    buttonSubmit.setAttribute("disabled", "disabled");
  }
}
};


enableValidation({form: '.form-group[name="dateForm"]',
                  buttonSubmit: '.form-group__button-save',
                  buttonSubmitClass: 'form-group__button-save',
                  buttonSubmitInactiveClass: 'form-group__button-save_inactive'});

enableValidation({form: '.form-group[name="date-form-add"]',
                  buttonSubmit: '.form-group__button-save',
                  buttonSubmitClass: 'form-group__button-save',
                  buttonSubmitInactiveClass: 'form-group__button-save_inactive'});
