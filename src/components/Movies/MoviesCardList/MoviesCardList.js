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
            {/* Пропишу логику, если отображается карт меньше 5 штук, то кнопка будет пропадать, инче появляться. Для всех страниц. */}
            <div className="cards__block-more">
                <button className="cards__button">Ещё</button>
            </div>
        </section>
    );
}

export default MoviesCardList;
