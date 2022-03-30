function enableValidation(config) {
  const form = document.querySelector(config.form);
  form.addEventListener('input', (evt) => handleInputForm(evt, form, config));


}
function handleInputForm(evt, form, config){
 const input = evt.target;

showErorr(input, form, config);

setButtonStatus(form, config)

function showErorr (input, form){
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.textContent = input.validationMessage;
}
function setButtonStatus (form, config){
  const buttonSubmit = form.querySelector(config.buttonSubmit);
  if (form.checkValidity()){
   buttonSubmit.classList.remove(config.buttonSubmitInactiveClass);
   buttonSubmit.removeAttribute("disabled");
  }
  else{
    buttonSubmit.classList.add(config.buttonSubmitInactiveClass);
    buttonSubmit.setAttribute("disabled", "disabled");
  }
}
};


enableValidation({form: '.form-group[name="dateForm"]',
                  buttonSubmit: '.form-group__button-save',
                  buttonSubmitInactiveClass: 'form-group__button-save_inactive'});

enableValidation({form: '.form-group[name="date-form-add"]',
                  buttonSubmit: '.form-group__button-save',
                  buttonSubmitInactiveClass: 'form-group__button-save_inactive'});
