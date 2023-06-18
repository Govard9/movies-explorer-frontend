import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    return (
        <section className="cards" aria-label="Фильмы">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <div className="cards__block-more">
                <button className="cards__button">Ещё</button>
            </div>
        </section>
    );
}

export default MoviesCardList;
