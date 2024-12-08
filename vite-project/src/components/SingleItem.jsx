const SingleItem = function ({ item, clickFxn }) {
  return (
    <>
      <li key={item} className="list-group-item bg-dark text-white active">
        {item} -{" "}
        <button className="btn" onClick={clickFxn}>
          Buy
        </button>
      </li>
    </>
  );
};

export default SingleItem;
