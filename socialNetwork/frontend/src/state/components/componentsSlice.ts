import { createSlice } from "@reduxjs/toolkit";
import { ComponentsState } from "@/typing/state";

const initialState: ComponentsState = {
  activeNavbarLink: "",
  isShowCreateGroupChatTab: false
};

const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    activateNavbarLink: (state, { payload }) => {
      state.activeNavbarLink = payload;
    },
    toggleCreateGroupChatTab: (state) => {
      state.isShowCreateGroupChatTab = !state.isShowCreateGroupChatTab;
    }
  }
});

export default componentsSlice.reducer;
export const { activateNavbarLink, toggleCreateGroupChatTab } =
  componentsSlice.actions;
