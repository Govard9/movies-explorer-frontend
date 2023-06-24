import React from 'react';
import logout_icon from '../../images/icon/nav-menu__logout-icon.svg';

function Navigation(props) {
    return (
        <nav className="nav-menu">
            {/*<div className="nav-menu__burger">*/}
            {/*    <div className="nav-menu__burger-menu"></div>*/}
            {/*</div>*/}
            <ul className="nav-menu__list">
                {/*<li className="nav-menu__links nav-menu__links_gap">*/}
                {/*    <a href="/movies" className="nav-menu__link nav-menu__link_size">Фильмы</a>*/}
                {/*    <a href="/saved-movies" className="nav-menu__link nav-menu__link_size">Сохраненные фильмы</a>*/}
                {/*</li>*/}
                <li className="nav-menu__links">
                    <a href="#" className="nav-menu__link">Регистрация</a>
                    <button className="nav-menu__button">Войти</button>
                </li>
                {/*<li className="nav-menu__links nav-menu__links_gap">*/}
                {/*    <a href="/profile" className="nav-menu__link nav-menu__link_profile">Аккаунт</a>*/}
                {/*    <div className="nav-menu__background-block">*/}
                {/*        <img src={logout_icon} alt=" Иконка выхода из профиля." className="nav-menu__logout-icon"/>*/}
                {/*    </div>*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
}

export default Navigation;
