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
                </li>
                <li className="profile__line">
                    <div className="promo__line promo__line_profile"></div>
                </li>
                <li className="profile__text">
                    <span className="profile__text">E-mail</span>
                    <span className="profile__text">pochta@yandex.ru</span>
                </li>
            </ul>
            <div className="profile__block-edit-out">
                <button className="profile__link-edit-profile">Редактировать</button>
                <button className="profile__link-logout">Выйти из аккаунта</button>
                {/* Если пользователь нажал на кнопку "Редактировать" то появляется кнопка "Сохранить" */}
                {/*<span className="profile__error-info">При обновлении профиля произошла ошибка.</span>*/}
                {/*<button className="register__button register__button_margin-none">Сохранить</button>*/}
            </div>
        </section>
    );
}

export default Profile;
