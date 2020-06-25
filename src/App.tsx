import React from 'react';
import {connect} from "react-redux";

import './App.css';
import {AppStateType} from "./redux-store(BLL)/store";
import NavigationMenu from './components(UI)/header/NavMenu';
import Counter from "./components(UI)/counter/Counter";
import CounterSettings from "./components(UI)/counterSettings/CounterSettings";
import {Route, Switch, Redirect} from 'react-router-dom';


type PropsType = {}

const App = (props: PropsType) => {
    return (
        <div className="App">
            <NavigationMenu/>
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
