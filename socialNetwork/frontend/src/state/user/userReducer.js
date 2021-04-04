import * as types from './userTypes'

const initialState = {
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_DATA:
            return {
                ...state,
                user: action.userData
            }
        default:
            return state
    }
}

export default userReducer
