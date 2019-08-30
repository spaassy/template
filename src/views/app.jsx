import React from 'react';
import { BrowserRouter, HashRouter, Router, Switch, Route } from 'react-router-dom';
import Async from '@commonComponents/asyncComponent'

let AsyncComponent = Async('main')

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route key="login" exact path="/login" component={AsyncComponent(() => import('@views/login'))} />
                <Route key="register" exact path="/register" component={AsyncComponent(() => import('@views/register'))} />
                <Route key="home" path="/" component={AsyncComponent(() => import('@views/home'))} />
            </ Switch>
        </ HashRouter>
    )
}

export default App;