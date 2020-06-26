import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppStateType} from '../../redux-store(BLL)/store';
import {incrementCounterValue, setCounterValue} from '../../redux-store(BLL)/counterReducer';
import styles from "./Counter.module.css";


type PropsType = {}

const Counter = (props: PropsType) => {
    const value = useSelector<AppStateType, number>(state => state.count.value)
    const startValue = useSelector<AppStateType, number>(state => state.settings.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.settings.maxValue)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCounterValue())
    }, [])

    const increment = () => {
        dispatch(incrementCounterValue(value + 1))
    }

    const resetStartValue = () => {
        dispatch(incrementCounterValue(startValue))
    }

    const maxValueAchieved = value >= maxValue

    return (
        <div className={styles.setting}>
            <div className={styles.counter}>Counter</div>
            <div>{value}</div>
            <div className={styles.buttons}>
                <button onClick={increment} disabled={maxValueAchieved}>Increment</button>
                <button onClick={resetStartValue}>Reset</button>
            </div>
            {maxValueAchieved && <div>Counter can`t be more than max value</div>}
        </div>

    );
}

export default Counter
