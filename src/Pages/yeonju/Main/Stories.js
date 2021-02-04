import React, { Component } from "react";
import "./Stories.scss";

class Stories extends Component {
  render() {
    return (
      <div>
        <div className="story-box">
          <div className="storyimgs">
            <img className="storyimg" alt="photo2" src={this.props.img} />
            <span className="story_id">{this.props.name}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Stories;
