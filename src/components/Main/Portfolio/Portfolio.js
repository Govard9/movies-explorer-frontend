import React from 'react';
import portfolio__icon from '../../../images/icon/portfolio__icon.svg';

function Portfolio(props) {
    return (
        <section className="portfolio" aria-label="Секция портфолио">
            <h4 className="portfolio__title">Портфолио</h4>
            <ul className="portfolio__blocks">
                <li className="portfolio__block">
                    <div className="portfolio__block-info">
                        <a href="https://govard9.github.io/russian-travel/" className="portfolio__link" target="_blank">
                            <span className="portfolio__text">Статичный сайт</span>
                            <img src={portfolio__icon} alt=" Иконка перехода на сайт." className="portfolio__icon"/>
                        </a>
                    </div>
                    <div className="promo__line promo__line_new-color"></div>
                </li>
                <li className="portfolio__block">
                    <div className="portfolio__block-info">
                        <a href="https://govard9.github.io/russian-travel/" className="portfolio__link" target="_blank">
                            <span className="portfolio__text">Адаптивный сайт</span>
                            <img src={portfolio__icon} alt=" Иконка перехода на сайт." className="portfolio__icon"/>
                        </a>
                    </div>
                    <div className="promo__line promo__line_new-color"></div>
                </li>
                <li className="portfolio__block">
                    <div className="portfolio__block-info">
                        <a href="https://govard9.github.io/mesto-react/" className="portfolio__link" target="_blank">
                            <span className="portfolio__text">Одностраничное приложение</span>
                            <img src={portfolio__icon} alt=" Иконка перехода на сайт." className="portfolio__icon"/>
                        </a>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
