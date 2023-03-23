import React from "react";
import "./button.scss"

interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset" | undefined
}

const Button = ({ text, type }: ButtonProps) => {
  return <button type={type} className="button-wrapper">{text}</button>;
};

export default Button;
