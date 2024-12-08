import React from "react";
import useCustomHook from "./useCustomHook";
const Question_1 = () => {
  const [theme, toggleTheme] = useCustomHook();

  const styles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#000000",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <>
      <div style={styles}>
        <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
        <button onClick={toggleTheme}>
          Toggle to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </>
  );
};

export default Question_1;
