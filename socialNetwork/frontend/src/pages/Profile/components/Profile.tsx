import { Post, User } from "@/typing/entities";
import React, { FC } from "react";
import Head from "./Head";
import Posts from "./Posts";

interface ProfileProps {
  user: User;
  posts: Post[];
}

const Profile: FC<ProfileProps> = ({ user, posts, children }) => {
  return (
    <section className="profile-page">
      <Head user={user}>{children}</Head>
      <Posts posts={posts} />
    </section>
  );
};

export default Profile;
