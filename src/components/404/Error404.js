import React from 'react';
import {Link} from "react-router-dom";

function Error404(props) {
    return (
        <section className="error">
            <div className="error__block-info">
                <h3 className="error__title">404</h3>
                <span className="error__span">Страница не найдена</span>
                <Link to="/" className="error__link">Назад</Link>
            </div>
        </section>
    );
}

export default Error404;
