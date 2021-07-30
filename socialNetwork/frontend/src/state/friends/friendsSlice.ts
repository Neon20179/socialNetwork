import { createSlice } from "@reduxjs/toolkit";
import { FriendsState } from "@/typing/state";

const initialState: FriendsState = {
  friends: [],
  isLoading: false
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    getFriends: (state, { payload }) => {
      state.isLoading = true;
    },
    getFriendsSuccess: (state, { payload }) => {
      state.friends = payload;
      state.isLoading = false;
    },
    getFriendsFailed: (state) => {
      state.isLoading = false;
    },

    addFriend: (state, { payload }) => {
      state.isLoading = true;
    },
    addFriendSuccess: (state) => {
      state.isLoading = false;
    },
    addFriendFailed: (state) => {
      state.isLoading = false;
    },

    removeFriend: (state, { payload }) => {
      state.isLoading = true;
    },
    removeFriendSuccess: (state) => {
      state.isLoading = false;
    },
    removeFriendFailed: (state) => {
      state.isLoading = false;
    }
  }
});

export default friendsSlice.reducer;
export const {
  getFriends,
  getFriendsSuccess,
  getFriendsFailed,
  addFriend,
  addFriendSuccess,
  addFriendFailed,
  removeFriend,
  removeFriendSuccess,
  removeFriendFailed
} = friendsSlice.actions;
