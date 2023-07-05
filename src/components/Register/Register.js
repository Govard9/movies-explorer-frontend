import React, {useState} from 'react';
import header__logo from "../../images/logo/header__logo.svg";
import { Link } from "react-router-dom";

function Register(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isNameTouched, setIsNameTouched] = useState(false);
    const [isEmailTouched, setIsEmailTouched] = useState(false);
    const [isPasswordTouched, setIsPasswordTouched] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
        setIsNameTouched(true);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setIsEmailTouched(true);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setIsPasswordTouched(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    const isButtonDisabled = name.trim() === '' || email.trim() === '' || password.trim() === '';

    return (
        <section className="register">
            <div className="register__head">
                {/* Обернул в блок div для того, чтобы не применялось свойство анимации к логотипу. На все ссылки идёт анимация opacity. */}
                <div className="header header_black">
                    <div className="header__block-logo-link">
                        <img src={header__logo} alt=" Многогранный зеленый круг." className="header__logo header__logo_margin"/>
                        <Link to="/" className="header__link-img header__link-img_margin"/>
                    </div>
                </div>
                <h3 className="register__title">Добро пожаловать!</h3>
            </div>
            <form className="register__form" noValidate onSubmit={handleSubmit}>
                <label className="register__label">Имя</label>
                {/* value потом везде уберу, поставил для проверки стилей. */}
                <input
                    type="text"
                    className="register__input"
                    minLength="5"
                    maxLength="35"
                    onChange={handleNameChange}
                />
                {isNameTouched && name.trim() === '' && <span className="register__span-validation">Поле обязательно для заполнения</span>}

                <label className="register__label">E-mail</label>
                <input
                    type="email"
                    className="register__input"
                    minLength="5"
                    maxLength="254"
                    required
                    onChange={handleEmailChange}
                />
                {isEmailTouched && email.trim() === '' && <span className="register__span-validation">Поле обязательно для заполнения</span>}

                <label className="register__label">Пароль</label>
                <input
                    type="password"
                    className="register__input register__input_pass-red"
                    minLength="8"
                    maxLength="50"
                    required
                    onChange={handlePasswordChange}
                />
                {isPasswordTouched && password.trim() === '' && <span className="register__span-validation">Поле обязательно для заполнения</span>}

                <button className={`register__button ${isButtonDisabled && "register__button_disabled"}`} disabled={isButtonDisabled}>Зарегистрироваться</button>
            </form>
            <div className="register__login-block">
                <span className="register__text">Уже зарегистрированы?</span>
                <Link to="/signin" className="register__login">Войти</Link>
            </div>
        </section>
    );
}

export default Register;
