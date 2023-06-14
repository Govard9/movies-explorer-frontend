import React from 'react';

function Footer(props) {
    return (
        <footer className="footer" aria-label="Футер сайта">
            <p className="footer__copy-text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="promo__line promo__line_new-color"></div>
            <div className="footer__blocks-info">
                <p className="footer__copy-data">&copy; 2023</p>
                <ul className="footer__block-menu">
                    <li className="footer__links">
                        <a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
                        <a href="https://github.com/Govard9" className="footer__link">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
