import React from 'react';
import logout_icon from "../../../images/icon/nav-menu__logout-icon.svg";
import { Link } from "react-router-dom";

function PopupMenu({ loggedIn, signOut, setBurgerMenuActive }) {
    const onClickCloseBurger = () => {
        setBurgerMenuActive(false);
    };

    return (
        <nav className="popup-main-block">
            <div className="popup-menu">
                <div className="nav-menu__burger-menu nav-menu__burger-menu_close" onClick={onClickCloseBurger}></div>
                {loggedIn ? (
                    <ul className="nav-menu__list nav-menu__list_popup">
                        <li className="nav-menu__links nav-menu__links_popup">
                            <Link to="/" className="nav-menu__link nav-menu__link_popup-size">Главная</Link>
                            <Link to="/movies" className="nav-menu__link nav-menu__link_popup-size">Фильмы</Link>
                            <Link to="/saved-movies" className="nav-menu__link nav-menu__link_popup-size">Сохраненные фильмы</Link>
                        </li>
                        <li className="nav-menu__links nav-menu__links_gap nav-menu__links_popup-block-account">
                            <Link to="/profile" className="nav-menu__link nav-menu__link_profile">Аккаунт</Link>
                            <div className="nav-menu__background-block" onClick={signOut}>
                                <img src={logout_icon} alt="Иконка выхода из профиля." className="nav-menu__logout-icon" />
                            </div>
                        </li>
                    </ul>
                ) : (
                    <ul className="nav-menu__list nav-menu__list_popup">
                        <li className="nav-menu__links nav-menu__links_popup">
                            <Link to="/signup" className="nav-menu__link nav-menu__link_popup-size">Регистрация</Link>
                            <Link to="/signin" className="nav-menu__link nav-menu__link_popup-size">Войти</Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default PopupMenu;
