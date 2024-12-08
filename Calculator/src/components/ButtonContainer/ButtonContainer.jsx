import React from "react";
import "./ButtonContainer.css";
import Button from "../Button/Button";
const ButtonContainer = ({ buttonData, onButtonClick }) => {
  return (
    <>
      {buttonData.map((btn, index) => (
        <div id="button-container" key={index} className="button_container">
          <Button btnData={btn} onButtonClick={onButtonClick} />
        </div>
      ))}
    </>
  );
};

export default ButtonContainer;
