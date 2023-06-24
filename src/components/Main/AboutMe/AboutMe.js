import React from 'react';

function AboutMe(props) {
    return (
        <section className="about" aria-label="Секция студент">
            <h2 className="promo__main-title">Студент</h2>
            <div className="promo__line"></div>
            <div className="about__blocks">
                <div className="about__student-info">
                    <h3 className="about__name">Владислав</h3>
                    <span className="about__info">Фронтенд-разработчик, 29 лет</span>
                    <p className="about__resume">
                        Как маркетолог я всегда интересуюсь цифровым миром и тем, как его можно использовать для
                        привлечения
                        клиентов. Однако по мере продолжения работы в сфере маркетинга, я понял, что моё настоящее
                        предназначение заключается в создании веб-приложений. Это привело меня к изучению области
                        веб-разработки, и я увлекся созданием и улучшением веб-сайтов и приложений. Я хочу стать
                        фронтенд-разработчиком в аутсорсинговой компании, специализирующейся на проектах электронной
                        коммерции. У меня есть опыт создания интернет-магазинов на платформах CMS.
                    </p>
                    <a href="https://github.com/Govard9" className="about__github">Github</a>
                </div>
                <div className="about__photo"></div>
            </div>
        </section>
    );
}

export default AboutMe;
