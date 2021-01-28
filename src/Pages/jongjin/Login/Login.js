import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class login extends React.Component {

  state = {
    id: "",
    password: "",
  }

  handleidInput = (e) => {
    this.setState({
      id: e.target.value
    })
  }

  handlepwdInput = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  goToMain = () => {
    this.props.history.push('/main-jongjin');
  }

  render() {
    return (
      <div>
          <section id="login">
            <form className="loginBox">
              <div className="title">
                  <h1>westargram</h1>
              </div>
              <div className="loginForm">
                  <input type="text" onChange={this.handleidInput} className="userID" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                  <input type="password" onChange={this.handlepwdInput} className="userPW" placeholder="비밀번호"/>
                  <div className="loginBtn">
                      <button
                        style= {{backgroundColor: this.state.id.length > 5 
                          && this.state.id.includes("@")
                          && this.state.password.length > 5
                      ? "#0095F6" : ""
                      }}
                        className="loginBtn"
                        onClick={this.goToMain}>
                        로그인
                      </button>
                  </div>
                  <div className="divider"><span>또는</span></div>
                  <button className="otherLogin"><i className="fab fa-facebook-square"></i><span>Facebook으로 로그인</span></button>
              <div><a href="#">비밀번호를 잊으셨나요?</a></div>
              </div>
            </form>
          </section>
      </div>
    );
  }
}

export default withRouter(login);