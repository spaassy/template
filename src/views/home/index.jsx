import React from 'react';
import { Button } from 'antd'
import { SpaAssyConnect } from 'spaassy-redux'
import { setTest } from '@store/test/test_action'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import routers from './routers'

import './index.less'

const namespace = process.env.SYSTEMNAME

@SpaAssyConnect(namespace)(state => ({ store: state }), { setTest: setTest })
class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="homeContent">
                <div className="spaassy"></div>
                <span className="welcome">{this.props.store.testReducer.str}</span>
                <br />

                <Link to='/demoTwo' className="link">DemoTwo</Link>
                <span style={{ margin: '0 30px' }}></span>
                <Link to='/' className="link">DemoOne</Link>
                <span style={{ marginBottom: '50px', display: 'block' }}></span>
                {renderRoutes(routers)}
            </div>
        )
    }
}

export default Home;