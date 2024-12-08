import React, { useState } from "react";

function useThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((previousTheme) => (previousTheme === "light" ? "dark" : "light"));
  };
  return [theme, toggleTheme];
}

export default useThemeToggle;
