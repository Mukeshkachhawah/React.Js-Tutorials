import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/Display/Display";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";
import { useState } from "react";

const App = () => {
  const data = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const [calValue, setcalValue] = useState("");

  const onClickButton = (event) => {
    const buttonValue = event.target.value;
    console.log(buttonValue);

    if (buttonValue === "C") {
      setcalValue("");
    } else if (buttonValue === "=") {
      try {
        setcalValue(eval(calValue));
      } catch {
        setcalValue("Error");
      }
    } else {
      setcalValue(calValue + buttonValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayCalValue={calValue} />
      <ButtonContainer buttonData={data} onButtonClick={onClickButton} />
    </div>
  );
};

export default App;
