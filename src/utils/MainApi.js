export class MainApi {
    constructor(url) {
        this._url = url;
    }

    checkResponse(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    register({ name, email, password }) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            }),
        })
            .then(this.checkResponse)
            .then((data) => {
                return data;
            });
    }

    authorization({ email, password }) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
            .then(this.checkResponse)
            .then((data) => {
                if (data._id) {
                    localStorage.setItem('token', data._id);
                    return data;
                }
            });
    }

    getUserInfoProfile() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
        })
            .then(this.checkResponse)
            .then((result) => {
                return result;
            });
    }

    updateEditProfile(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            }),
        })
            .then(this.checkResponse)
            .then((data) => {
                return data;
            });
    }

    getCheckToken(token) {
        return fetch(`${this._url}/users/me`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(this.checkResponse)
            .then((result) => {
                return result;
            });
    }

    getSavedFilms() {
        return fetch(`${this._url}/movies`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
        })
            .then(this.checkResponse);
    }

    saveFilm(data) {
        console.log(data)
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `https://api.nomoreparties.co${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co${data.image.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN
            }),
        })
            .then(this.checkResponse)
            .then((data) => {
                return data;
            });
    }

    deleteFilm(_id) {
        return fetch(`${this._url}/movies/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
        })
            .then(this.checkResponse)
            .then((data) => {
                return data;
            });
    }



}
const mainApi = new MainApi(
    'https://api.movie-explorer.govard.nomoredomains.rocks'
);

export default mainApi;
