import React, { FC } from "react";
import { Link } from "react-router-dom";
import { OwnProfileProps } from "./ownProfileTypes";

const headerImageStyles = (headerImage: string) => ({
  backgroundImage: `url(${headerImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
});

const OwnProfile: FC<OwnProfileProps> = ({ user }) => {
  return (
    <section className="own-profile-page">
      <div className="head">
        <div
          className="head-image"
          style={
            user.header_image ? headerImageStyles(user.header_image) : { background: "#a4c7ee" }
          }
        >
          <h2>{user.username}</h2>
          <div className="set-not">
            <Link to="/settings/">
              <img src="/static/media/settings-icon.png" alt="Settings" />
            </Link>
            <Link to="/notifications/">
              <img src="/static/media/notifications-icon.png" alt="Notifications" />
            </Link>
          </div>
        </div>
        <img src={user.avatar_image} alt={user.username} className="avatar-image" />
        <div className="follow-info">
          <Link to="/user/followers/">0 Followers</Link>
          <Link to="/user/following/">0 Following</Link>
        </div>
        <div className="additional">
          <h4>
            {user.first_name} {user.last_name}
          </h4>
          <Link className="edit-btn" to="/user/edit/">
            Edit Profile
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OwnProfile;
