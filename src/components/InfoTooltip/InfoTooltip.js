import React, {useState} from 'react';
import crossCircleSuccess from "../../images/icon/icon-cross-in-a-circle-popup-success.svg";

function InfoTooltip({ popupTooltipOpen, setOnInput, setPopupTooltipOpen }) {

    const handleClosePopup = () => {
        setOnInput(false);
        setPopupTooltipOpen(false);
    }

    if (popupTooltipOpen) {
        return (
            <div className={`popup popup_tooltip ${popupTooltipOpen && 'popup_opened'}`}>
                <div className="popup__main-container popup__main-container_flex-center">
                    <button
                        className="popup__close-button"
                        type="button"
                        aria-label="закрыть всплывающее окно"
                        onClick={handleClosePopup}
                    ></button>
                    <img
                        src={crossCircleSuccess}
                        alt={" Галочка в зеленом круге"}
                        className="popup__cross-in-circle"
                    />
                    <h2 className="popup__text popup__text_cross-circle"> Ваши данные успешно обновлены. </h2>
                </div>
            </div>
        );
    }
}

export default InfoTooltip;
