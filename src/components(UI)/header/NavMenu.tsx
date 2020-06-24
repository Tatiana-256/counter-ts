import React from 'react';
import styles from './NavMenu.module.css'
import {NavLink} from 'react-router-dom';


type PropsType = {}

const NavigationMenu = (props: PropsType) => {
    return (
        <div className={styles.header}>
            <NavLink to="/counter" className={styles.rout}> Counter </NavLink>
            <NavLink to="/settings" className={styles.rout}> Settings </NavLink>
        </div>
    );
}

export default NavigationMenu
