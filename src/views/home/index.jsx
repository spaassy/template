import React from 'react';
import { Button } from 'antd'
import { SpaAssyConnect } from 'spaassy-redux'
import { setTest } from '@store/test/test_action'
import { renderRoutes } from 'react-router-config'
import routers from './routers'
import { getTestData } from '@http/testHttp'
import {
    SpaAssyRegister
} from 'spaassy-redux'

import './index.less'

const spaassyRegister = new SpaAssyRegister()
const namespace = process.env.SYSTEMNAME

@SpaAssyConnect(namespace)(state => ({ store: state }), { setTest: setTest })
class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // getTestData()
    }

    handleClick = () => {
        this.props.setTest('world')
    }

    render() {
        const subRouters = spaassyRegister.getRouters()
        const subRouterList = []
        Object.keys(subRouters).map(o => {
            subRouterList.push(...subRouters[o])
        })

        return (
            <div className="homeContent">
                <span>{this.props.store.testReducer.str}</span>
                <Button onClick={this.handleClick}>改变store里的值</Button>
                {renderRoutes(subRouterList.concat(routers))}
            </div>
        )
    }
}

export default Home;