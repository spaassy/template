import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { combinReducers } from 'spaassy-redux'
import SpaAsyRegister from '../spaassyRegister'

import rootReducers from '@store'

class SpaAssyProvider extends React.Component {

    constructor(props) {
        super(props)
        this.store = configureStore(this.props.namespace, { ...rootReducers })
        if (this.props.mainProject) {
            const spaassyRegister = new SpaAsyRegister()
            spaassyRegister.createUpdataStore((namespace, reducers) => {
                this.store.replaceReducer(combinReducers(namespace, reducers))
            })
            spaassyRegister.addReducerAndNoRegister(this.props.namespace, { ...rootReducers })
        }
    }

    render() {
        return (
            <Provider store={this.store}>
                {this.props.children}
            </Provider>
        )
    }
}

export default SpaAssyProvider