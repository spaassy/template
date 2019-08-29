import {
    combineReducers
} from 'spaassy-redux'
import rootReducers from '@store'

let namespace = 'aaa'

export default combineReducers({
    [namespace]: {
        ...rootReducers
    }
})