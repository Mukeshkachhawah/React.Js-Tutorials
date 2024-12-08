import React, { useContext } from "react";
import MyContext from "./MyContext";

const ChildComponent = () => {
  const data = useContext(MyContext);

  return (
    <>
      <h2>ye child component hai</h2>
      {data.map(({ id, title, description, image }) => (
        <div className="card" key={id}>
          <img
            className="card-img-top"
            src={image}
            alt={title}
            height={"100px"}
            width={"300px"}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChildComponent;
