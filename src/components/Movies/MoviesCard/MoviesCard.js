import React, {useState} from 'react';

function MoviesCard({ movies, errorMovies, isFirstRender, indexPlusSeven }) {
    const [activeSave, setActiveSave] = useState(Array(movies.length).fill(false));

    const handleClickSaveFilm = (index) => {
        setActiveSave(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
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
                            <button
                                className={`card__saved-film ${ activeSave[index] && "card__saved-film_active" }`}
                                aria-label="сохранить фильм"
                                type="button"
                                onClick={() => handleClickSaveFilm(index)}
                            ></button>
                            {/* Тут пропишу в будущем логику, чтобы отображались разные кнопки на разных страницах */}
                            {/*<button className="card__delete-film" aria-label="удалить фильм из сохранённых" type="button"></button>*/}
                        </div>
                        <a href={movie.trailerLink} target="_blank" className="card__image-link">
                            <img src={`https://api.nomoreparties.co${movie.image.url}`} alt={`${movie.nameRU}.`} className="card__image"/>
                        </a>
                    </article>
                ))
            )}
        </>
    );
}

export default MoviesCard;
