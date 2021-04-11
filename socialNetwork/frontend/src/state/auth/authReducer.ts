import initialState from "./authState";
import * as constants from "./authConstants";
import * as types from "./authTypes";

const authReducer = (state = initialState, action: types.ActionTypes): types.InitialState => {
  switch (action.type) {
    case constants.LOGIN_STATUS:
      return {
        ...state,
        isAuth: action.status
      };
    default:
      return state;
  }
};

export default authReducer;
