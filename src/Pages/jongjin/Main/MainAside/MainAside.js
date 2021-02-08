import React, { Component } from 'react';
import './MainAside.scss'

class MainAside extends Component {

  render() {
    const { key, friendImg , user, follow } = this.props
    return (
      <>
        <li key={key}>
          <div>
            <img alt="친구" src={friendImg}/>
              <div>
                <a>{user}</a>
                <p>회원님을 위한 추천</p>
              </div>
          </div>
            <div className="follow">{follow ? "팔로우" : "팔로잉"}</div>
        </li>
      </>
    );
  }
}

export default MainAside;