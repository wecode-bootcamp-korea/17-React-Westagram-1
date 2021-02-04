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
        <main>
          <div className="main_container">
            <div className="feeds"></div>
            <div className="main-right">
              <div className="right_container">right_container</div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default MainJY;
