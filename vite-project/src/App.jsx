import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessages from "./components/ErrorMessages";
import InputType from "./components/InputType";

function App() {
  const [Items, setItems] = useState([]);

  function handleOnChange(event) {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItem = [...Items, newFoodItem];
      setItems(newItem);
      event.target.value = "";
      console.log("Food enter values is ", newFoodItem);
    }
 
  }

  return (
    <>
      <h1>Food items</h1>
      <InputType handleOnChange={handleOnChange} />
      <FoodItems items={Items} />
      <ErrorMessages items={Items} />
    </>
  );
}
export default App;
