import React from 'react';
import search_image from '../../../images/icon/search-form__search-image.svg';
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
    return (
        <section className="search-form" aria-label="Поиск фильмов">
            <div className="search-form__input-wrapper">
                <form className="search-form__form">
                    <input type="text" placeholder="Фильм" className="search-form__input"/>
                    <button className="search-form__button" type="submit">
                        <img src={search_image} alt=" Иконка лупы для поиска фильмов." className="search-form__search-image"/>
                    </button>
                </form>
            </div>
            <FilterCheckbox />
            <div className="search-form__line">
                <div className="promo__line promo__line_new-color promo__line_padding-bottom"></div>
            </div>
        </section>
    );
}

export default SearchForm;
