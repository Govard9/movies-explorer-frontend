import React, { useState } from 'react';
import header__logo from '../../images/logo/header__logo.svg';
import Navigation from '../Navigation/Navigation';

function Header(props) {
    return (
        <header className="header header_black" aria-label="Шапка сайта">
            {/* Обернул в блок div для того, чтобы не применялось свойство анимации к логотипу. На все ссылки идёт анимация opacity. */}
            <div className="header__block-logo-link">
                <img src={header__logo} alt=" Многогранный зеленый круг." className="header__logo"/>
                <a href="/" className="header__link-img"/>
            </div>
            <Navigation />
        </header>
    );
}

export default Header;
