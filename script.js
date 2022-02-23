let popup = document.querySelector(".popup");
let reductButton = document.querySelector(".info__button-reduct");
let popupItem = popup.querySelectorAll(".popup__item");
let profileName = document.querySelector(".info__name");
let profileAbout = document.querySelector(".info__about");
let saveReduct = popup.querySelector(".popup__button-save");
let buttonCloseReduct = popup.querySelector(".popup__button-close");

function openOrCloseReduct(){
  popup.classList.toggle("popup_opened");
  return popup;
}

reductButton.addEventListener('click', function(){
  popup = openOrCloseReduct();
  popupItem[0].value = profileName.textContent;
  popupItem[1].value = profileAbout.textContent;
});

buttonCloseReduct.addEventListener('click', function(){
  popup = openOrCloseReduct();
});

saveReduct.addEventListener('click', function(evt){
  evt.preventDefault();
  profileName.textContent = popupItem[0].value;
  profileAbout.textContent = popupItem[1].value;
  popup = openOrCloseReduct();
});

