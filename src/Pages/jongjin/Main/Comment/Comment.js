import React, { Component } from 'react';
import './Comment.scss'

class Comment extends Component {

  render() {
    const { key,  userName, commentList, content, deleteBtn} = this.props
      return (
      <div>
        <div className="commentList">
              <div>        
              <li key={key} className="commnet">
                <span className="userName">{userName}</span>{content}<span className="delBtn">{deleteBtn}</span></li>
              </div>
        </div>
      </div>
    );
  }
}

export default Comment;