import React, { Component } from 'react';
import Comments from './Comments/Comments'
import './Feed.scss'

class Feed extends Component {

  constructor() {
    super();
    this.state = {
    isLike : true,
    like: 0
    }
  }

  componentDidMount() {
    this.setState({
      isLike: this.props.isLike,
      like: this.props.like
    })
  }

  handleLike = () => {
    this.setState({
      isLike: !this.state.isLike
    }, () => this.handleLikenumUp())
  }

  handleLikenumUp = () => {
    if(this.state.isLike){
        this.setState({
          like: this.state.like + 1
        })
    } else {
        this.setState({
          like: this.state.like - 1
        })   
    }
  }
  
  render() {
    const { userImg, user, feedImg, storyName, story} = this.props
    const { isLike, like } = this.state
    return (
        <div className="feed">
          <div className="feedHead">
              <div>
                  <img alt="user" src={userImg}/>
                  <span>{user}</span>
              </div>
              <div>
                  <i className="fas fa-ellipsis-h"></i>
              </div>
          </div>
          <div className="feedBody">
            <div className="feedImage">
                <img alt="사진" src={feedImg} onDoubleClick={this.handleLike}/>
                { isLike && 
                  <div className="heart">
                    <i className="fas fa-heart"></i>
                  </div>
                }
              </div>
            <section className="feedFunc">
            <ul>
              <li>
                <button 
                  className={isLike ? "emptyHeartHide" : "emptyHeart" }
                  onClick={this.handleLike}>
                <i class="far fa-heart"></i>
                </button>
              </li>    
              <li>
                <button 
                  className={isLike ? "fullHeart" : "fullHeartHide" }
                  onClick={this.handleLike}>
                  <i className="fas fa-heart"></i>
                </button>  
              </li>
              <li><i className="far fa-comment"></i></li>
              <li><i className="far fa-paper-plane"></i></li>
            </ul>    
              <div>
                <i className="far fa-bookmark"></i>
              </div>
            </section>
            <section className="likeInfo">
              <p>좋아요 <span>{like}</span>개</p>
            </section>
            <section className="feedInfo">
              <span>
                <a>{user}</a> {storyName}
                <br/>
                <br/>
                  {story}
              </span>
              <div className="commentAll">댓글 2,021개 모두 보기</div>
            </section>
          <section className="commentBox">
            <Comments />
          </section>
        </div> 
      </div>
    );
  }
}

export default Feed;