import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  render() {
    const {commentData} = this.props;

    return (
      <div className="Comment">
        <li>
          <a href="/">jiyeon0807</a> <span>{commentData}</span>
        </li>
      </div>
    );
  }
}

export default Comment;
