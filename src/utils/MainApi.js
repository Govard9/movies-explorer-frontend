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

    getSavedFilms() {
        return fetch(`${this._url}/movies`, {
            headers: {
                authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDg1YzlmN2JkMjkzOGM3MjBkMzczYzkiLCJpYXQiOjE2ODg0NDg4MTIsImV4cCI6MTY4OTA1MzYxMn0.X-rXH33hHj-oVdQT8pcPFlbE4nR7xe5axf-8HQKh2rE`,
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
                authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDg1YzlmN2JkMjkzOGM3MjBkMzczYzkiLCJpYXQiOjE2ODg0NDg4MTIsImV4cCI6MTY4OTA1MzYxMn0.X-rXH33hHj-oVdQT8pcPFlbE4nR7xe5axf-8HQKh2rE`,
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
                authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDg1YzlmN2JkMjkzOGM3MjBkMzczYzkiLCJpYXQiOjE2ODg0NDg4MTIsImV4cCI6MTY4OTA1MzYxMn0.X-rXH33hHj-oVdQT8pcPFlbE4nR7xe5axf-8HQKh2rE`,
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
