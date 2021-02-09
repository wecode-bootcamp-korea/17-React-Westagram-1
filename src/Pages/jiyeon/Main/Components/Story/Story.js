import React, { Component } from "react";
import './Story.scss'

class Story extends Component {
  render() {
    const {storyImgSrc, userId} = this.props
    return (
      <div className="Story">
        <li className="story_list_item">
          <div className="story_img">
            <img
              className="story_user_img"
              alt="story_user_img"
              src={storyImgSrc}
            />
          </div>
          <div className="story_user_id">{userId}</div>
        </li>
      </div>
    );
  }
}

export default Story;
