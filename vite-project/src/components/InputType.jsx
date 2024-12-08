import React from "react";
import "./InputType.css";

const InputType = ({ handleOnChange }) => {
  return (
    <>
      <input
        placeholder="Enter the food item"
        type="text"
        onKeyDown={handleOnChange}
      />
    </>
  );
};

export default InputType;
