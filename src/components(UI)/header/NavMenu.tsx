import React from 'react';
import styles from './NavMenu.module.css'
import {NavLink} from 'react-router-dom';
import {requestStatusType} from "../../redux-store(BLL)/appReducer";


type PropsType = {
    requestStatus: requestStatusType
}

const NavigationMenu = (props: PropsType) => {
    return (<div className={styles.container}>
            <div className={styles.header}>
                <NavLink to="/counter" className={styles.rout}> Counter </NavLink>
                <NavLink to="/settings" className={styles.rout}> Settings </NavLink>
            </div>
            {
                ["IN-PROGRESS", "ERROR"].some(s => s === props.requestStatus) &&
                <div className={styles.notification}>
                    {props.requestStatus === "IN-PROGRESS" && <div>Loading...</div>}
                    {props.requestStatus === "ERROR" && <div>Error</div>}
                </div>
            }
        </div>
    );
}

export default NavigationMenu
