import React, { Component } from 'react';
import './Login.scss'
import instalogo from '../../../images/minjoo/instagram-logo-1.png'
import facebook from '../../../images/minjoo/facebook.svg'

class Login extends Component {
    render() {
        return (
<div className="Login">
      
      <main className="Main">
          {/* <!-- 인스타그램 이미지 --> */}
          <div className="instagramimg"></div>

          {/* <!-- 유저 폼 --> */}
          <div className="users-form">
              {/* <!-- 로그인 폼 --> */}
              <div className="contain">
                  <img className="insta-logo" src={ instalogo } />
                  <input type="text" className="btn" placeholder="전화번호, 사용자 이름 또는 이메일" />
                  <input type="password" className="btn" placeholder="비밀번호" />
                  <button className="login-btn">로그인</button>
                  <div className="or">
                      <hr className="hr1"/>
                      <span className="or-">또는</span>
                      <hr className="hr2"/>
                  </div>
                  <div className="login-to-facebook">
                      <img id="facebooklogo" src={ facebook } alt="facebook icon"/>
                      <a href="#" className="login-to-fb">Facebook으로 로그인</a>
                      <a href="#" className="forgot-password">비밀번호를 잊으셨나요?</a>
                  </div>
              </div>

              {/* <!-- 가입하기 --> */}
              <div className="sign-up">
                  <span className="had-account">계정이 없으신가요?</span>
                  <a href="#" className="sign-up-link">가입하기</a>
              </div>

              {/* <!-- 앱 다운로드 --> */}
              <div className="download-app">앱을 다운로드하세요.</div>
              <div className="download">
                      <button><b>AppStore</b>에서 <br/>다운로드하기</button>
                      <button>다운로드하기<br/><b>Google Play</b></button>
              </div>
          
          </div>
      </main>
          {/* <!-- 푸터 --> */}
          <div className="footer">
              <ul className="footer-menu">
                  <li><a href="">소개</a></li>
                  <li><a href="">블로그</a></li>
                  <li><a href="">채용 정보</a></li>
                  <li><a href="">도움말</a></li>
                  <li><a href="">API</a></li>
                  <li><a href="">개인정보처리방침</a></li>
                  <li><a href="">약관</a></li>
                  <li><a href="">인기 계정</a></li>
                  <li><a href="">해시태그</a></li>
                  <li><a href="">위치</a></li>
                  <li><a href="">뷰티</a></li>
                  <li><a href="">댄스 및 공연</a></li>
                  <li><a href="">피트니스</a></li>
                  <li><a href="">식음료</a></li>
                  <li><a href="">집 및 정원</a></li>
                  <li><a href="">음악</a></li>
                  <li><a href="">시각 예술</a></li>
              </ul>
              <div className="footer-info">
                  <span>ⓒ2021 Instagram from Facebook</span>
              </div>
          </div>
      </div>
        );
    }
}

export default Login;