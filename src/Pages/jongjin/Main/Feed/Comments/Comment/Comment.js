import React, { Component } from 'react';
import './Comment.scss'

class Comment extends Component {
  render() {
    const { key , content, userName, deleteBtn } = this.props
    return (
      <>
        <div className="comment">        
          <li key={key} className="commnetLine">
            <div>
              <span className="userName">{userName}</span>
              <p className="content">{content}</p>
            </div>
            <div>
              <span className="delBtn">{deleteBtn}</span>
            </div>
          </li>
        </div>
      </>
    );
  }
}

export default Comment;