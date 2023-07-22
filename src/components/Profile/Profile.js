import React, {useState} from 'react';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import validator from "validator";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function Profile({handleUpdateUser, errorTextProfile, popupTooltipOpen, setPopupTooltipOpen, setErrorTextProfile, signOut}) {

    const currentUser = React.useContext(CurrentUserContext);

    const [onInput, setOnInput] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [isNameTouched, setIsNameTouched] = useState(false);
    const [isEmailTouched, setIsEmailTouched] = useState(false);

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

    const handleUpdateProfile = (event) => {
        event.preventDefault();

        if (currentUser.name !== name || currentUser.email !== email) {
            handleUpdateUser({
                name: name,
                email: email
            });
        }
        setIsNameTouched(false);
        setIsEmailTouched(false);
    };

    const isButtonDisabled =
        (!isNameValid || !isEmailValid) ||
        (
            (isNameTouched || isEmailTouched) &&
            (name.trim() === '' || name.length < 5 || name.length > 35 || email.trim() === '' || email.length < 10 || email.length > 50)
        ) ||
        (currentUser.name === name && currentUser.email === email);

    const handleClickInputProfile = () => {
        setOnInput(true);
        setName(currentUser.name);
        setEmail(currentUser.email);
        setErrorTextProfile('');
    }

    return (
        <section className="profile" aria-label="Профиль">
            <h3 className="profile__title">{`Привет, ${currentUser.name}!`}</h3>
            {!onInput ?
                <ul className="profile__block-info">
                    <li className="profile__name">
                        <span className="profile__text">Имя</span>
                        <span className="profile__text profile__text_name">{currentUser.name}</span>
                    </li>
                    <li className="profile__line">
                        <div className="promo">
                            <div className="promo__line promo__line_profile"></div>
                        </div>
                    </li>
                    <li className="profile__text-info">
                        <span className="profile__text">E-mail</span>
                        <span className="profile__text profile__text_email">{currentUser.email}</span>
                    </li>
                    <div className="profile__block-edit-out">
                        <button className="profile__link-edit-profile" onClick={handleClickInputProfile}>Редактировать
                        </button>
                        <button className="profile__link-logout" onClick={signOut}>Выйти из аккаунта</button>
                    </div>
                </ul>
                :
                <form className="profile__form" onSubmit={handleUpdateProfile} noValidate>
                    <ul className="profile__block-info">
                        <li className="profile__name">
                            <span className="profile__text">Имя</span>
                            <div className="profile__block-input-name">
                                <input
                                    type="text"
                                    className="register__input register__input_profile"
                                    required
                                    onChange={handleNameChange}
                                    value={name}
                                />
                                {isNameTouched && name.trim() === ''
                                    ?
                                    <span className="register__span-validation register__span-validation_profile-name">Поле обязательно для заполнения</span>
                                    :
                                    !isNameValid && isNameTouched ? <span
                                            className="register__span-validation register__span-validation_profile-name">Поле должно содержать только латиницу, кириллицу, пробел или дефис.</span>
                                        :
                                        isNameTouched && name.length < 5 ? <span
                                                className="register__span-validation register__span-validation_profile-name">Поле должно содержать от 5 до 35 символов</span>
                                            :
                                            isNameTouched && name.length > 35 ? <span
                                                    className="register__span-validation register__span-validation_profile-name">Поле должно содержать от 5 до 35 символов</span>
                                                :
                                                isNameTouched && currentUser.name === name && <span
                                                    className="register__span-validation register__span-validation_profile-name">Вы ввели одинаковое имя.</span>
                                }
                            </div>
                        </li>
                        <li className="profile__line">
                            <div className="promo">
                                <div className="promo__line promo__line_profile"></div>
                            </div>
                        </li>
                        <li className="profile__text-info">
                            <span className="profile__text">E-mail</span>
                            <div className="profile__block-input-email">
                                <input
                                    type="email"
                                    className="register__input register__input_profile"
                                    required
                                    onChange={handleEmailChange}
                                    value={email}
                                />
                                {
                                    isEmailTouched && email.trim() === ''
                                        ?
                                        <span
                                            className="register__span-validation register__span-validation_profile-email">Поле обязательно для заполнения</span>
                                        :
                                        !isEmailValid && isEmailTouched
                                            ?
                                            <span
                                                className="register__span-validation register__span-validation_profile-email">Некорректный адрес электронной почты</span>
                                            :
                                            isEmailTouched && email.length < 10 ?
                                                <span
                                                    className="register__span-validation register__span-validation_profile-email">Поле должно содержать от 10 до 50 символов</span>
                                                :
                                                email.length > 50 ?
                                                    <span
                                                        className="register__span-validation register__span-validation_profile-email">Поле должно содержать от 10 до 50 символов</span>
                                                    :
                                                    isEmailTouched && currentUser.email === email && <span
                                                        className="register__span-validation register__span-validation_profile-email">Вы ввели одиновый email.</span>
                                }
                            </div>
                        </li>
                    </ul>
                    <div className="profile__block-edit-out">
                        <span className={'register__span-validation register__span-validation_button register__span-validation_margin-none'}>{errorTextProfile}</span>
                        <button
                            className={`register__button ${isButtonDisabled && "register__button_disabled"}`}
                            disabled={isButtonDisabled}
                        >Сохранить
                        </button>
                        <button className="profile__link-logout" onClick={signOut}>Выйти из аккаунта</button>
                    </div>
                </form>
            }
            <InfoTooltip popupTooltipOpen={popupTooltipOpen} setOnInput={setOnInput} setPopupTooltipOpen={setPopupTooltipOpen} />
        </section>
    );
}

export default Profile;
