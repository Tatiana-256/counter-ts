import React, {useEffect} from 'react';
import styles from './CounterSettings.module.css'
import {AppStateType} from "../../redux-store(BLL)/store";
import {useSelector, useDispatch} from 'react-redux';
import {
    incrementCounterMaxValue,
    setCounterSettings,
    incrementCounterStartValue
} from "../../redux-store(BLL)/settingsReducer";

type PropsType = {}

const CounterSettings = (props: PropsType) => {
    const maxValue = useSelector<AppStateType, number>(state => state.settings.maxValue)
    const startValue = useSelector<AppStateType, number>(state => state.settings.startValue)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCounterSettings())
    }, [])

    const incrementMaxValue = () => {
        dispatch(incrementCounterMaxValue(maxValue + 1))
    }
    const incrementStartValue = () => {
        dispatch(incrementCounterStartValue(startValue + 1))
    }


    return (<div className={styles.container}>
            <div className={styles.setting}>
                <div>Start value</div>
                <div>
                    <div>{startValue}</div>
                    <button onClick={incrementStartValue}>Increment</button>
                </div>
            </div>
            <div className={styles.setting}>
                <div>Max value</div>
                <div>
                    <div>{maxValue}</div>
                    <button onClick={incrementMaxValue}>
                        Increment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CounterSettings
