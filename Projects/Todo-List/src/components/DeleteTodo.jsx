function DeleteTodo() {
  let todoName = "Buy Milk";
  let todoDate = "4/10/23";

  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-3">
          <h4>{todoName}</h4>
        </div>
        <div class="col-2">
          <h4>{todoDate}</h4>
        </div>
        <div class="col-3">
          <button type="button" class="btn kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeleteTodo;
