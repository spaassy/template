import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AsyncComponent } from 'spaassy-redux'

let AsyncComp = AsyncComponent('main')

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route key="login" exact path="/login" component={AsyncComp(() => import('@views/login'))} />
                <Route key="register" exact path="/register" component={AsyncComp(() => import('@views/register'))} />
                <Route key="home" path="/" component={AsyncComp(() => import('@views/home'))} />
            </ Switch>
        </ HashRouter>
    )
}

export default App;