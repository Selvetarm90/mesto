export default class UserInfo{
	constructor(profileInfoSelectors){
		this._nameProfile = document.querySelector(profileInfoSelectors.profileName);
		this._aboutProfile = document.querySelector(profileInfoSelectors.profileAbout);
	}

	getUserInfo(){
    return {
      firstname: this._nameProfile.textContent,
      job: this._aboutProfile.textContent
    }
	}

	setUserInfo(data){
    this._nameProfile.textContent = data.firstname;
    this._aboutProfile.textContent = data.job;
	}

}
