import React from 'react';

function Footer(props) {
    return (
        <footer className="footer" aria-label="Футер сайта">
            <div className="footer__text-line-block">
                <p className="footer__copy-text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="promo">
                    <div className="promo__line promo__line_new-color promo__line_new-color-footer"></div>
                </div>
            </div>
            <div className="footer__blocks-info">
                <p className="footer__copy-data">&copy; 2023</p>
                <ul className="footer__block-menu">
                    <li className="footer__links">
                        <a href="https://practicum.yandex.ru/" target="_blank" className="footer__link">Яндекс.Практикум</a>
                        <a href="https://github.com/Govard9" target="_blank" className="footer__link">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
