import React, { Component } from "react";

const initialState = {
  content: "" as string,
  post_images: [] as string[]
};

type InitialStateType = typeof initialState;

class Editor extends Component {
  // constructor(props) {
  //     super(props)
  //     this.state = initialState
  // }

  // _handleImageChange = (e) => {
  //     e.preventDefault()

  //     const reader = new FileReader()
  //     const file = e.target.files

  //     reader.onloadend = () => {
  //         this.setState({

  //         })
  //     }
  // }

  render() {
    return (
      <div className="post-editor">
        <div className="add-text">
          <h3>Content:</h3>
          <textarea placeholder="Write an something..."></textarea>
        </div>
        <div className="add-image">
          <h3>Add Images</h3>
          <div className="user-images">
            <button className="add-button">
              <img src="/static/media/add-icon.png" alt="Add Post" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
