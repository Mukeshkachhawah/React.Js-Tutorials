import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import ChildComponent from "./ChildComponent";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const featchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const json = await res.json();
      setData(json);
    };
    featchData();
  }, []);

  return (
    <>
      <h2>App js components</h2>
      <MyContext.Provider value={data}>
        <ChildComponent />
      </MyContext.Provider>
    </>
  );
};

export default App;
