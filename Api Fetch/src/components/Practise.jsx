import React, { useEffect, useState } from "react";
import "../App.css";
const Practise = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const { products } = await response.json();
      setApiData(products);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <input
          className="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
        />
        {!apiData.length?(<p>Loading</p>):
            apiData.map(({ id, thumbnail, title, description }) => (
          <div className="card" style={{ width: "18rem" }} key={id}>
            <img src={thumbnail} className="card-img-top" alt={title} />
            <div className="card-body">
              <b>{title}</b>
              <p className="card-text">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Practise;
