let popup = document.querySelector(".popup");


console.log(popup);
let reduct = document.querySelector(".info__button-reduct");
console.log(reduct);
let item = popup.querySelectorAll(".popup__item");
console.log(item);
let save = popup.querySelector(".popup__button-save");
console.log(save);
let close = popup.querySelector(".popup__button-close");
console.log(close);
function openRedact(){
  popup.setAttribute("class", "popup popup_opened");
  return popup;
}
reduct.addEventListener('hover', function openRedact(){
});

