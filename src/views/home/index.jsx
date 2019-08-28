import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { BrowserRouter, HashRouter, Router, Switch, Route, Redirect } from 'react-router-dom';
import { Button } from 'antd'

import { getTestData } from '@http/testHttp'

import Header from './header'


class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // getTestData()
    }

    render() {
        return (
            <div className="homeContent">
                <Button>改变store里的值</Button>
            </div>
        )
    }
}

export default Home;