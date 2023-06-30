import React, {useRef, useState} from 'react';
import search_image from '../../../images/icon/search-form__search-image.svg';
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm({ onUpdateMovies }) {

    const [resultSearch, setResultSearch] = useState('')
    const [error, setError] = useState('');

    function handleSearchValue(e) {
        setResultSearch(e.target.value);
        setError('');
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Проверка валидности поля ввода
        if (resultSearch.length === 0) {
            setError('Нужно ввести ключевое слово');
            return;
        }
        setError('');

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateMovies({
            film: resultSearch,
        });
    }

    return (
        <section className="search-form" aria-label="Поиск фильмов">
            <div className="search-form__input-wrapper">
                <form
                    className="search-form__form"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <input
                        type="text"
                        name="film"
                        minLength="5"
                        maxLength="75"
                        required
                        placeholder="Фильм"
                        className="search-form__input"
                        onChange={handleSearchValue}
                    />
                    {error && <p className="search-form__validate">{error}</p>}
                    <button className="search-form__button" type="submit">
                        <img src={search_image} alt=" Иконка лупы для поиска фильмов." className="search-form__search-image"/>
                    </button>
                </form>
            </div>
            <FilterCheckbox />
            <div className="search-form__line">
                <div className="promo">
                    <div className="promo__line promo__line_color-for-search promo__line_padding-bottom"></div>
                </div>
            </div>
        </section>
    );
}

export default SearchForm;
