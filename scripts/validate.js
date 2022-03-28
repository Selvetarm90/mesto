function enableValidation(config) {
  const form = document.querySelector(config.form);
  form.addEventListener('input', (evt) => handleInputForm(evt, form));
  console.log(form);


}
function handleInputForm(evt, form){
 const input = evt.target;

setError(input)

showErorr(input, form);

function setError (input){
  const validity = input.validity;
 // console.log(validity);
}

function showErorr (input, form){
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.textContent = input.validationMessage;
}

};

enableValidation({form: '.form-group[name="dateForm"]'});

enableValidation({form: '.form-group[name="date-form-add"]'});