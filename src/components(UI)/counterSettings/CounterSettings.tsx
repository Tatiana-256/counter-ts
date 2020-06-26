import React, {ChangeEvent} from 'react';
import styles from './CounterSettings.module.css'
import {AppStateType} from "../../redux-store(BLL)/store";
import {useDispatch, useSelector} from 'react-redux';
import {incrementCounterMaxValue, incrementCounterStartValue} from "../../redux-store(BLL)/settingsReducer";

type PropsType = {}

const CounterSettings = (props: PropsType) => {
    const maxValue = useSelector<AppStateType, number>(state => state.settings.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.settings.startValue)

    const dispatch = useDispatch()

    const incrementMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(incrementCounterMaxValue(Number(e.currentTarget.value)))
    }
    const incrementStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(incrementCounterStartValue(Number(e.currentTarget.value)))
    }

    const validation = maxValue < startValue
    return (<div className={styles.container}>
            <div className={styles.setting}>
                <div>Start value</div>
                <div>
                    <input value={startValue} onChange={incrementStartValue} type={"number"}/>
                </div>
            </div>
            <div className={styles.setting}>
                <div>Max value</div>
                <div>
                    <input value={maxValue} onChange={incrementMaxValue} type={"number"} disabled={validation}/>
                </div>
            </div>

            {validation && <div className={styles.notification}>Max value mast be over than start value</div>}
        </div>
    );
}

export default CounterSettings
