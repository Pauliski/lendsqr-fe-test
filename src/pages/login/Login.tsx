import React from "react";
import LoginLeft from "../../components/loginLeft/LoginLeft"
import LoginRight from "../../components/loginRight/LoginRight";
import "./login.scss"

const Login = () => {
  return <div className="login-wrapper">
    <LoginLeft />
    <LoginRight />
  </div>;
};

export default Login;
