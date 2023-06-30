export class MoviesApi {
    constructor(url) {
        this._url = url;
    }

    checkResponse(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getResultSearch() {
        return fetch(`${this._url}`, {
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(this.checkResponse);
    }

    searchResult(data) {
        return fetch(`${this._url}`, {
            method: 'PATCH',
            headers: {
                // authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about,
            }),
        })
            .then(this.checkResponse)
            .then((data) => {
                return data;
            });
    }

}
const api = new MoviesApi(
    'https://api.nomoreparties.co/beatfilm-movies'
);

export default api;
