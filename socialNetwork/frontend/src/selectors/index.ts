import { RootState } from "@/typing";

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectIsAuthLoading = (state: RootState) => state.auth.isLoading;

export const selectUserPosts = (state: RootState) => state.posts.userPosts;
export const selectIsPostsLoading = (state: RootState) => state.posts.isLoading;

export const selectUserData = (state: RootState) => state.user.data;
export const selectIsUserLoading = (state: RootState) => state.user.isLoading;

export const selectActiveNavbarLink = (state: RootState) =>
  state.components.activeNavbarLink;
