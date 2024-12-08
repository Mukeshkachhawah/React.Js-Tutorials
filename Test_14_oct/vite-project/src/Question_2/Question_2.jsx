import React from "react";
import useDisplayToggle from "./useDisplayToggle";

const Question_2 = () => {
  const [displayMode, toggleDisplayMode] = useDisplayToggle();

  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  const listStyle = {
    display: "block",
    marginBottom: "10px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px",
  };
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>{displayMode === "list" ? "List View" : "Grid View"}</h1>

        <button onClick={toggleDisplayMode}>
          Toggle to {displayMode === "list" ? "Grid" : "List"} View
        </button>

        {/* Displaying the items based on the display mode */}
        <div style={displayMode === "list" ? listStyle : gridStyle}>
          {items.map((item, index) => (
            <div
              key={index}
              style={
                displayMode === "list"
                  ? {}
                  : { border: "1px solid black", padding: "10px" }
              }
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Question_2;
