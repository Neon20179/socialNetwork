import { FC, useState, ChangeEvent, useRef } from "react";
import { useInput } from "@/hooks";

interface EditorProps {
  createPost: (post: FormData) => void;
}

const Editor: FC<EditorProps> = ({ createPost }) => {
  const [loadedImages, setLoadedImages] = useState<any[]>([]);
  const [loadedImagesUrlsResult, setLoadedImagesUrlsResult] = useState<any[]>(
    []
  );
  const {
    value: contentValue,
    bind: contentBind,
    reset: contentReset,
  } = useInput();

  let form = useRef<HTMLFormElement>(null).current;

  const loadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files[0];
    const render = new FileReader();

    render.onload = (e) => {
      setLoadedImagesUrlsResult((prevValue) => [...prevValue, e.target.result]);
    };

    render.readAsDataURL(image);
    setLoadedImages((prevValue) => [...prevValue, image]);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    for (let idx = 0; idx < loadedImages.length; idx++) {
      formData.append("post_images", loadedImages[idx]);
    }
    formData.append("content", contentValue);

    createPost(formData);

    form.reset();
    contentReset();
    setLoadedImages([]);
    setLoadedImagesUrlsResult([]);
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
        <textarea
          {...contentBind}
          placeholder="Write an something..."
        ></textarea>
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
        <div className="uploaded-files">
          {loadedImagesUrlsResult.map((imageUrl, idx) => (
            <div
              className="image"
              style={{ backgroundImage: `url(${imageUrl})` }}
              key={idx}
            ></div>
          ))}
        </div>
      </div>
      <button type="submit" className="add-button">
        Add Post
      </button>
    </form>
  );
};

export default Editor;
