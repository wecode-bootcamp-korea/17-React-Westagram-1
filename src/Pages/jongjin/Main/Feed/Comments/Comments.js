import React, { Component } from 'react';
import Comment from './Comment/Comment'
import './Comments.scss'

class Commnets extends Component {

  state = {
    text: "",
    user: "playck ",
    commentList: [],
    deleteBtn: <i class="fas fa-trash-alt"></i>,
    likeBtn: <i class="far fa-heart"></i>,
    likedBtn: <i class="fas fa-heart"></i>,
    disabled: true
  }

  handleInputChange = (e) => {
    this.setState({
        text: e.target.value,
    }, () => this.commentBtnOnOff()
  )}

  commentBtnOnOff = () => {
    if(this.state.text){
      this.setState({
        disabled: false
      })
    } else {
      this.setState({
        disabled: true
      })
    }
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
        this.handleAddComment();
        this.setState({
          disabled: true
        })
    }
  }

  handleAddComment = () => {
    const { commentList , user, text } = this.state
    if(text){
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
    }
  }

  handleRemoveComment = (id) => {
    const nextCommnets = this.state.commentList.filter(
      (commnet) => {return commnet.id !== id})
      
      this.setState({
      commentList: nextCommnets
    })
  }

  handleLikeComment = (id) => {
    const nextLikedCommnets = this.state.commentList.map((comment) => {
      if( comment.id === id) {
        comment.isLiked = !comment.isLiked
      }
      return comment
    })
    this.setState({commentLisr: nextLikedCommnets})
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
    const { likeBtn, likedBtn, deleteBtn, text, disabled} = this.state
      return (
        <div className="commentList">
          { this.state.commentList.map(comment => {
              return(
                <Comment key={comment.id}
                id= {comment.id}
                content= {comment.content}
                userName= {comment.userName} 
                deleteBtn= {deleteBtn}
                likeBtn= {likeBtn}
                likedBtn= {likedBtn}
                isLiked= {comment.isLiked}
                handleRemoveComment = {this.handleRemoveComment}
                handleLikeComment = {this.handleLikeComment}
                />
              )
          })}
          <section className="commentWrite">
            <input  onChange= {this.handleInputChange} onKeyDown = {this.handleKeyPress}
                    className= "commentInput" type="text" placeholder="댓글 달기..."
                    value= {text} name="text"/>
            <button style={{color: disabled ? "#7cc6f8" : "#0095F6"}} onClick={this.handleAddComment} disabled={false}>게시</button>
          </section>
        </div>      
    );
  }
}

export default Commnets;