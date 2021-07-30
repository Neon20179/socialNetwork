import React, { FC, useState, ChangeEvent, useRef } from "react";
import { useInput } from "@/hooks";

interface EditorProps {
  createPost: (post: FormData) => void;
}

const Editor: FC<EditorProps> = ({ createPost }) => {
  let [loadedImages, setLoadedImages] = useState([] as any);
  const content = useInput();
  let uploadedImagesContainer = useRef<HTMLSpanElement>(null).current;
  let form = useRef<HTMLFormElement>(null).current;

  const loadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const images = e.target.files;

    for (let idx = 0; idx < images.length; idx++) {
      const render = new FileReader();
      const image = images[idx];

      render.onload = (e) => {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image");
        imageContainer.style.backgroundImage = `url(${e.target.result})`;
        uploadedImagesContainer.appendChild(imageContainer);
        loadedImages.push(image);
      };

      render.readAsDataURL(image);
    }
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    for (let idx = 0; idx < loadedImages.length; idx++) {
      formData.append("post_images", loadedImages[idx]);
    }
    formData.append("content", content.value);

    createPost(formData);

    form.reset();
    uploadedImagesContainer.innerHTML = "";
    loadedImages = [];
  };

  return (
    <form
      className="post-editor"
      onSubmit={handleSubmit}
      ref={(el) => {
        form = el;
      }}
    >
      <div className="add-text">
        <h3>Content:</h3>
        <textarea {...content} placeholder="Write an something..."></textarea>
      </div>
      <div className="add-image">
        <h3>Add Images</h3>
        <div className="user-images">
          <label htmlFor="file-upload" className="custom-file-upload">
            Select file
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={loadImage}
            placeholder="Select images"
            accept="image/png, image/jpeg"
          />
        </div>
        <div
          className="uploaded-files"
          ref={(el) => {
            uploadedImagesContainer = el;
          }}
        ></div>
      </div>
      <button type="submit" className="add-button">
        Add Post
      </button>
    </form>
  );
};

export default Editor;
