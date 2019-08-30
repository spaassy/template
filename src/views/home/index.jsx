import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { BrowserRouter, HashRouter, Router, Switch, Route, Redirect } from 'react-router-dom';
import { Button } from 'antd'
import { connect } from 'react-redux'
import { SpaAssyConnect } from '@commonComponents'
import { setTest } from '@store/test/test_action'

import { getTestData } from '@http/testHttp'

import Header from './header'

@SpaAssyConnect('aaa')((state) => ({
    www: state
}), {
        setTest: setTest
    })
class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // getTestData()


    }

    handleClick = () => {
        this.props.setTest('world')
        console.log(this.props.www)
    }

    render() {
        return (
            <div className="homeContent">
                <br/>
                <Button onClick={this.handleClick}>改变store里的值</Button>
                <br/>
                {this.props.www.testReducer.str}
            </div>
        )
    }
}

export default Home;