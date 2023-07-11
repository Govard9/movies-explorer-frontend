import React from 'react';
import logout_icon from '../../images/icon/nav-menu__logout-icon.svg';
import PopupMenu from "./PopupMenu/PopupMenu";
import {Link} from "react-router-dom";

function Navigation({loggedIn, signOut}) {
    return (
        <>
            {/* Когда нажимаем на бургер то добавляется эта компонента, а старый nav скрывается, если разрешение меньше 768px */}
            {/*<PopupMenu/>*/}
            {!loggedIn ? <nav className="nav-menu">
                <div className="nav-menu__burger">
                    <div className="nav-menu__burger-menu"></div>
                </div>
                <ul className="nav-menu__list nav-menu__list_active-burger">
                    <li className="nav-menu__links">
                        <Link to="/signup" className="nav-menu__link">Регистрация</Link>
                        <Link to="/signin" className="nav-menu__link nav-menu__link_color-black">Войти</Link>
                    </li>
                </ul>
            </nav>
                :
            <nav className="nav-menu">
                <div className="nav-menu__burger">
                    <div className="nav-menu__burger-menu"></div>
                </div>
                <ul className="nav-menu__list nav-menu__list_active-burger">
                    <li className="nav-menu__links nav-menu__links_gap">
                        <Link to="/movies"
                              className="nav-menu__link nav-menu__link_size nav-menu__link_active">Фильмы</Link>
                        <Link to="/saved-movies" className="nav-menu__link nav-menu__link_size">Сохраненные
                            фильмы</Link>
                    </li>
                    <li className="nav-menu__links nav-menu__links_gap">
                        <Link to="/profile" className="nav-menu__link nav-menu__link_profile">Аккаунт</Link>
                        <div className="nav-menu__background-block">
                            <img src={logout_icon} title="Выйти из аккаунта" alt=" Иконка выхода из профиля." className="nav-menu__logout-icon" onClick={signOut} />
                        </div>
                    </li>
                </ul>
            </nav>}

        </>
    );
}

export default Navigation;
