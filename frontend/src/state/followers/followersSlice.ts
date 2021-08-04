import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const followersSlice = createSlice({
  name: "followers",
  initialState,
  reducers: {
    follow: (state, { payload }) => {},
    followSuccess: (state) => {},
    followFailed: (state) => {},

    unfollow: (state, { payload }) => {},
    unfollowSuccess: (state) => {},
    unfollowFailed: (state) => {}
  }
});

export default followersSlice.reducer;
export const {
  follow,
  followSuccess,
  followFailed,
  unfollow,
  unfollowSuccess,
  unfollowFailed
} = followersSlice.actions;
