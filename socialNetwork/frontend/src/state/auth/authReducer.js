import * as types from './authTypes'

const initialState = {
    isAuth: localStorage.getItem("access_token") ? true : false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_STATUS:
            return {
                ...state,
                isAuth: action.status,
            }
        default:
            return state
    }
}

export default authReducer
