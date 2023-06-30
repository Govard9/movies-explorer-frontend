import React from 'react';
import Header from "../Header/Header";

function Profile(props) {
    return (
        <section className="profile" aria-label="Профиль">
            <Header />
            <h3 className="profile__title">Привет, Виталий!</h3>
            <ul className="profile__block-info">
                <li className="profile__name">
                    <span className="profile__text">Имя</span>
                    <span className="profile__text">Виталий</span>
                    {/* Если пользователь нажал на кнопку "Редактировать" то появляется инпут для ввода нового имени */}
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    className="register__input register__input_profile"*/}
                    {/*    minLength="5"*/}
                    {/*    maxLength="35"*/}
                    {/*    required*/}
                    {/*/>*/}
                </li>
                <li className="profile__line">
                    <div className="promo">
                        <div className="promo__line promo__line_profile"></div>
                    </div>

                </li>
                <li className="profile__text-info">
                    <span className="profile__text">E-mail</span>
                    <span className="profile__text">pochta@yandex.ru</span>
                    {/* Если пользователь нажал на кнопку "Редактировать" то появляется инпут для ввода нового email */}
                    {/*<input*/}
                    {/*    type="email"*/}
                    {/*    className="register__input register__input_profile"*/}
                    {/*    minLength="5"*/}
                    {/*    maxLength="254"*/}
                    {/*    required*/}
                    {/*/>*/}
                </li>
            </ul>
            <div className="profile__block-edit-out">
                <button className="profile__link-edit-profile">Редактировать</button>
                <button className="profile__link-logout">Выйти из аккаунта</button>
                {/* Если пользователь нажал на кнопку "Редактировать" то появляется кнопка "Сохранить" */}
                {/* Если произошла ошибка, то делаем кнопку disabled и добавляем модификатор register__button_disabled */}
                {/*<span className="profile__error-info">При обновлении профиля произошла ошибка.</span>*/}
                {/*<button className="register__button register__button_margin-none register__button_disabled" disabled>Сохранить</button>*/}
            </div>
        </section>
    );
}

export default Profile;
