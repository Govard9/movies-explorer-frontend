import React, { useState } from 'react';
import header__logo from '../../images/logo/header__logo.svg';
import Navigation from '../Navigation/Navigation';

function Header(props) {
    return (
        <header className="header" aria-label="Шапка сайта">
            <a href="/" className="header__link-img">
                <img src={header__logo} alt=" Многогранный зеленый круг." className="header__logo"/>
            </a>
            <Navigation />
        </header>
    );
}

export default Header;
