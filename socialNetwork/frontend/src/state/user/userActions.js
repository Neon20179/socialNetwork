import { axiosAPI } from '../../utils/actionUtils'
import * as types from './userTypes'

export const getUserData = () => dispatch => {
    axiosAPI.get("/api/user/")
        .then(response => {
            dispatch({
                type: types.GET_USER_DATA,
                userData: response.data
            })
        })
        .catch(error => console.log(error))
}
