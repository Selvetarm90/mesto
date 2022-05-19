
export default class Api {
	constructor(options){
		this._baseUrl = options.baseUrl;
    this._headers = options.headers
	}

  _errorHandler (res){
    if (res.ok){
      return	res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
  }
	getInitialCards(){
	return	fetch(this._baseUrl + '/cards',{
			method: 'GET',
			headers: this._headers
		})
		.then(res => this._errorHandler(res))
	}

  getUserInfo(){
    return fetch(this._baseUrl + '/users/me',{
      method: 'GET',
      headers: this._headers
    }).then(res => this._errorHandler(res))
  }

  getAllData(){
	  return Promise.all([this.getInitialCards(), this.getUserInfo()])
  }

  changeUserInfo(data){
    return fetch(this._baseUrl + '/users/me',{
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(res => this._errorHandler(res));
  }

  addCard(data){
    return fetch(this._baseUrl + '/cards',{
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(res => this._errorHandler(res));
  }

  delCard(id){
    return fetch(this._baseUrl + '/cards/' + id, {
      method: 'DELETE',
			headers: this._headers
    })
  }
}
