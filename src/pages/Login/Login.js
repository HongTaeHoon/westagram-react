import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="page">
      <div className="loginPage">
        <div className="westagramBox">westagram</div>
        <div className="idBox">
          <input
            type="text"
            id="idBox"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
        </div>
        <div className="passwordBox">
          <input type="password" id="passwordBox" placeholder="비밀번호" />
        </div>

        <button className="button" value="value">
          로그인
        </button>

        <div className="forgetPassword">비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
};

export default Login;
