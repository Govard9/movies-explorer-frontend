import React, {useState} from 'react';
import header__logo from "../../images/logo/header__logo.svg";
import { Link } from "react-router-dom";
import validator from 'validator';

function Register({ onRegister, errorTextReg }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isNameTouched, setIsNameTouched] = useState(false);
    const [isEmailTouched, setIsEmailTouched] = useState(false);
    const [isPasswordTouched, setIsPasswordTouched] = useState(false);

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);

    const handleNameChange = (event) => {
        const nameValue = event.target.value;
        setName(nameValue);
        setIsNameTouched(true);

        const isValidName = /^[\wа-яА-ЯёЁ\s-]+$/.test(nameValue);
        setIsNameValid(isValidName);
    };

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

        onRegister({
            name: name,
            email: email,
            password: password
        })
    };

    const isButtonDisabled =
        name.trim() === '' ||
        email.trim() === '' ||
        password.trim() === '' ||
        !isEmailValid || !isNameValid ||
        name.length < 5 || name.length > 35 ||
        email.length < 10 || email.length > 50 ||
        password.length < 8 || password.length > 50

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
                    onChange={handleNameChange}
                />
                {isNameTouched && name.trim() === ''
                    ?
                    <span className="register__span-validation">Поле обязательно для заполнения</span>
                    :
                    !isNameValid && isNameTouched ? <span className="register__span-validation">Поле должно содержать только латиницу, кириллицу, пробел или дефис.</span>
                    :
                    isNameTouched && name.length < 5 ? <span className="register__span-validation">Поле должно содержать от 5 до 35 символов</span>
                    :
                    isNameTouched && name.length > 35 && <span className="register__span-validation">Поле должно содержать от 5 до 35 символов</span>
                }

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

                <span className="register__span-validation register__span-validation_button">{errorTextReg}</span>
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
