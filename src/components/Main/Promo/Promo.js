import React from 'react';

function Promo(props) {
    return (
        <section className="promo">
            <h2 className="promo__main-title">О проекте</h2>
            <div className="promo__line"></div>
            <ul className="promo__text-block">
                <li className="promo__left-block">
                    <h3 className="promo__title">Дипломный проект включал 5 этапов</h3>
                    <p className="promo__description">
                        Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.
                    </p>
                </li>
                <li className="promo__right-block">
                    <h3 className="promo__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="promo__description">
                        У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </li>
            </ul>
            <div className="promo__block-two-bands">
                <div className="promo__block-band-left">
                    <div className="promo__block-band-green">
                        <p className="promo__one-week">1 неделя</p>
                    </div>
                    <p className="promo__text-backend">Back-end</p>
                </div>
                <div className="promo__block-band-right">
                    <div className="promo__block-band-grey">
                        <p className="promo__four-weeks">4 недели</p>
                    </div>
                    <p className="promo__text-frontend">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default Promo;
