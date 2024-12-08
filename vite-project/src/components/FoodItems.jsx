import SingleItem from "./SingleItem";

const FoodItems = function ({ items }) {
  function functionForClick() {
    console.log("funtion click cal");
  }
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <SingleItem key={item} item={item} clickFxn={functionForClick} />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
