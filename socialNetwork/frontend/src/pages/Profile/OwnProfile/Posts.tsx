import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Post } from "@/typing";

interface PostsProps {
  posts: Post[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Link
          to={`/post/${post.id}`}
          key={post.id}
          className="post"
          style={
            post.post_images.length > 0
              ? { backgroundImage: `url(${post.post_images[0].image})` }
              : { background: "#a4c7ee" }
          }
        ></Link>
      ))}
    </div>
  );
};

export default Posts;
