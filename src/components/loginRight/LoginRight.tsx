import React, { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import "./loginRight.scss"

const LoginRight = () => {
  return (
    <div className="login-right-wrapper">
      <div className="login-heading">
        <h3 className="welcome">Welcome!</h3>
        <p className="instruction">Enter details to login.</p>
      </div>
      <form action="">
        <Input hasButton={false} type="email" placeholder="Email" />
        <Input hasButton={true} type="password" placeholder="Password" />
        <p className="forgot-password">FORGOT PASSWORD?</p>
        <Button text="LOG IN" type="submit" />
      </form>
    </div>
  );
};

export default LoginRight;
