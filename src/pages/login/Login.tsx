import Navbar from "components/navbar/Navbar";
import React from "react";
import LoginLeft from "../../components/loginLeft/LoginLeft"
import LoginRight from "../../components/loginRight/LoginRight";
import "./login.scss"

const Login = () => {
  return <div>
    <Navbar />
     <div className="login-wrapper">
    
    <LoginLeft />
    <LoginRight />
  </div>;
  </div>
  
};

export default Login;
