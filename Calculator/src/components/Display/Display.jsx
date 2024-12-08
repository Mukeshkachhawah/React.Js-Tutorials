import React from "react";
import "./Display.css";
const Display = ({ displayCalValue }) => {
  return (
    <>
      <input
        type="text"
        className="display"
        value={displayCalValue}
        readOnly
      ></input>
    </>
  );
};
export default Display;
