import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  render() {
    const {name, comment, isLiked} = this.props;

    return (
      <div className="Comment">
        <li className="comment">
          <div>
            <a href="/">{name}</a> 
            <span>{comment}</span>
          </div>
          <div className={isLiked ? "like" : "unlike"}>
          </div>
        </li>
      </div>
    );
  }
}

export default Comment;
