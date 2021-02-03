import React from "react";
import { withRouter } from 'react-router-dom';
import facebook_logo from "../../../images/jiyeon/facebook_icon.png";
import "./Login.scss";

class LoginJY extends React.Component {
  constructor() {
    super();
    this.state = {
      idInput: "",
      pwInput: "",
      isBtnActive: false,
    };
  }

  handleIdPwInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    if (event.key === "Enter"){
      this.goToMain()
    }
  };

  handleBtnActive = () => {
    const { idInput, pwInput } = this.state;

    const btnCondition = idInput.includes("@") && pwInput.length >= 5;
    this.setState({
      isBtnActive: btnCondition,
    });
  };

  goToMain = (event) => {
    event.preventDefault();
    const { idInput, pwInput } = this.state;
    const btnCondition = idInput.includes("@") && pwInput.length >= 5;

    if (btnCondition) {
      fetch("http://10.58.2.122:8000/user", {
        method: "POST",
        body: JSON.stringify({
          email: idInput,
          password: pwInput,
          name: "asdfg",
          phone_number: "019-8888-1234",
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.meassage === "SUCCESS") {
            alert("성공");
            localStorage.setItem("token", result.token);
            this.props.history.push("/main-jiyeon");
          } else {
            alert("회원가입이 필요합니다.");
          }
        });
    }
  };

  render() {
    const { idInput, pwInput, isBtnActive } = this.state;

    return (
      <div className="Login">
        <div className="login_container">
          <div className="instagram_logo">westagram</div>
          <form onChange={this.handleBtnActive} className="login_form">
            <input
              onChange={this.handleIdPwInput}
              value={idInput}
              type="text"
              className="id_input"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="idInput"
            />
            <input
              onChange={this.handleIdPwInput}
              value={pwInput}
              type="password"
              className="password_input"
              placeholder="비밀번호"
              name="pwInput"
            />
            <button
              onClick={this.goToMain}
              className={isBtnActive ? "active_btn" : "inactive_btn"}
            >
              로그인
            </button>
          </form>
          <div className="underline_content">
            <div className="underline"></div>
            <p className="under_text">또는</p>
            <div className="underline"></div>
          </div>
          <button type="button" className="facebook_login_btn">
            <img alt="Facebook logo" src={facebook_logo}/>
            <span>Facebook으로 로그인</span>
          </button>
          <span className="forget-password" href="/">
            비밀번호를 잊으셨나요?
          </span>
        </div>
        <div className="create_accout_container">
          <div>
            계정이 없으신가요？<span>가입하기</span>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(LoginJY);
