import React from "react";
import Feed from "./Feed/Feed";
import "./Main.scss";

class MainJY extends React.Component {
  constructor() {
    super();
    this.state = {
      feedData: [],
    };
  }

  componentDidMount() {
    fetch("/data/feedData.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feedData: data,
        });
      });
    }
    
    render() {
    const {feedData} = this.state
      
    return (
      <div className="Main">
        <nav>
          <div className="wrap">
            <div className="instagram_logo">westagram</div>
            <form>
              <input type="text" placeholder="검색" className="user_input" />
            </form>
            <div className="logo">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="explore"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="active_feed_logo"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt="mypage_logo"
              />
            </div>
          </div>
        </nav>
        <main>
          <div className="main_container">
            <div className="feeds">
              {feedData.map((feed) => {
                return (
                <Feed
                  key={feed.id}
                  id={feed.id}
                  accountImg={feed.accountImg}
                  accountName={feed.accountName}
                  userComment={feed.userComment}
                  feedPlace={feed.feedPlace}
                  feedImg={feed.feedImg}
                  likeAccountImg={feed.likeAccountImg}
                  likeAccountCount={feed.likeAccountCount}
                />
              );
        })}
            </div>
            <div className="main-right">
              <div className="right_container">
                <div className="userAcconut_container">
                  <div className="user_detail">
                  <img alt="user_img" className="user_img" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/94368627_630268440862734_1319761630933811200_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=fFVUpWOvd-QAX-gXsKX&tp=1&oh=103e707a288d14bdda8d43029bfff699&oe=6033FE63" />
                  <div className="user text">
                    <p className="userAccount">jamongs824</p>
                    <span className="userNickname">자몽누나</span>
                  </div>
                  </div>
                  <button className="user_accountChange">전환</button>

                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default MainJY;
