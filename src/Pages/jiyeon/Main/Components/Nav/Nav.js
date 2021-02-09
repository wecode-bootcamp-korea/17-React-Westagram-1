import React, { Component } from 'react';
import './Nav.scss'

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
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
      </div>
    );
  }
}

export default Nav;