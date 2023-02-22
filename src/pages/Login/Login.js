import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigte = useNavigate();

  const goToMain = () => {
    navigte('/Main');
  };
  return (
    <div className="login">
      <div className="loginPage">
        <div className="westagramBox">westagram</div>
        <div className="idBox">
          <input
            type="text"
            id="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
        </div>
        <div className="passwordBox">
          <input type="password" id="password" placeholder="비밀번호" />
        </div>

        <button className="button" value="value" onClick={goToMain}>
          로그인
        </button>

        <div className="forgetPassword">비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
};

export default Login;
