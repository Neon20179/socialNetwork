import { createSlice } from "@reduxjs/toolkit";
import { User, UserState } from "@/typing";

const initialState: UserState = {
  data: {} as User,
  isLoading: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserData: (state) => {
      state.isLoading = true;
    },
    getUserDataSuccess: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    },
    getUserDataFailed: (state) => {
      state.isLoading = false;
    }
  }
});

export default userSlice.reducer;
export const { getUserData, getUserDataSuccess, getUserDataFailed } =
  userSlice.actions;
