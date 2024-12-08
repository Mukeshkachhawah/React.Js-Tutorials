import React from "react";
import "./Button.css";

const Button = ({ btnData, onButtonClick }) => {
  return (
    <>
      <button className="button" value={btnData} onClick={onButtonClick}>
        {btnData}
      </button>
    </>
  );
};

export default Button;
