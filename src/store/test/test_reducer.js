import {
    createReducer
} from 'spaassy-redux'

let initial = {
    str: 'hello'
}

export default createReducer(initial, {
    ['SETTEST']: (state, data) => {
        console.log(state, data)
        return Object.assign({}, state, {
            str: data
        })
    }
})