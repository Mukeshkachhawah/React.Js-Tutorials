import React, { useEffect, useState } from "react";
import "../App.css";
const SingleCard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  async function apiFetch() {
    const API = await fetch("https://dummyjson.com/products");
    const JSON_DATA = await API.json();
    setData(JSON_DATA.products);
    console.log(JSON_DATA.products);
  }
  const filtered = data.filter((data) => {
    return data.title.toLowerCase().includes(search.toLowerCase());
  });
  useEffect(() => {
    apiFetch();
  }, []);

  return (
    <>
      <div className="container">
        <input
          className="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
          onInput={(event) => setSearch(event.target.value)}
        />

        {filtered.map((item) => (
          <div className="card" style={{ width: "18rem" }}>
            <img src={item.thumbnail} className="card-img-top" />
            <div className="card-body">
              <b>{item.title}</b>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleCard;
