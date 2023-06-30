import React from 'react';

function Error404(props) {
    return (
        <section className="error">
            <div className="error__block-info">
                <h3 className="error__title">404</h3>
                <span className="error__span">Страница не найдена</span>
                <a href="/" className="error__link">Назад</a>
            </div>
        </section>
    );
}

export default Error404;
