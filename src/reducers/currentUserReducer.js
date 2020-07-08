import {
    LOGIN_USERS
} from '../actions/types'

const initialState = null

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USERS:
            return action.payload
        default:
            return state;
    }
}