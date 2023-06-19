import React from 'react';
import header__logo from "../../images/logo/header__logo.svg";

function Login(props) {
    return (
        <section className="register">
            <div className="register__head">
                <img src={header__logo} alt=" Многогранный зеленый круг." className="header__logo header__logo_left"/>
                <h3 className="register__title">Рады видеть!</h3>
            </div>
            <form className="register__form">
                <label className="register__label">E-mail</label>
                <input type="email" value="pochta@yandex.ru" className="register__input"/>
                <label className="register__label">Пароль</label>
                <input type="password" className="register__input register__input_pass-red"/>
                <span className="register__span-validation"></span>
                <button className="register__button register__button_margin">Войти</button>
            </form>
            <div className="register__login-block">
                <span className="register__text">Ещё не зарегистрированы?</span>
                <a href="/signup" className="register__login">Регистрация</a>
            </div>
        </section>
    );
}

export default Login;
