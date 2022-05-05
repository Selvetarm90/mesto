export default class UserInfo{
	constructor(profileInfoSelectors){
		this._nameProfile = document.querySelector(profileInfoSelectors.profileName);
		this._aboutProfile = document.querySelector(profileInfoSelectors.profileAbout);
    //this._nameInputForm = '.form-group__item_el_name';
   // this._aboutInputForm = document.querySelector('.form-group__item_el_job')

	}

	getUserInfo(){

	}

	setUserInfo(data){
    this._nameProfile.textContent = data.firstname;
    this._aboutProfile.textContent = data.job;
		console.log(data.firstname);
    console.log(data.job);
   // console.log(data.this._about.value);
	}

}
