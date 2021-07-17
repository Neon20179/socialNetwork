import { createSlice } from "@reduxjs/toolkit";
import { PostsState } from "@/typing";

const initialState: PostsState = {
  userPosts: [],
  isLoading: false
};

const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getUserPosts: (state) => {
      state.isLoading = true;
    },
    getUserPostsSuccess: (state, { payload }) => {
      state.userPosts = payload;
      state.isLoading = false;
    },
    getUserPostsFailed: (state) => {
      state.isLoading = false;
    }
  }
});

export default postsSlice.reducer;
export const { getUserPosts, getUserPostsSuccess, getUserPostsFailed } =
  postsSlice.actions;
