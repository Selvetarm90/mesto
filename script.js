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
  popupItem[0].textContent = profileName.textContent;
  popupItem[1].textContent = profileAbout.textContent;
  console.log(popupItem[0].textContent);
  console.log(profileName.textContent);
});

buttonCloseReduct.addEventListener('click', function(){
  popup = openOrCloseReduct();
  console.log(popupItem[0].textContent);
  console.log(profileName.textContent);
});



saveReduct.addEventListener('click', function(evt){
  evt.preventDefault();
  profileName.textContent = popupItem[0].textContent;
  profileAbout.textContent = popupItem[1].textContent;
  popup = openOrCloseReduct();
  console.log(popupItem[0].textContent);
  console.log(profileName.textContent);
});

