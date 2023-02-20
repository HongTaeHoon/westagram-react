import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="loginPage">
      <div
        style={{
          fontFamily: "Lobster",
          textAlign: "center",
          fontSize: "45px",
          marginBottom: "80px",
        }}
      >
        westagram
      </div>
      <div className="idBox">
        <input
          type="text"
          id="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          style={{ width: "80%", padding: "10px" }}
        />
      </div>
      <div className="passwordBox">
        <input
          type="password"
          id="password"
          placeholder="비밀번호"
          style={{ width: "80%", padding: "10px" }}
        />
      </div>

      <button className="button" style={{ padding: "10px" }}>
        로그인
      </button>

      <div className="forgetPassword">비밀번호를 잊으셨나요?</div>
    </div>
  );
}

export default Login;
