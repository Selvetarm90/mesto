export default class UserInfo{
	constructor(profileInfoSelectors){
		this._nameProfile = document.querySelector(profileInfoSelectors.profileName);
		this._aboutProfile = document.querySelector(profileInfoSelectors.profileAbout);
    this._profileAvatar = document.querySelector(profileInfoSelectors.profileAvatar);
	}

	getUserInfo(){
    return {
      name: this._nameProfile.textContent,
      about: this._aboutProfile.textContent,
      avatar: this._profileAvatar
    }
	}

	setUserInfo(data){
    this._nameProfile.textContent = data.name;
    this._aboutProfile.textContent = data.about;
    this._profileAvatar.style.backgroundImage = 'url('+ data.avatar +')';
	}

}
