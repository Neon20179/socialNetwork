import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "@/typing";

const initialState: AuthState = {
  isAuth: (localStorage.getItem("access_token") ? true : false) as boolean,
  isLoading: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isAuth = true;
      state.isLoading = false;
    },
    loginFailed: (state) => {
      (state.isAuth = false), (state.isLoading = false);
    },

    signUp: (state, { payload }) => {
      state.isLoading = true;
    },
    signUpSuccess: (state) => {
      (state.isAuth = true), (state.isLoading = false);
    },
    signUpFailed: (state) => {
      (state.isAuth = false), (state.isLoading = false);
    },

    logout: (state) => {
      state.isLoading = true;
    },
    logoutSuccess: (state) => {
      state.isAuth = false;
      state.isLoading = false;
    },
    logoutFailed: (state) => {
      state.isLoading = false;
    }
  }
});

export default authSlice.reducer;
export const {
  login,
  loginSuccess,
  loginFailed,
  signUp,
  signUpSuccess,
  signUpFailed,
  logout,
  logoutSuccess,
  logoutFailed
} = authSlice.actions;
