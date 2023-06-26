import React from 'react';
import card_image from '../../../images/card__image1.jpg';

function MoviesCard(props) {
    return (
        <article className="card">
            <div className="card__block">
                <div className="card__block-text">
                    <h5 className="card__title">
                        <a href="#" className="card__link">33 слова о дизайне</a>
                    </h5>
                    <time className="card__time">1ч 42м</time>
                </div>
                <button className="card__saved card__saved_active" aria-label="поставить лайк" type="button"></button>
            </div>
            <a href="#" className="card__image-link">
                <img src={card_image} alt=" Превью фильма." className="card__image"/>
            </a>
        </article>
    );
}

export default MoviesCard;
