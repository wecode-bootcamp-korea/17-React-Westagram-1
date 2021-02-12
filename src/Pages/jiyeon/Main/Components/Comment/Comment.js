import React, { Component } from "react";

import "./Comment.scss";

class Comment extends Component {
  
  render() {
    // const {id, name, comment, isLiked, deleteComment} = this.props;
    const {id, name, comment, deleteCM} = this.props;
  
    return (
      <div className="Comment">
        <li className="comment">
          <div>
            <p href="/">{name}</p> 
            <span>{comment}</span>
          </div>
          <div className="comment_icon">
          {/* <div className={isLiked ? "like" : "unlike"}></div> */}
          {/* <div onClick={() => deleteComment(id)} className="deleteComment"/> */}
          <div onClick={deleteCM} className="deleteComment"/>
          </div>
        </li>
      </div>
    );
  }
}

export default Comment;
