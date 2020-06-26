import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './App.css';
import {AppStateType} from "./redux-store(BLL)/store";
import NavigationMenu from './components(UI)/header/NavMenu';
import Counter from "./components(UI)/counter/Counter";
import CounterSettings from "./components(UI)/counterSettings/CounterSettings";
import {Redirect, Route, Switch} from 'react-router-dom';
import {setCounterSettings} from "./redux-store(BLL)/settingsReducer";
import {requestStatusType} from './redux-store(BLL)/appReducer';


type PropsType = {}

const App = (props: PropsType) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCounterSettings())
    }, [])

    const requestStatus = useSelector<AppStateType, requestStatusType>(state => state.requestStatus.requestStatus)

    return (
        <div className="App">
            <NavigationMenu requestStatus={requestStatus}/>
            <Switch>
                <Route path="/counter" component={Counter}/>
                <Route path="/settings" component={CounterSettings}/>
                <Redirect exact path="/" to={"/counter"}/>
                <Route path="*" render={() => <div>404 Not found</div>}/>
            </Switch>
        </div>
    );
}

export default App;
