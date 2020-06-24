import React from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux-store(BLL)/store';


type PropsType = {}

const Counter = (props: PropsType) => {

    const value = useSelector<AppStateType, number>(state => state.count.value)

    return (
        <div>
            <div>Counter</div>
            <div>{value}</div>
            <button>Increment</button>
        </div>

    );
}

export default Counter
