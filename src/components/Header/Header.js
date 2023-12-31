import React from 'react';
import header__logo from '../../images/logo/header__logo.svg';
import Navigation from '../Navigation/Navigation';
import {Link, useLocation} from "react-router-dom";

function Header({ loggedIn, signOut }) {
    const { pathname } = useLocation();

    return (
        <header className={`header ${pathname === '/' ? '' : 'header_black'}`} aria-label="Шапка сайта">
            {/* Обернул в блок div для того, чтобы не применялось свойство анимации к логотипу. На все ссылки идёт анимация opacity. */}
            <div className="header__block-logo-link">
                <img src={header__logo} alt=" Многогранный зеленый круг." className="header__logo"/>
                <Link to="/" className="header__link-img"/>
            </div>
            <Navigation loggedIn={loggedIn} signOut={signOut} />
        </header>
    );
}

export default Header;
