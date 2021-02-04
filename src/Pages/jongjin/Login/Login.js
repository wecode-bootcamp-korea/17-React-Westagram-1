import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class login extends React.Component {

  state = {
    id: "",
    password: "",
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  goToMain = () => {
    this.props.history.push('/main-jongjin');
  }

  loginValid = () => {
    if(  this.state.id.length > 5 
      && this.state.id.includes("@")
      && this.state.password.length > 5) {
        fetch("http://10.58.1.122:8000/account/login", {
          method: "POST",
          body: JSON.stringify({
            email: this.state.id,
            password: this.state.password
          }),
        })
        .then((response) => response.json())
        .then((res => this.checkJoinResult(res)))
        .then((res) =>  this.checkResult(res))
      }
      else {
        alert("다시 시도해주세요")
      }
    }

  checkJoinResult = (res) => {
    if(res.message === "duplicate") {
      alert("우리 회원입니다. 로그인 해주세요");
    } else {
      alert("다시 시도해주세요")
    }
  }

  checkResult = (res) => {
    if(res.message === "SUCCESS") {
      localStorage.setItem("token", res.token)
      this.goToMain();
    } else {
      alert("우리 회원이 아닙니다.")
    }
  } 

  render() {
    return (
      <>
        <section id="login">
          <div className="loginBox">
            <div className="title">
                <h1>westargram</h1>
            </div>
            <div className="loginForm">
              <input type="text" name="id" onChange={this.handleInputChange} className="userID" placeholder="전화번호, 사용자 이름 또는 이메일"/>
              <input type="password" name="password" onChange={this.handleInputChange} className="userPW" placeholder="비밀번호"/>
            <div className="loginBtn">
              <button
                type="submit"
                style= {{backgroundColor: this.state.id.length > 5 
                && this.state.id.includes("@")
                && this.state.password.length > 5
                ? "#0095F6" : ""
                }} 
                onClick={this.goToMain}>
                  로그인
              </button>
            </div>
            <div className="divider"><span>또는</span></div>
              <button className="otherLogin"><i className="fab fa-facebook-square"></i><span>Facebook으로 로그인</span></button>
            <div><a href="#">비밀번호를 잊으셨나요?</a></div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(login);