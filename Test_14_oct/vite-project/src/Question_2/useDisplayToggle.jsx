import { useState } from "react";

function useDisplayToggle(initialView = "list") {
  const [displayMode, setDisplayMode] = useState(initialView);

  const toggleDisplayMode = () => {
    setDisplayMode((preState) => (preState === "list" ? "grid" : "list"));
  };
  return [displayMode, toggleDisplayMode];
}

export default useDisplayToggle;
