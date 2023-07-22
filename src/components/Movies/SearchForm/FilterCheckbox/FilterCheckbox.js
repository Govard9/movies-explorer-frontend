import React from 'react';

function FilterCheckbox({handleToggle, toggle}) {

    return (
        <div className="filter">
            <label className="toggle-switch">
                <input
                    type="checkbox"
                    className="toggle-switch__checkbox"
                    onClick={handleToggle}
                />

                {!toggle ?
                    <span className="toggle-switch__slider-white">
                        <span className={"toggle-switch__slider_white-left"}></span>
                    </span>
                    :
                    <span className="toggle-switch__slider-green">
                        <span className={"toggle-switch__slider_white-right"}></span>
                    </span>
                }
            </label>
            <span className="filter__text">Короткометражки</span>
        </div>
    );
}

export default FilterCheckbox;
