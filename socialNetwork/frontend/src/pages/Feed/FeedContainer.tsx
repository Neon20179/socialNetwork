import { activateNavbarLink } from "@/state/components";
import { NavbarLinks } from "@/typing";
import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

const FeedContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activateNavbarLink(NavbarLinks.FEED));
  }, []);

  return <h1>Feed</h1>;
};

export default FeedContainer;
