import React, {useState, useEffect} from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, errorMovies, isFirstRender, savedMode, handleClickDeleteFilm }) {

    const [indexPlusSeven, setIndexPlusSeven] = useState(6);

    useEffect(() => {
        let timeoutId;

        const updateCardsToShow = () => {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                const screenWidth = window.innerWidth;

                if (screenWidth > 768) {
                    setIndexPlusSeven(6);
                }

                if (screenWidth <= 768) {
                    setIndexPlusSeven(4);
                }
            }, 200);

            return () => {
                clearTimeout(timeoutId);
            };
        };

        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);

        return () => {
            window.removeEventListener('resize', updateCardsToShow);
        };
    }, []);

    const handleMoreCardMovies = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth > 768) {
            setIndexPlusSeven(indexPlusSeven + 7);
        }

        if (screenWidth <= 768) {
            setIndexPlusSeven(indexPlusSeven + 5);
        }
    };

    return (
        <section className="cards" aria-label="Фильмы">
            <MoviesCard
                movies={movies}
                errorMovies={errorMovies}
                isFirstRender={isFirstRender}
                indexPlusSeven={indexPlusSeven}
                savedMode={savedMode}
                handleClickDeleteFilm={handleClickDeleteFilm}
            />
            { savedMode ? "" : movies.length > indexPlusSeven &&
                <div className={`cards__block-more ${movies.length < indexPlusSeven && "cards__block-more_inactive"}`}>
                    <button className="cards__button" onClick={handleMoreCardMovies}>Ещё</button>
                </div> }
        </section>
    );
}

export default MoviesCardList;
