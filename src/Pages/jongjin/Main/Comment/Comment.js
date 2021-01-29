import React, { Component } from 'react';
import './Comment.scss'

class Comment extends Component {

  render() {
    const { user, commentList, text, commentAdd, handleInputChange, handleKeyPress} = this.props
      return (
      <div>
        <div className="comment">
            <div>
              <span className="userName">Ironman</span>
              <span> 스파스파이더맨 </span>
                <div>
                  {commentList.map((comment =>   
                <li><span className="userName">{user}</span>{comment}</li>))}
                </div>
            </div>
        </div>
          <section className="commentWrite">
            <input  onChange= {handleInputChange} onKeyDown = {handleKeyPress}
                    className= "commentInput" type="text" placeholder="댓글 달기..."
                    value={text} name="text"/>
            <button onClick={commentAdd}>게시</button>
          </section>
      </div>
    );
  }
}

export default Comment;