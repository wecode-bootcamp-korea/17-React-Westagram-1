import React, { Component } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import instalogo from "../../../images/minjoo/instagram-logo-1.png";
import facebook from "../../../images/minjoo/facebook.svg";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
      buttonColor: "#c6defa",
      buttonState: true,
    };
  }

  goToMain = () => {
    // fetch("http://10.58.0.237:8000/user", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     // full_name: "",
    //     email: this.state.id,
    //     // phone_number: "",
    //     // username: "",
    //     password: this.state.password,
    //     nickname: "쵸",
    //     name: "치오",
    //     phonenumber: "13579",
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => console.log("결과: ", result));
    this.props.history.push("/main-minjoo");
  };

  handleIdInput = event => {
    this.setState({
      id: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      password: event.target.value,
    });
    console.log(this.state);
  };

  validateButton = () => {
    this.setState(
      this.state.id.includes("@") && this.state.password.length > 4
        ? this.setState({ buttonColor: "#2196f3" })
        : this.setState({ buttonColor: "#c6defa" })
    );
  };

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
              <img
                className="insta-logo"
                src={instalogo}
                alt="instagram logo"
              />
              <input
                onChange={this.handleIdInput}
                onKeyPress={this.validateButton}
                value={this.state.id}
                type="text"
                className="btn"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                onChange={this.handlePwInput}
                onKeyPress={this.validateButton}
                value={this.state.password}
                type="password"
                className="btn"
                placeholder="비밀번호"
              />
              <button
                style={{ backgroundColor: this.state.buttonColor }}
                className="login-btn"
                onClick={this.goToMain}
              >
                로그인
              </button>
              <div className="or">
                <hr className="hr1" />
                <span className="or-">또는</span>
                <hr className="hr2" />
              </div>
              <div className="login-to-facebook">
                <img id="facebooklogo" src={facebook} alt="facebook icon" />
                <Link to="#" className="login-to-fb">
                  Facebook으로 로그인
                </Link>
                <Link to="#" className="forgot-password">
                  비밀번호를 잊으셨나요?
                </Link>
              </div>
            </div>

            {/* <!-- 가입하기 --> */}
            <div className="sign-up">
              <span className="had-account">계정이 없으신가요?</span>
              <Link to="#" className="sign-up-link">
                가입하기
              </Link>
            </div>

            {/* <!-- 앱 다운로드 --> */}
            <div className="download-app">앱을 다운로드하세요.</div>
            <div className="download">
              <button>
                <b>AppStore</b>에서 <br />
                다운로드하기
              </button>
              <button>
                다운로드하기
                <br />
                <b>Google Play</b>
              </button>
            </div>
          </div>
        </main>
        {/* <!-- 푸터 --> */}
        <div className="footer">
          <ul className="footer-menu">
            <li>
              <Link to="">소개</Link>
            </li>
            <li>
              <Link to="">블로그</Link>
            </li>
            <li>
              <Link to="">채용 정보</Link>
            </li>
            <li>
              <Link to="">도움말</Link>
            </li>
            <li>
              <Link to="">LinkPI</Link>
            </li>
            <li>
              <Link to="">개인정보처리방침</Link>
            </li>
            <li>
              <Link to="">약관</Link>
            </li>
            <li>
              <Link to="">인기 계정</Link>
            </li>
            <li>
              <Link to="">해시태그</Link>
            </li>
            <li>
              <Link to="">위치</Link>
            </li>
            <li>
              <Link to="">뷰티</Link>
            </li>
            <li>
              <Link to="">댄스 및 공연</Link>
            </li>
            <li>
              <Link to="">피트니스</Link>
            </li>
            <li>
              <Link to="">식음료</Link>
            </li>
            <li>
              <Link to="">집 및 정원</Link>
            </li>
            <li>
              <Link to="">음악</Link>
            </li>
            <li>
              <Link to="">시각 예술</Link>
            </li>
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
