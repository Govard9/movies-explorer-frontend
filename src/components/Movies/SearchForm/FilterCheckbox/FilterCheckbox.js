import React, {useState} from 'react';

function FilterCheckbox({ handleToggle }) {
    return (
        <div className="filter">
            <label className="toggle-switch">
                <input
                    type="checkbox"
                    className="toggle-switch__checkbox"
                    onClick={handleToggle}
                />
                <span className="toggle-switch__slider"></span>
            </label>
            <span className="filter__text">Короткометражки</span>
        </div>
    );
}

export default FilterCheckbox;
