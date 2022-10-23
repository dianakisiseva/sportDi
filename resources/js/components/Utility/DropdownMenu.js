import React, { useState } from 'react';

export default function DropdownMenu(props) {

    const [menuState, setMenuState] = useState(false);
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    function setMenuOnHover(hoverState) {
        setMenuState(hoverState);
        setIsMenuClicked(hoverState ? false : true);
    }

    function setMenuOnClick() {
        setMenuState(isMenuClicked ? false : true);
        setIsMenuClicked(!isMenuClicked);
    }

    return <div
        className={`dropdown-menu ${!!menuState ? 'menu-open' : ''}`}
        onMouseEnter={() => setMenuOnHover(true)}
        onMouseLeave={() => setMenuOnHover(false)}
        onClick={() => setMenuOnClick()}
    >
        <div className="dropdown-menu-label">
            <span>{props.value?.label}</span>
        </div>
        <ul className={`dropdown-menu-list ${!!menuState ? 'menu-open' : ''}`}>
            {props.options.map((option) => {
                let isSelected = (option.value === props.value.value);

                return <li key={option.value}>
                    <a className={isSelected ? 'active' : null}
                        onClick={() => {
                            props.onChange(option.value)
                            setMenuOnHover(false)
                        }}
                    >
                        {option.label}
                    </a>
                </li>
            })}
        </ul>
    </div>
}