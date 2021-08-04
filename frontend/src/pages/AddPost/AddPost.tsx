import { FC } from "react";

const AddPost: FC = ({ children }) => {
  return (
    <section className="add-post-page">
      <h2>Add Post</h2>
      {children}
    </section>
  );
};

export default AddPost;
