import React from "react";
import Comment from "./Comment/Comment"
import './Main.scss';

class MainJY extends React.Component {
  constructor(){
    super();
    this.state = {
      commentInput: '',
      commentData: [],
      isBtnActive: false
    }
  }

  handleBtnActive = (event) => {
    this.setState({
      isBtnActive: this.state.commentInput.length !== 0,
      commentInput: event.target.value,
    })
  }

  handleCommentAdd = (event) => {
    event.preventDefault();
    if(this.state.commentInput.length !== 0){
      this.state.commentData.push(this.state.commentInput)
      this.setState({
        commentData: this.state.commentData,
        commentInput: '',
      })
    }
  }

    render() {
      const {commentInput, commentData, isBtnActive} = this.state;

      return (
        <div className="Main">
          <nav>
            <div className="wrap">
              <div className="instagram_logo">westagram</div>
              <form action="">
                <input type="text" placeholder="검색" className="user_input"/>
              </form>
              <div className="logo">
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="explore" />
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="active_feed_logo" />
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="mypage_logo" />
              </div>
            </div>
          </nav>
          <main>
            <div className="main_container">
              <div className="feeds">
                <article className="article_feeds">
                  <header>
                    <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/94368627_630268440862734_1319761630933811200_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=fFVUpWOvd-QAX-gXsKX&tp=1&oh=103e707a288d14bdda8d43029bfff699&oe=6033FE63" alt="profile" className="profile"/>
                    <a className="account_name" href="https://www.instagram.com/jamongs824/">jamongs824</a>
                    <a className="feed_place" href="/">제주도</a>
                    <button type="button">
                      <svg aria-label="옵션 더 보기" fill="#262626" viewBox="0 0 48 48" height="16" width="16">
                        <circle cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle>
                        <circle cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle>
                        <circle cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle>
                      </svg>
                    </button>
                  </header>
                  <div>
                    <img className="feed_img" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/95664798_3109612645767721_5437186584810510550_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=RT3P8HAsKLYAX9as55K&tp=1&oh=8d179792d6a5fbf7bf5e506009b79346&oe=6038E9B3" alt="feed"/>
                  </div>
                  <div className="feed_detail">
                    <section className="feed_icon">
                      <div className="icon">
                        <span>
                          <button type="button">
                            <span>
                              <svg aria-label="좋아요" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                            </span>
                          </button>
                        </span>
                        <span>
                          <button type="button">
                            <span>
                              <svg aria-label="댓글 달기" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                            </span>
                          </button>
                        </span>
                        <span>
                          <button type="button">
                            <span>
                              <svg aria-label="게시물 공유" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                            </span>
                          </button>
                        </span>
                      </div>
                    </section>
                    <section className="like_account">
                      <img className="like_account_img" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/122393205_722380055033414_2103976188369736018_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=wU4QiDUTxKUAX-4UeLp&tp=1&oh=4a8c1bb9620774d37bf9d521c7f4a8d6&oe=60387101" alt="like_account_img"/>
                      <div className="like_account_count"> <span>jiyeon0807</span> 님 <span>외 10명</span>이 좋아합니다</div>
                    </section>
                    <ul className="comment_list">
                    {commentData.map(comment => {
                      return <Comment commentData={comment} />
                    })}
                    </ul>
                    <div className="comment_input">
                      <form
                        onChange = {this.handleBtnActive}
                        onSubmit={this.handleCommentAdd} 
                        action="submit" 
                        className="form"
                      >
                        <textarea 
                          value={commentInput} 
                          className="comment_input_box"
                          autocomplete="off" 
                          autocorrect="off" 
                          placeholder="댓글 달기...">
                        </textarea>
                        <button className= {isBtnActive ? "active_btn" : "inactive_btn"} type="submit">게시</button>
                      </form>
                    </div>
                  </div>
                </article>
              </div>
              <div className="main-right">
                <div className="right_container">
                  right_container
                </div>
              </div>
            </div>
          </main>
      </div>
      );
    }
}
export default MainJY;