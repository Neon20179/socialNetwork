import React, { FC } from "react";
import { useSelector } from "react-redux";
import {
  selectActiveNavbarLink,
  selectIsAuth,
  selectUserData
} from "@/selectors";
import Navbar from "./Navbar";

const NavbarContainer: FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const avatarImage = useSelector(selectUserData).avatar_image;
  const activeNavbarLink = useSelector(selectActiveNavbarLink);

  if (!isAuth) return null;

  return (
    <Navbar avatarImage={avatarImage} activeNavbarLink={activeNavbarLink} />
  );
};

export default NavbarContainer;
