import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectActiveNavbarLink, selectUserData } from "@/selectors";
import Navbar from "./Navbar";

const NavbarContainer: FC = () => {
  const avatarImage = useSelector(selectUserData).avatar_image;
  const activeNavbarLink = useSelector(selectActiveNavbarLink);

  return (
    <Navbar avatarImage={avatarImage} activeNavbarLink={activeNavbarLink} />
  );
};

export default NavbarContainer;
