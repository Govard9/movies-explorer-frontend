import React from 'react';
import logout_icon from "../../../images/icon/nav-menu__logout-icon.svg";

function PopupMenu(props) {
    return (
        <nav className="popup-main-block">
            <div className="popup-menu">
                <div className="nav-menu__burger-menu nav-menu__burger-menu_close"></div>
                <ul className="nav-menu__list nav-menu__list_popup">
                    {/* Если пользователь авторизован */}
                    <li className="nav-menu__links nav-menu__links_popup">
                        <a href="/" className="nav-menu__link nav-menu__link_popup-size">Главная</a>
                        <a href="/movies" className="nav-menu__link nav-menu__link_popup-size">Фильмы</a>
                        <a href="/saved-movies" className="nav-menu__link nav-menu__link_popup-size">Сохраненные фильмы</a>
                    </li>
                    <li className="nav-menu__links nav-menu__links_gap nav-menu__links_popup-block-account">
                        <a href="/profile" className="nav-menu__link nav-menu__link_profile">Аккаунт</a>
                        <div className="nav-menu__background-block">
                            <img src={logout_icon} alt=" Иконка выхода из профиля." className="nav-menu__logout-icon"/>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default PopupMenu;
