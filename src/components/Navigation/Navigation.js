import React from 'react';
import logout_icon from '../../images/icon/nav-menu__logout-icon.svg';
import PopupMenu from "./PopupMenu/PopupMenu";
import {Link} from "react-router-dom";

function Navigation(props) {
    return (
        <>
            {/* Когда нажимаем на бургер то добавляется эта компонента, а старый nav скрывается, если разрешение меньше 768px */}
            {/*<PopupMenu/>*/}
            <nav className="nav-menu">
                <div className="nav-menu__burger">
                    <div className="nav-menu__burger-menu"></div>
                </div>
                <ul className="nav-menu__list nav-menu__list_active-burger">
                    {/* Если пользователь авторизован */}
                    {/*<li className="nav-menu__links nav-menu__links_gap">*/}
                    {/*    <a href="/movies" className="nav-menu__link nav-menu__link_size nav-menu__link_active">Фильмы</a>*/}
                    {/*    <a href="/saved-movies" className="nav-menu__link nav-menu__link_size">Сохраненные фильмы</a>*/}
                    {/*</li>*/}
                    {/* Если пользователь не авторизован*/}
                    <li className="nav-menu__links">
                        <Link to="/signup" className="nav-menu__link">Регистрация</Link>
                        <Link to="/signin" className="nav-menu__link nav-menu__link_color-black">Войти</Link>
                    </li>
                     {/*Если пользователь авторизован*/}
                    {/*<li className="nav-menu__links nav-menu__links_gap">*/}
                    {/*    <a href="/profile" className="nav-menu__link nav-menu__link_profile">Аккаунт</a>*/}
                    {/*    <div className="nav-menu__background-block">*/}
                    {/*        <img src={logout_icon} alt=" Иконка выхода из профиля." className="nav-menu__logout-icon"/>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                </ul>
            </nav>
        </>
    );
}

export default Navigation;
