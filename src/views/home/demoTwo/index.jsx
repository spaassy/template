import React from 'react'
import { SpaAssyConnect } from 'spaassy-redux'

import { Button } from 'antd'

import { setTest } from '@store/test/test_action'

@SpaAssyConnect("mainSub")(state => ({ store: state }), { setTest: setTest })
class DemoTwo extends React.Component {
    render() {
        return (
            <div>
                <Button onClick={() => { this.props.setTest("aaa") }}>改变子store里的值</Button>
                <span>{this.props.store.testReducer.str}</span>
            </div>
        )
    }
}

export default DemoTwo