import { createSlice } from "@reduxjs/toolkit";
import { ComponentsState } from "@/typing";

const initialState: ComponentsState = {
  activeNavbarLink: ""
};

const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    activateNavbarLink: (state, { payload }) => {
      state.activeNavbarLink = payload;
    }
  }
});

export default componentsSlice.reducer;
export const { activateNavbarLink } = componentsSlice.actions;
