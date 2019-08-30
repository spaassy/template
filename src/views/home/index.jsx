import React from 'react';
import { Button } from 'antd'
import { SpaAssyConnect } from '@commonComponents'
import { setTest } from '@store/test/test_action'

import { getTestData } from '@http/testHttp'

@SpaAssyConnect('main')((state) => ({
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