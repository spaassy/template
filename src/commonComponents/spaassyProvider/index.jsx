import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { combinReducers } from 'spaassy-redux'
import SpaasyRegister from '../SpaassyRegister'

class SpaAssyProvider extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }

        this.store = configureStore()
        if (this.props.mainProject) {
            const spaassyRegister = new SpaasyRegister()
            spaassyRegister.createUpdataStore((reducers) => {
                this.store.replaceReducer(combinReducers(reducers))
            })
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