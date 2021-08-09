import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./common/components/PrivateRoute";

import NavbarContainer from "./layout/Navbar/NavbarContainer";

import SignInContainer from "./pages/SignIn/SignInContainer";
import SignUpContainer from "./pages/SignUp/SignUpContainer";
import OwnProfileContainer from "./pages/Profile/OwnProfile/OwnProfileContainer";
import OtherProfileContainer from "./pages/Profile/OtherProfile/OtherProfileContainer";
import AddPostContainer from "./pages/AddPost/AddPostContainer";
import FeedContainer from "./pages/Feed/FeedContainer";
import ChatsContainer from "./pages/Chats/ChatsContainer";
import PostContainer from "./pages/Post/PostContainer";
import PrivateChatContainer from "./pages/Chats/PrivateChat/PrivateChatContainer";
import GroupChatContainer from "./pages/Chats/GroupChat/GroupChatContainer";
import People from "./pages/People/People";
import Settings from "./pages/Settings/Settings";
import EditProfile from "./pages/Settings/EditProfile";
import Followers from "./pages/Follow/Followers";
import Following from "./pages/Follow/Following";
import Home from "./pages/Home/Home";
import NotificationsContainer from "./pages/Notifications/NotificationsContainer";

const routes = (
  <BrowserRouter>
    <NavbarContainer />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/sign_in/" component={SignInContainer} />
        <Route exact path="/sign_up/" component={SignUpContainer} />

        <PrivateRoute exact path="/profile/" component={OwnProfileContainer} />
        <PrivateRoute exact path="/add_post/" component={AddPostContainer} />
        <PrivateRoute exact path="/people/" component={People} />
        <PrivateRoute exact path="/feed/" component={FeedContainer} />
        <PrivateRoute exact path="/chats/" component={ChatsContainer} />

        <PrivateRoute exact path="/settings/" component={Settings} />
        <PrivateRoute exact path="/edit_profile/" component={EditProfile} />
        <PrivateRoute
          exact
          path="/notifications/"
          component={NotificationsContainer}
        />

        <PrivateRoute exact path="/followers/" component={Followers} />
        <PrivateRoute exact path="/following/" component={Following} />

        <PrivateRoute exact path="/post/:pk/" component={PostContainer} />
        <PrivateRoute
          exact
          path="/user/:pk/"
          component={OtherProfileContainer}
        />
        <PrivateRoute
          exact
          path="/private_chat/:pk/"
          component={PrivateChatContainer}
        />
        <PrivateRoute
          exact
          path="/group_chat/:pk/"
          component={GroupChatContainer}
        />
      </Switch>
    </main>
  </BrowserRouter>
);

export default routes;
