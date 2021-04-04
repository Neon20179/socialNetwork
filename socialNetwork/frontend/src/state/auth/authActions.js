import { axiosAPI, setNewHeaders } from '../../utils/actionUtils'
import * as types from './authTypes'

export const login = data => dispatch => {
    axiosAPI.post("/api/auth/token/obtain/", data)
        .then(response => {
            setNewHeaders(response)

            dispatch({
                type: types.LOGIN_STATUS,
                status: true,
            })
        })
        .catch(() => {
            dispatch({
                type: types.LOGIN_STATUS,
                status: false,
            })
        })
}

export const logout = () => dispatch => {
    axiosAPI.post('/api/auth/token/blacklist/', { "refresh_token": localStorage.getItem("refresh_token") })
        .then(
            dispatch({
                type: types.LOGIN_STATUS,
                status: false,
            })
        )
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    axiosAPI.defaults.headers["Authentication"] = null
}

export const signUp = data => dispatch => {
    axiosAPI.post('/api/auth/sign_up/', data)
        .then(() => {
            delete data.email
            dispatch(
                login(data)
            )
        })
        .catch(error => console.log(error))
}
