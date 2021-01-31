import React, { Component } from "react";
import heart from "../../../image/kangminji/heart.png";
import redheart from "../../../image/kangminji/redheart.png";
import "./Main.scss";

class Comments extends Component {
  render() {
    return (
      <li className="comment">
        <div>
          <span className="username">{this.props.username} : </span>
          <span className="commenttext"> {this.props.content}</span>
        </div>
        <span className="isLiked">
          {this.props.isLiked ? (
            <img alt="love" className="icon" src={redheart} />
          ) : (
            <img alt="heart" className="icon" src={heart} />
          )}
        </span>
      </li>
    );
  }
}

export default Comments;
