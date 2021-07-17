import React, { useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { activateNavbarLink } from "@/state/components";
import { NavbarLinks } from "@/typing";

const FriendsContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activateNavbarLink(NavbarLinks.FRIENDS));
  }, []);

  return <h1>Friends</h1>;
};

export default FriendsContainer;
