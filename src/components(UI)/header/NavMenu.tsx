import React from 'react';
import {NavLink} from 'react-router-dom';


type PropsType = {}

const NavigationMenu = (props: PropsType) => {
    return (
        <div>
            <NavLink to="/counter"> Counter </NavLink>
            <NavLink to="/settings"> Settings </NavLink>
        </div>
    );
}

export default NavigationMenu
