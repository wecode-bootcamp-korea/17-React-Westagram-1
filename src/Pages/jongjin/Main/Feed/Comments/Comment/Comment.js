import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { key , content, userName, deleteBtn } = this.props
    return (
      <>
        <div className="comment">        
          <li key={key} className="commnetLine">
          <span className="userName">{userName}</span>
          <span className="content">{content}</span>
          <span className="delBtn">{deleteBtn}</span></li>
        </div>
      </>
    );
  }
}

export default Comment;