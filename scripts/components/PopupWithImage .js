export default class PopupWithImage extends Popup{
  constructor(popupSelector, data){
		super(popupSelector);
		this._name = data.name;
    this._link = data.link;
    }
	open(){
		super.setEventListeners();
		this._popupSelector.classList.add("popup_opened");
	}
}