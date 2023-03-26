import { placeholder } from "@babel/types";
import React, { useState } from "react";
import "./input.scss";

interface InputProps {
  hasButton: boolean;
  type: string | "text";
  placeholder: string;
  required?: boolean;
}

const Input = ({ hasButton, type, placeholder, required }: InputProps) => {
  const [inputType, setInputType] = useState(type);
  const toggleType = () => {
    if (inputType !== "password") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };
  return (
    <div className="input-wrapper">
      <input
        type={inputType}
        placeholder={placeholder}
        className="input-field"
        required={required !== undefined ? required : true}
      />
      <button
        style={{ display: hasButton ? "inline" : "none" }}
        onClick={toggleType}
        type="button"
      >
        {inputType === "text" ? <>HIDE</> : <>SHOW</>}
      </button>
    </div>
  );
};

export default Input;
