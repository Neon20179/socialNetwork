import { activateNavbarLink } from "@/state/components";
import { NavbarLinks } from "@/typing";
import React, { useEffect, FC } from "react";
import { useDispatch } from "react-redux";

const ChatsContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activateNavbarLink(NavbarLinks.CHATS));
  });

  return <h1>Chats</h1>;
};

export default ChatsContainer;
