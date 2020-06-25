import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppStateType} from '../../redux-store(BLL)/store';
import {incrementCounterValue, setCounterValue} from '../../redux-store(BLL)/counterReducer';
import styles from "../counterSettings/CounterSettings.module.css";


type PropsType = {}

const Counter = (props: PropsType) => {
    const value = useSelector<AppStateType, number>(state => state.count.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCounterValue())
    }, [])

    const increment = () => {
        dispatch(incrementCounterValue(value + 1))
    }

    return (
        <div className={styles.setting}>
            <div>Counter</div>
            <div>{value}</div>
            <button onClick={increment}>Increment</button>
        </div>

    );
}

export default Counter
