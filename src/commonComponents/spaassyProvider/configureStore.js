import {
    createStore,
    applyMiddleware
} from 'redux'

import {
    promiseMiddleware
}
from 'spaassy-redux'
import rootReducer from './combinReducers'

export default function configureStore(initialState){
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            promiseMiddleware
        )
    )
    return store
}