import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserPosts } from "@/state/posts";
import { activateNavbarLink } from "@/state/components";
import { selectUserData, selectUserPosts } from "@/selectors";
import { NavbarLinks } from "@/typing";
import OwnProfile from "./OwnProfile";
import Head from "./Head";
import Posts from "./Posts";

const OwnProfileContainer: FC = () => {
  const user = useSelector(selectUserData);
  const posts = useSelector(selectUserPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPosts());
    dispatch(activateNavbarLink(NavbarLinks.PROFILE));
  }, []);

  return (
    <OwnProfile>
      <Head user={user} />
      <Posts posts={posts} />
    </OwnProfile>
  );
};

export default OwnProfileContainer;
