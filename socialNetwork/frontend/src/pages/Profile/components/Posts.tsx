import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Post } from "@/typing/entities";

interface PostsProps {
  posts: Post[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map((post) => (
          <Link
            to={`/post/${post.id}`}
            key={post.id}
            className="post"
            style={
              post.post_images.length > 0
                ? { backgroundImage: `url(${post.post_images[0].image})` }
                : {
                    background: "var(--light-grey)",
                    border: "2px solid var(--grey)"
                  }
            }
          ></Link>
        ))
      ) : (
        <h2 className="no-posts-message">there is nothing here yet</h2>
      )}
    </div>
  );
};

export default Posts;
