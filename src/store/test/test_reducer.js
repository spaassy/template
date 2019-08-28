import {
    createReducer
} from 'spaassy-redux'

let initial = {}

export default createReducer(initial, {
    ['SETTEST']: (state, data) => {
        return {
            ...state,
            data
        }
    }
})