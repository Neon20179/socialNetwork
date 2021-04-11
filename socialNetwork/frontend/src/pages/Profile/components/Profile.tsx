import React, { FC } from "react";

interface ProfileProps {
  children: React.ReactNode;
}

const Profile: FC<ProfileProps> = ({ children }) => {
  return (
    <section>
      <h1>Profile Page</h1>
      {children}
    </section>
  );
};

export default Profile;
