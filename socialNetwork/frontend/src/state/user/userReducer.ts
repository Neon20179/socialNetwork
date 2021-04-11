import initialState from "./userState";
import * as constants from "./userConstants";
import * as types from "./userTypes";

const userReducer = (state = initialState, action: types.ActionTypes): types.InitialState => {
  switch (action.type) {
    case constants.GET_USER_DATA:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default userReducer;
