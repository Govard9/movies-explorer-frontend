import React from 'react';
import header__logo from "../../images/logo/header__logo.svg";

function Register(props) {
    return (
        <section className="register">
            <div className="register__head">
                {/* Обернул в блок div для того, чтобы не применялось свойство анимации к логотипу. На все ссылки идёт анимация opacity. */}
                <div className="header__block-logo-link">
                    <img src={header__logo} alt=" Многогранный зеленый круг." className="header__logo header__link-img_margin"/>
                    <a href="/" className="header__link-img header__link-img_margin"/>
                </div>
                <h3 className="register__title">Добро пожаловать!</h3>
            </div>
            <form className="register__form">
                <label className="register__label">Имя</label>
                {/* value потом везде уберу, поставил для проверки стилей. */}
                <input
                    type="text"
                    value="Виталий"
                    className="register__input"
                    minLength="5"
                    maxLength="35"/>

                <label className="register__label">E-mail</label>
                <input
                    type="email"
                    value="pochta@yandex.ru"
                    className="register__input"
                    minLength="5"
                    maxLength="254"
                    required/>

                <label className="register__label">Пароль</label>
                <input
                    type="password"
                    className="register__input register__input_pass-red"
                    minLength="8"
                    maxLength="50"
                    required/>

                <span className="register__span-validation">Что-то пошло не так...</span>
                <button className="register__button">Зарегистрироваться</button>
            </form>
            <div className="register__login-block">
                <span className="register__text">Уже зарегистрированы?</span>
                <a href="/signin" className="register__login">Войти</a>
            </div>
        </section>
    );
}

export default Register;
