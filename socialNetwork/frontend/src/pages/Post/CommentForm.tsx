import React, { FC, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { useInput } from "@/hooks";
import { createComment } from "@/state/comments";

interface CommentFormProps {
  postId: string | number;
  replayTo: number;
}

const CommentForm: FC<CommentFormProps> = ({ postId, replayTo }) => {
  const dispatch = useDispatch();
  const content = useInput();

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = {
      post: postId,
      replay_to: replayTo,
      content: content.value
    };
    dispatch(createComment(comment));
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea {...content} placeholder="Write comment" />
      <button className="comment-submit-button">Submit</button>
    </form>
  );
};

export default CommentForm;
