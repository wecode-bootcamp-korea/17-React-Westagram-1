import React from "react";
import "./Login.scss";

import { withRouter } from "react-router-dom";

class LoginYj extends React.Component {
  constructor() {
    super();
    this.state = { id: "", pw: "" };
  }
  goToMain = () => {
    this.props.history.push("/main-yeonju");
  };

  handleidInput = (event) => {
    this.setState({
      id: event.target.value,
    });
  };

  handlepwInput = (event) => {
    this.setState({
      pw: event.target.value,
    });
  };

  changeHandlerBgColor = () => {
    return this.state.id.includes("@") && this.state.pw.length >= 5
      ? "blue"
      : "";
  };

  render() {
    return (
      <div className="Login">
        <div className="mainContainer">
          <div className="mainSub">
            <div className="westagramTitle">westagram</div>
            <div className="westagramInput">
              <input
                className="inputId"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.handleidInput}
              />
              <input
                className="inputPw"
                type="password"
                placeholder="비밀번호"
                onChange={this.handlepwInput}
              />
            </div>

            <div className="login">
              <button
                className={this.changeHandlerBgColor()}
                onClick={this.goToMain}
              >
                로그인
              </button>
            </div>
            <p className="forget"> 비밀번호를 잊으셨나요? </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginYj);

//input값을 넣엇을때 input값 저장하기
//버튼 눌럴ㅆ을때 input값을 dv안으로
///concat or spread /빈배열을 만들고 코멘트를 스트링으로 바꾸고
