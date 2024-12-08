import React, { useEffect, useState } from "react";

const NewSingleCart = () => {
  const [apiData, setApiData] = useState([]);
  const apiFetch = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const { products } = response.json();
    setApiData(products);
    console.log(products);
  };
  useEffect(function () {
    apiFetch();
  }, []);

  return (
    <>
      {!apiData.length ? (
        <p>Loading...</p>
      ) : (
        apiData.map(({ id, thumbnail, title, description }) => (
          <div className="card" style={{ width: "18rem" }} key={id}>
            <img src={thumbnail} className="card-img-top" alt={title} />
            <div className="card-body">
              <b>{title}</b>
              <p className="card-text">{description}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default NewSingleCart;
