import React from "react";
import Logo from "../images/Logo";
import Welcome from "../images/Welcome";
import "./loginLeft.scss";

const LoginLeft = () => {
  return (
    <div className="login-left-wrapper">
      <Logo />
      <Welcome />
    </div>
  );
};

export default LoginLeft;
