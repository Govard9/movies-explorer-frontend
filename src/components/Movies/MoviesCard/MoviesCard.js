import React, { useState, useEffect } from 'react';
import mainApi from "../../../utils/MainApi";

function MoviesCard({ movies, errorMovies, isFirstRender, indexPlusSeven, savedMode, handleClickDeleteFilm, setIsFirstRender }) {
    const [activeSave, setActiveSave] = useState([]);

    useEffect(() => {
        const savedFilms = JSON.parse(localStorage.getItem('savedFilmsDelete')) || [];

        const initialActiveSave = movies.map((movie) =>
            savedFilms.some((savedFilm) => savedFilm.id === movie.id)
        );
        setActiveSave(initialActiveSave);
    }, [movies]);

    const handleClickSaveFilm = (index) => {
        const film = movies[index];
        const filmId = film.id;

        const updatedActiveSave = [...activeSave];
        updatedActiveSave[index] = !updatedActiveSave[index];
        setActiveSave(updatedActiveSave);

        if (!activeSave[index]) {
            mainApi.saveFilm(film)
                .then((response) => {
                    console.log(response);
                    const savedFilmId = response._id;

                    const savedFilms = JSON.parse(localStorage.getItem('savedFilmsDelete')) || [];
                    const updatedFilms = [...savedFilms, { id: filmId, deleteFilmId: savedFilmId }];
                    localStorage.setItem('savedFilmsDelete', JSON.stringify(updatedFilms));
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            const savedFilms = JSON.parse(localStorage.getItem('savedFilmsDelete')) || [];
            const filmToDelete = savedFilms.find((film) => film.id === filmId);

            if (filmToDelete) {
                mainApi.deleteFilm(filmToDelete.deleteFilmId)
                    .then((response) => {
                        console.log(response);

                        const updatedFilms = savedFilms.filter((film) => film.id !== filmId);
                        localStorage.setItem('savedFilmsDelete', JSON.stringify(updatedFilms));
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        }
    };

    return (
        <>
            {errorMovies && (
                <p className="card__info-text card__info-text_color-error">
                    {errorMovies}
                </p>
            )}

            {movies.length === 0 && (
                <p className={`card__info-text card__info-text_color-error ${errorMovies && "card__title_inactive"}`}>
                    {isFirstRender}
                </p>
            )}

            {movies.length > 0 && (
                movies.map((movie, index) => (
                    savedMode ? (
                        <article className="card" key={movie.movieId}>
                            <div className="card__block">
                                <div className="card__block-text">
                                    <h5 className="card__title">
                                        <a href={movie.trailerLink} target="_blank" className="card__link">
                                            {movie.nameRU}
                                        </a>
                                    </h5>
                                    <time className="card__time">
                                        {`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`}
                                    </time>
                                </div>
                                <button
                                    className="card__delete-film"
                                    aria-label="удалить фильм из сохранённых"
                                    type="button"
                                    onClick={() => handleClickDeleteFilm(index)}
                                ></button>
                            </div>
                            <a href={movie.trailerLink} target="_blank" className="card__image-link">
                                <img src={movie.image} alt={movie.nameRU} className="card__image" />
                            </a>
                        </article>
                    ) : (
                        index <= indexPlusSeven && (
                            <article className="card" key={movie.id}>
                                <div className="card__block">
                                    <div className="card__block-text">
                                        <h5 className="card__title">
                                            <a href={movie.trailerLink} target="_blank" className="card__link">
                                                {movie.nameRU}
                                            </a>
                                        </h5>
                                        <time className="card__time">
                                            {`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`}
                                        </time>
                                    </div>
                                    <button
                                        className={`card__saved-film ${activeSave[index] && "card__saved-film_active"}`}
                                        aria-label="сохранить фильм"
                                        type="button"
                                        onClick={() => handleClickSaveFilm(index)}
                                    ></button>
                                </div>
                                <a href={movie.trailerLink} target="_blank" className="card__image-link">
                                    <img
                                        src={`https://api.nomoreparties.co${movie.image.url}`}
                                        alt={movie.nameRU}
                                        className="card__image"
                                    />
                                </a>
                            </article>
                        )
                    )
                ))
            )}
        </>
    );
}

export default MoviesCard;
