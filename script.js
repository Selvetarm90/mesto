let popup = document.querySelector(".popup");
let reductButton = document.querySelector(".info__button-reduct");
let formName = document.querySelector(".form-group__item_el_name");
let formJob = document.querySelector(".form-group__item_el_job");
let profileName = document.querySelector(".info__name");
let profileAbout = document.querySelector(".info__about");
let savedForm = document.querySelector(".form-group");
let buttonCloseReduct = popup.querySelector(".popup__button-close");

function openOrCloseReduct(){
  popup.classList.toggle("popup_opened");
}

function openReduct(){
  openOrCloseReduct();
  formName.value = profileName.textContent;
  formJob.value = profileAbout.textContent;
}

reductButton.addEventListener('click', openReduct);

buttonCloseReduct.addEventListener('click', openOrCloseReduct);

savedForm.addEventListener('submit', function(evt){
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileAbout.textContent = formJob.value;
  openOrCloseReduct();
});

