import React from "react";
import "./Login.scss";

class LoginMinji extends React.Component {
  constructor() {
    super();
    this.state = { email: "", password: "", color: true };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkValidation = () => {
    if (this.state.email.includes("@") && this.state.password.length > 4) {
      fetch("http://10.58.1.95:8000/user/login", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.message === "SUCCESS") {
            // localStorage.setItem("token", result.token);
            this.props.history.push("/main-minji");
            console.log(result.message);
          } else {
            alert("회원가입 해주세요");
            console.log(result.message);
          }
        });
    }
  };
  
  checkInput = (e) => {
    this.setState({
      color:
        this.state.email.includes("@") && this.state.password.length > 4
          ? false
          : true,
    });

    if (e.key === "Enter") {
      this.checkValidation();
    }
  };

  render() {
    return (
      <div className="Login">
        <div className="background">
          <div className="container">
            <span className="westatitle">westagram</span>
            <input
              type="text"
              placeholder="전화번호, 사용자이름 또는 이메일"
              className="idform"
              name="email"
              onChange={this.handleInput}
              onKeyUp={this.checkInput}
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="passwordform"
              name="password"
              onChange={this.handleInput}
              onKeyUp={this.checkInput}
            />
            <button
              type="button"
              id="loginbtn"
              onClick={this.checkValidation}
              className={this.state.color ? "buttonone" : "buttontwo"}
            >
              로그인
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginMinji;
