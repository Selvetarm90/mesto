export default class Api {
	constructor(options){
		this._options = options;
	}
	getInitialCards(){
		return fetch('https://mesto.nomoreparties.co/v1/cohort-41/cards',{
			method: 'GET',
			headers: this._options.headers
		}
		)
		.then(res =>{
			if (res.ok){
		return	res.json();
			}	
			return Promise.reject(`Ошибка: ${res.status}`);
		})
			.catch((err) => console.log(err));
	
	}
}