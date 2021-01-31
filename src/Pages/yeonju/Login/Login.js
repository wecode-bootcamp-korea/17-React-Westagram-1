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
  //constructor - > class생성할때 변수를 쓰기위해 state 초기값만 설정하고 함수는 나와서
  //state는 무조건 초기값을 설정을 해줘야하기 ㄸ문에
  //event객체는 tag에서 발생한 변화를 감지해서 변경된 객체가 넘어온다
  //state --> setstate

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
              <button className="loginBtn" onClick={this.goToMain}>
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
