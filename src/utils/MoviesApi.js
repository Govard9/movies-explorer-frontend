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
const api = new MoviesApi(
    'https://api.nomoreparties.co/beatfilm-movies'
);

export default api;
