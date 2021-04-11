import { axiosAPI } from "../../utils/actionUtils";
import * as constants from "./userConstants";
import { Dispatch } from "redux";
import { AxiosResponse, AxiosError } from "axios";
import * as types from "./userTypes";

export const getUserData = () => (dispatch: Dispatch<types.ActionTypes>) => {
  axiosAPI
    .get("/api/user/")
    .then((response: AxiosResponse) => {
      dispatch({
        type: constants.GET_USER_DATA,
        user: response.data
      });
    })
    .catch((error: AxiosError) => console.log(error));
};
