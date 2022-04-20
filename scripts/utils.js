function togglePopup(modal){

  if (!modal.classList.contains("popup_opened")){

  };
}
function checkAndClose (evt){
  if (evt.target.classList.contains("popup_opened")){
    closePopup(evt.currentTarget);
    evt.currentTarget.removeEventListener('click', checkAndClose);
  };
}

function closeWithEsc (evt){
  if (evt.key === "Escape"){
    const item = document.querySelector(".popup_opened");
    closePopup(item);
  }
}
function openPopup(modal){
  modal.classList.add("popup_opened");
  modal.addEventListener('click', checkAndClose);
  document.addEventListener('keydown', closeWithEsc);
}

function closePopup(modal){
  modal.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeWithEsc);

}

export {openPopup, closePopup};
