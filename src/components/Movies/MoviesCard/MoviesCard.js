import React, { useState, useEffect } from 'react';
import mainApi from "../../../utils/MainApi";
import savedMovies from "../../SavedMovies/SavedMovies";

function MoviesCard({
                        movies,
                        errorMovies,
                        isFirstRender,
                        indexPlusSeven,
                        savedMode,
                        handleClickDeleteFilm,
                        setIsFirstRender,
                        handleSave,
                        allMovies
}) {
    const [activeSave, setActiveSave] = useState([]);

    useEffect(() => {
        const savedFilms = JSON.parse(localStorage.getItem('savedFilmsDelete')) || [];

        const initialActiveSave = movies.map((movie) =>
            savedFilms.some((savedFilm) => savedFilm.id === movie.id)
        );
        setActiveSave(initialActiveSave);
    }, [movies]);

    const onSaveClick = (movies) => {
        handleSave(movies)
    }

    const onClickDeleteFilm = (movieId) => {
        handleClickDeleteFilm(movieId)
    }

    const handleClickSaveFilm = (movie) => {
        onSaveClick(movie)
    };

    function handleClick(movie) {
        if (savedMode) {
            allMovies.filter((mov) => {
                return mov.id === movie.movieId;
            });
            onClickDeleteFilm(movie._id);
        } else {
            handleClickSaveFilm(movie);
        }
    }

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
                                    onClick={() => handleClick(movie)}
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
                                        onClick={() => handleClick(movie)}
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
