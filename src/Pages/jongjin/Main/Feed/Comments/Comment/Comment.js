import React, { Component } from 'react';
import './Comment.scss'

class Comment extends Component {

  render() {
    const { key, id, content, userName, likeBtn, likedBtn, isLiked, deleteBtn, handleRemoveComment , handleLikeComment } = this.props
    return (
      <>
        <div className="comment">        
          <li key={key} className="commnetLine">
            <div>
              <span className="userName">{userName}</span>
              <p className="content">{content}</p>
            </div>
            <div>
              <span className="delBtn" onClick={() => handleRemoveComment(id)}>{deleteBtn}</span>
              <button onClick={() => handleLikeComment(id)}
                className={isLiked ? "emptyHeartHide" : "emptyHeart" }>
                {likeBtn}
              </button>
              <button onClick={() => handleLikeComment(id)}
                className={isLiked ? "comfullHeart" : "fullHeartHide" }>
                {likedBtn}
              </button> 
            </div>
          </li>
        </div>
      </>
    );
  }
}

export default Comment;