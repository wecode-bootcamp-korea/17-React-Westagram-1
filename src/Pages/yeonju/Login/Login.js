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

  helper = () => {
    if (this.state.id.includes("@") && this.state.pw.length > 5) {
      fetch("", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.id,
          password: this.state.pw,
        }),
      }).then((response) => response.json());
      // }).then((res) => response.json());
      // .then((res) => this.joinCheck(res));
      // .then((res) => this.loginCheck(res));
    } else {
      // alert("너 회원가입 실패함ㅋ")
    }
  };

  joinCheck = (res) => {
    if (res.message === "SUCCESS") {
      alert("zz추카");
    } else {
      alert("zzㅈㅅ");
    }
  };
  loginCheck = (res) => {
    if (res.message === "SUCCESS") {
      localStorage.getItem("token", res.access_token);
      this.goToMain();
    } else {
      alert("로그인 실패 ㅋ");
    }
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
                onClick={this.helper}
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
