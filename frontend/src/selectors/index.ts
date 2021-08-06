import { RootState } from "@/typing";

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectIsAuthLoading = (state: RootState) => state.auth.isLoading;

export const selectUserPosts = (state: RootState) => state.posts.userPosts;
export const selectOtherUserPosts = (state: RootState) =>
  state.posts.otherUserPosts;
export const selectSinglePost = (state: RootState) => state.posts.currentPost;
export const selectIsPostsLoading = (state: RootState) => state.posts.isLoading;
export const selectFeedPosts = (state: RootState) => state.posts.feedPosts;

export const selectUserData = (state: RootState) => state.user.user;
export const selectSearchResult = (state: RootState) => state.user.searchResult;
export const selectOtherUserData = (state: RootState) => state.user.otherUser;
export const selectIsUserLoading = (state: RootState) => state.user.isLoading;

export const selectPostComments = (state: RootState) =>
  state.comments.postComments;
export const selectIsCommentLoading = (state: RootState) =>
  state.comments.isLoading;

export const selectActiveNavbarLink = (state: RootState) =>
  state.components.activeNavbarLink;
export const selectIsShowCreateGroupChatTab = (state: RootState) =>
  state.components.isShowCreateGroupChatTab;

export const selectFriends = (state: RootState) => state.friends.friends;
export const selectIsFriendsLoading = (state: RootState) =>
  state.friends.isLoading;

export const selectChats = (state: RootState) => state.chat.chats;
export const selectSingleChat = (state: RootState) => state.chat.singleChat;
export const selectIsChatLoading = (state: RootState) => state.chat.isLoading;

export const selectFollowers = (state: RootState) => state.followers.followers;
export const selectFollowing = (state: RootState) => state.followers.following;
export const selectIsFollowersLoading = (state: RootState) =>
  state.followers.isLoading;
