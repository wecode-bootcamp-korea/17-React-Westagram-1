import React, { Component } from 'react';
import { IoMdPerson } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiSwitchHorizontal } from "react-icons/hi";
import './Nav.scss';

class Nav extends Component {

  constructor() {
    super();
    this.state = {
    navMenu : false
    }
  }

  handleMenuOnOff = () => {
    this.setState({
      navMenu: !this.state.navMenu 
    })
  }

  render() {
    return (
      <nav>
        <div className="navbar">
          <div className="navbarLeft">
            <span>westargram</span>
          </div>
          <div className="navbarMid">
            <input type="text" placeholder="검색"/>
          </div>
          <div className="navbarRight">
            <img alt="탐색" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
            <img alt="하트" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
            <img onClick={this.handleMenuOnOff} className="profile" alt="마이페이지" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
            <ul className={this.state.navMenu ? "dropMenuOn" : "dropMenuOff"}>
              <li><span><IoMdPerson /></span><div>프로필</div></li>
              <li><span><BsBookmark /></span><div>저장됨</div></li>   
              <li><span><FiSettings /></span><div>설정</div></li>
              <li><span><HiSwitchHorizontal /></span><div>계정 전환</div></li>
              <hr/>
              <li><div className="logout">로그아웃</div></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;