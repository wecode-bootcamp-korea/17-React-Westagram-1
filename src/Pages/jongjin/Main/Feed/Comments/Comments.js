import React, { Component } from 'react';
import Comment from './Comment/Comment'
import './Comments.scss'

class Commnets extends Component {

  state = {
    text: "",
    user: "playck ",
    commentList: [],
    deleteBtn: <i class="fas fa-trash-alt"></i>,
    disabled: true
  }

  handleInputChange = (e) => {
    this.setState({
        text: e.target.value
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
        this.handleClick();
    }
  }

  handleClick = () => {
    const { commentList , user, text } = this.state
    this.setState({
        commentList: [
          ...commentList,
          {
            id: commentList.length + 1,
            userName: user,
            content: text
          }
        ],
        text: ''
    });
  };

  handleRemoveComment = (num) => {
    this.setState({

    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        commentList: data,     
      });
    });
  }

  render() {
      return (
        <div className="commentList">
          { this.state.commentList.map(comment => {
              return(
                <Comment key={comment.id}
                content= {comment.content}
                userName= {comment.userName} 
                deleteBtn = {this.state.deleteBtn}
                />
              )
          })}
          <section className="commentWrite">
            <input  onChange= {this.handleInputChange} onKeyDown = {this.handleKeyPress}
                    className= "commentInput" type="text" placeholder="댓글 달기..."
                    value= {this.state.text} name="text"/>
            <button onClick={this.commentAdd}>게시</button>
          </section>
        </div>      
    );
  }
}

export default Commnets;