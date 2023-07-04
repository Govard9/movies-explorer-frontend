import React, {useState} from 'react';
import mainApi from "../../../utils/MainApi";

function MoviesCard({ movies, errorMovies, isFirstRender, indexPlusSeven, savedMode, handleClickDeleteFilm }) {
    const [activeSave, setActiveSave] = useState(Array(movies.length).fill(true));
    const [deleteFilmId, setDeleteFilmId] = useState('');

    const handleClickSaveFilm = (index) => {
        setActiveSave(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });

        if (activeSave[index]) {
            mainApi.saveFilm(movies[index])
                .then((response) => {
                    console.log(response);
                    setDeleteFilmId(response._id)
                }).catch((error) => {
                // Обработка ошибки запроса
                console.error(error);
            });
        } else {
            mainApi.deleteFilm(deleteFilmId)
                .then((response) => {
                    console.log(response);
                }).catch((error) => {
                // Обработка ошибки запроса
                console.error(error);
            });
        }
    }

    return (
        <>
            {errorMovies && (
                <p className="card__info-text card__info-text_color-error">
                    { errorMovies }
                </p>
            )}

            {movies.length === 0 && (
                <p className={`card__info-text card__info-text_color-error ${errorMovies && "card__title_inactive"}`}>
                    { isFirstRender }
                </p>
            )}

            {movies.length > 0 && (
                movies.map((movie, index) => (
                    index <= indexPlusSeven &&
                    <article className="card" key={movie.id}>
                        <div className="card__block">
                            <div className="card__block-text">
                                <h5 className="card__title">
                                    <a href={movie.trailerLink} target="_blank" className="card__link">{movie.nameRU}</a>
                                </h5>
                                <time className="card__time">
                                    {`${Math.round(movie.duration / 60)}ч ${movie.duration % 60}м`}
                                </time>
                            </div>
                            { savedMode ?
                                <button
                                    className="card__delete-film"
                                    aria-label="удалить фильм из сохранённых"
                                    type="button"
                                    onClick={() => handleClickDeleteFilm(index)}
                                ></button>
                                :
                                <button
                                    className={`card__saved-film ${ !activeSave[index] && "card__saved-film_active" }`}
                                    aria-label="сохранить фильм"
                                    type="button"
                                    onClick={() => handleClickSaveFilm(index)}
                                ></button>
                            }
                        </div>
                        <a href={movie.trailerLink} target="_blank" className="card__image-link">
                            { savedMode ?
                                <img src={movie.image} alt={movie.nameRU} className="card__image"/>
                                :
                                <img src={`https://api.nomoreparties.co${movie.image.url}`} alt={movie.nameRU} className="card__image"/>
                            }
                        </a>
                    </article>
                ))
            )}
        </>
    );
}

export default MoviesCard;
