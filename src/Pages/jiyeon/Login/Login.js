import React from "react";
import { Link } from 'react-router-dom';
import facebook_logo from '../../../images/jiyeon/facebook_icon.png'
import './Login.scss';

class LoginJY extends React.Component {
  constructor(){
    super();
    this.state = {
      idInput: '',
      pwInput: '',
      isBtnActive: false
    };
  }

  handleIdPwInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleBtnActive = () => {
    this.setState({
      isBtnActive: this.state.idInput.indexOf('@') !== -1 && this.state.pwInput.length >= 5 ? true : false
    });
  }

  render() {
    const {idInput, pwInput, isBtnActive} = this.state;

    return (
      <div className="Login">
        <div className="login_container">
          <div className="instagram_logo">westagram</div>
          <form onChange={this.handleBtnActive} className="login_form">
            <input 
              onChange = {this.handleIdPwInput} 
              value={idInput} 
              type="text" 
              className="id_input" 
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="idInput"
            />
            <input 
              onChange = {this.handleIdPwInput} 
              value={pwInput} 
              type="password"  
              className="password_input" 
              placeholder="비밀번호"
              name="pwInput"
            />
            <Link to="/main-jiyeon">
              <button className= {isBtnActive ? "active_btn" : "inactive_btn"}> 로그인 </button>
            </Link>
          </form>
          <div className="underline_content">
            <div className="underline"></div>
            <p className="under_text">또는</p>
            <div className="underline"></div>
          </div>
          <button type="button" className="facebook_login_btn">
            <img src={facebook_logo} alt="Facebook icon"/>
            <span>Facebook으로 로그인</span>
          </button>
          <a className="forget-password" href="/">
            비밀번호를 잊으셨나요?
          </a>
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
export default LoginJY;
