import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateNavbarLink } from "@/state/components";
import { getFeedPosts } from "@/state/posts";
import { likePost } from "@/state/posts";
import { selectFeedPosts } from "@/selectors";
import { NavbarLinks } from "@/typing/entities";

import Feed from "./Feed";

const FeedContainer: FC = () => {
  const dispatch = useDispatch();
  const feedPosts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(activateNavbarLink(NavbarLinks.FEED));
  }, [dispatch]);

  return (
    <Feed
      feedPosts={feedPosts}
      getFeedPosts={(currentPostsQuantity: number) =>
        dispatch(getFeedPosts(currentPostsQuantity))
      }
      likePost={(postId: number) => dispatch(likePost(postId))}
    />
  );
};

export default FeedContainer;
