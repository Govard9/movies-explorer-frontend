import React, {useState} from 'react';
import header__logo from "../../images/logo/header__logo.svg";
import {Link} from "react-router-dom";
import validator from "validator";

function Login({ onAuthorization, errorTextAuth }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isEmailTouched, setIsEmailTouched] = useState(false);
    const [isPasswordTouched, setIsPasswordTouched] = useState(false);

    const [isEmailValid, setIsEmailValid] = useState(true);

    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        setEmail(emailValue);
        setIsEmailTouched(true);
        setIsEmailValid(validator.isEmail(emailValue));
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setIsPasswordTouched(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onAuthorization({
            email: email,
            password: password
        })
    };

    const isButtonDisabled =
        email.trim() === '' ||
        password.trim() === '' ||
        !isEmailValid ||
        email.length < 10 || email.length > 50 ||
        password.length < 8 || password.length > 50

    return (
        <section className="register">
            <div className="register__head">
                <div className="header header_black">
                    <div className="header__block-logo-link">
                        <img src={header__logo} alt=" Многогранный зеленый круг." className="header__logo header__logo_margin"/>
                        <Link to="/" className="header__link-img header__link-img_margin"/>
                    </div>
                </div>
                <h3 className="register__title">Рады видеть!</h3>
            </div>
            <form className="register__form" onSubmit={handleSubmit}>
                <label className="register__label">E-mail</label>
                <input
                    type="email"
                    className="register__input"
                    required
                    onChange={handleEmailChange}
                />
                {
                    isEmailTouched && email.trim() === ''
                        ?
                        <span className="register__span-validation">Поле обязательно для заполнения</span>
                        :
                        !isEmailValid && isEmailTouched
                            ?
                            <span className="register__span-validation">Некорректный адрес электронной почты</span>
                            :
                            isEmailTouched && email.length < 10 ?
                                <span className="register__span-validation">Поле должно содержать от 10 до 50 символов</span>
                                :
                                email.length > 50 &&
                                <span className="register__span-validation">Поле должно содержать от 10 до 50 символов</span>
                }

                <label className="register__label">Пароль</label>
                <input
                    type="password"
                    className={`register__input register__input_pass-red ${!isButtonDisabled && "register__input_pass-white"}`}
                    required
                    onChange={handlePasswordChange}
                />
                {
                    isPasswordTouched && password.trim() === ''
                        ?
                        <span className="register__span-validation">Поле обязательно для заполнения</span>
                        :
                        isPasswordTouched && password.length < 8
                            ?
                            <span className="register__span-validation">Поле должно содержать от 8 до 50 символов</span>
                            :
                            password.length > 50
                            &&
                            <span className="register__span-validation">Поле должно содержать от 8 до 50 символов</span>
                }
                <span className="register__span-validation register__span-validation_button">{errorTextAuth}</span>
                <button className={`register__button ${isButtonDisabled && "register__button_disabled"}`} disabled={isButtonDisabled}>Войти</button>
            </form>
            <div className="register__login-block">
                <span className="register__text">Ещё не зарегистрированы?</span>
                <Link to="/signup" className="register__login">Регистрация</Link>
            </div>
        </section>
    );
}

export default Login;
