import {
    combineReducers
} from 'spaassy-redux'

export default (namespace, rootReducers) => (combineReducers({
    [namespace]: {
        ...rootReducers
    }
}))