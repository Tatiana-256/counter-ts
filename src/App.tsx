import React from 'react';
import {connect} from "react-redux";

import './App.css';
import {AppStateType} from "./redux-store(BLL)/store";
import {actions} from './redux-store(Bll)/reduser';
import NavigationMenu from './components(UI)/header/NavMenu';
import Counter from "./components(UI)/counter/Counter";
import CounterSettings from "./components(UI)/counterSettings/CounterSettings";
import {Route} from 'react-router-dom';


type PropsType = {
    value: number,
    incrementValue: () => void
}

const App = (props: PropsType) => {
    return (
        <div className="App">
            <NavigationMenu/>
            <Route exact path="/counter" component={Counter}/>
            <Route exact path="/settings" component={CounterSettings}/>
        </div>
    );
}

const mapStateToProps = (state: AppStateType) => {
    return {
        value: state.count.value
    }
}

export default connect(mapStateToProps, {incrementValue: actions.incrementValue})(App);
