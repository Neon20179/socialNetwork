import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { activateNavbarLink } from "@/state/components";
import { NavbarLinks } from "@/typing";
import AddPost from "./AddPost";
import Editor from "./Editor";

const AddPostContainer: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activateNavbarLink(NavbarLinks.ADD_POST));
  }, []);

  return (
    <AddPost>
      <Editor />
    </AddPost>
  );
};

export default AddPostContainer;
