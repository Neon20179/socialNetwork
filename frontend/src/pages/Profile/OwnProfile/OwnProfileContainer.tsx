import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserPosts } from "@/state/posts";
import { activateNavbarLink } from "@/state/components";
import { selectUserData, selectUserPosts } from "@/selectors";
import { NavbarLinks } from "@/typing/entities";
import OwnProfile from "./OwnProfile";
import Profile from "../components/Profile";

const OwnProfileContainer: FC = () => {
  const user = useSelector(selectUserData);
  const posts = useSelector(selectUserPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPosts());
    dispatch(activateNavbarLink(NavbarLinks.PROFILE));
  }, [dispatch]);

  return (
    <OwnProfile>
      <Profile user={user} posts={posts}>
        <div className="follow-info">
          <Link to="/user/followers/">{user.followers_quantity} Followers</Link>
          <Link to="/user/following/">{user.following_quantity} Following</Link>
        </div>
      </Profile>
    </OwnProfile>
  );
};

export default OwnProfileContainer;
