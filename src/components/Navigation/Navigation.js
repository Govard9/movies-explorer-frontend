import React from 'react';

function Navigation(props) {
    return (
        <nav className="nav-menu" aria-label="Меню">
            <ul className="nav-menu__list">
                <li className="nav-menu__links">
                    <a href="#" className="nav-menu__link">Регистрация</a>
                    <button className="nav-menu__button">Войти</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
