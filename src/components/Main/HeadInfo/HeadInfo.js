import React from 'react';
import image_planet from '../../../images/header-info__image-planet.svg';

function HeadInfo(props) {
    return (
        <section className="header-info" aria-label="Информация о проекте">
            <div className="header-info__left-side">
                <h1 className="header-info__main-text">
                    Учебный&nbsp;проект студента факультета&nbsp;
                    <span className="header-info__solo-text">Веб-разработки.</span>
                </h1>
                <p className="header-info__description">Листайте ниже, чтобы узнать больше про этот проект и его
                    создателя.</p>
                <a href="#anchor-about" className="header-info__button">Узнать больше</a>
            </div>
            <div className="header-info__right-side">
                <img src={image_planet} alt=" Нарисованная планета словами WEB." className="header-info__image-planet"/>
            </div>
        </section>
    );
}

export default HeadInfo;
