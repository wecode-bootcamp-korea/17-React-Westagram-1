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
    navMenu : false,
    text: "",
    feedList: []
    }
  }

  handleMenuOnOff = () => {
    this.setState({
      navMenu: !this.state.navMenu 
    })
  }

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value
    }
  )}

  componentDidMount() {
    fetch('http://localhost:3000/data/feedListData.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
          feedList: data,     
      });
  });
  }
  
  render() {
    const { feedList, text } = this.state
    const filterData = feedList.filter( user => {
      const regexp = new RegExp( text, 'ig')
      return user.userName.match( regexp )
    })

    return (
      <nav>
        <div className="navbar">
          <div className="navbarLeft">
            <span>westargram</span>
          </div>
          <div className="navbarMid">
            <input onChange={this.handleInputChange} value={this.state.text} type="text" placeholder="검색"/>
            { this.state.text.length > 0 &&
              <ul className="searchList"> 
              {
              filterData.map(user => {
                return(
                  <div className="filteredUser">
                    <img alt="사진" src={user.img}/>
                    <li>{user.userName}</li>
                  </div>
                );
              })}  
              </ul>
            }
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