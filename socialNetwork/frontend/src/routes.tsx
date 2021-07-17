import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./common/components/PrivateRoute";

import NavbarContainer from "./layout/Navbar/NavbarContainer";

import LoginContainer from "./pages/Login/LoginContainer";
import SignUpContainer from "./pages/SignUp/SignUpContainer";
import OwnProfileContainer from "./pages/Profile/OwnProfile/OwnProfileContainer";
import AddPostContainer from "./pages/AddPost/AddPostContainer";
import FeedContainer from "./pages/Feed/FeedContainer";
import ChatsContainer from "./pages/Chats/ChatsContainer";
import FriendsContainer from "./pages/Friends/FriendsContainer";

const routes = (
  <BrowserRouter>
    <NavbarContainer />
    <main>
      <Switch>
        <Route exact path="/login/" component={LoginContainer} />
        <Route exact path="/sign_up/" component={SignUpContainer} />

        <PrivateRoute exact path="/profile/" component={OwnProfileContainer} />
        <PrivateRoute exact path="/add_post/" component={AddPostContainer} />
        <PrivateRoute exact path="/feed/" component={FeedContainer} />
        <PrivateRoute exact path="/chats/" component={ChatsContainer} />
        <PrivateRoute exact path="/friends/" component={FriendsContainer} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default routes;
