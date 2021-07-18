import React, { useRef, useEffect, FC } from "react";
import { Post } from "@/typing";
import { usePagination } from "@/hooks";
import { Link } from "react-router-dom";

interface FeedProps {
  feedPosts: Post[];
  getFeedPosts: (currentPostsQuantity: number) => void;
}

const Feed: FC<FeedProps> = ({ feedPosts, getFeedPosts }) => {
  let sectionNode = useRef();
  let isAtPageBottom = usePagination(sectionNode);

  if (isAtPageBottom) getFeedPosts(feedPosts.length);

  return (
    <section className="feed__page" ref={sectionNode}>
      <div className="posts-list">
        {feedPosts.map((post) => (
          <div className="post" key={post.id}>
            <Link className="user-link" to="/feed/">
              <div className="user-image"></div>
              <h4 className="user-name">{post.user}</h4>
            </Link>
            {post.post_images.length > 0 ? (
              <div className="images">
                {post.post_images.map((image) => (
                  <img src={image.image} key={image.id}></img>
                ))}
              </div>
            ) : null}
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feed;
