import React from 'react';

function Techs(props) {
    return (
        <section className="tech" aria-label="Сеция технологии">
            <h2 className="promo__main-title">Технологии</h2>
            <div className="promo__line promo__line_black"></div>
            <h3 className="tech__title">7 технологий</h3>
            <p className="tech__description">
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
            <ul className="tech__list-tech">
                <li className="tech__tech-block">
                    <span className="tech__name-tech">HTML</span>
                </li>
                <li className="tech__tech-block">
                    <span className="tech__name-tech">CSS</span>
                </li>
                <li className="tech__tech-block">
                    <span className="tech__name-tech">JS</span>
                </li>
                <li className="tech__tech-block">
                    <span className="tech__name-tech">React</span>
                </li>
                <li className="tech__tech-block">
                    <span className="tech__name-tech">Git</span>
                </li>
                <li className="tech__tech-block">
                    <span className="tech__name-tech">Express.js</span>
                </li>
                <li className="tech__tech-block">
                    <span className="tech__name-tech">mongoDB</span>
                </li>
            </ul>
        </section>
    );
}

export default Techs;
