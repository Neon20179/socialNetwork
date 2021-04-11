import { Dispatch } from "redux";
import { AxiosResponse, AxiosError } from "axios";
import { axiosAPI, setNewHeaders } from "../../utils/actionUtils";
import * as constants from "./authConstants";
import * as types from "./authTypes";

export const login = (data: types.LoginDataType) => (dispatch: Dispatch<types.ActionTypes>) => {
  axiosAPI
    .post("/api/auth/token/obtain/", data)
    .then((response: AxiosResponse) => {
      setNewHeaders(response);

      dispatch({
        type: constants.LOGIN_STATUS,
        status: true
      });
    })
    .catch(() => {
      dispatch({
        type: constants.LOGIN_STATUS,
        status: false
      });
    });
};

export const logout = () => (dispatch: Dispatch<types.ActionTypes>) => {
  axiosAPI
    .post("/api/auth/token/blacklist/", { refresh_token: localStorage.getItem("refresh_token") })
    .then(() =>
      dispatch({
        type: constants.LOGIN_STATUS,
        status: false
      })
    );
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  axiosAPI.defaults.headers["Authentication"] = null;
};

export const signUp = (data: types.SingUpDataType) => (dispatch: (data: {}) => void) => {
  axiosAPI
    .post("/api/auth/sign_up/", data)
    .then(() => {
      delete data.email;
      dispatch(login(data));
    })
    .catch((error: AxiosError) => console.log(error));
};
