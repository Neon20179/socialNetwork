import React, { FC } from "react";
import { Link } from "react-router-dom";
import { User } from "@/typing";

interface HeadProps {
  user: User;
}

const Head: FC<HeadProps> = ({ user }) => {
  return (
    <div className="head">
      <div
        className="head-image"
        style={
          user.header_image
            ? { backgroundImage: `url(${user.header_image})` }
            : { background: "var(--dark-grey)" }
        }
      >
        <h2>{user.username}</h2>
      </div>
      <div
        style={
          user.avatar_image
            ? { backgroundImage: `url(${user.avatar_image})` }
            : { background: "var(--orange)" }
        }
        className="avatar-image"
      />
      <div className="follow-info">
        <Link to="/user/followers/">{user.followers_quantity} Followers</Link>
        <Link to="/user/following/">{user.following_quantity} Following</Link>
      </div>
      <div className="bio">
        <h4 className="name">
          {user.first_name} {user.last_name}
        </h4>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default Head;
