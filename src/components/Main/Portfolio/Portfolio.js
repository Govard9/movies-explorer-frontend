import React from 'react';
import portfolio__icon from '../../../images/icon/portfolio__icon.svg';

function Portfolio(props) {
    return (
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <ul className="portfolio__blocks">
                <li className="portfolio__block">
                    <div className="portfolio__block-info">
                        <a href="#" className="portfolio__link">Статичный сайт
                            <img src={portfolio__icon} alt=" Иконка перехода на сайт." className="portfolio__icon"/>
                        </a>
                    </div>
                    <div className="promo__line promo__line_new-color"></div>
                </li>
                <li className="portfolio__block">
                    <div className="portfolio__block-info">
                        <a href="#" className="portfolio__link">Адаптивный сайт
                            <img src={portfolio__icon} alt=" Иконка перехода на сайт." className="portfolio__icon"/>
                        </a>
                    </div>
                    <div className="promo__line promo__line_new-color"></div>
                </li>
                <li className="portfolio__block">
                    <div className="portfolio__block-info">
                        <a href="#" className="portfolio__link">Одностраничное приложение
                            <img src={portfolio__icon} alt=" Иконка перехода на сайт." className="portfolio__icon"/>
                        </a>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
