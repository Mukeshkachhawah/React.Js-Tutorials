import "./AddTodo.css";
function AddTodo() {
  return (
    <>
      <div class="container">
        <div class="row kg-row">
          <div class="col-3 ">
            <input
              className="input"
              type="text"
              placeholder="Wha you want to add"
            ></input>
          </div>
          <div class="col-2 bg-blue">
            <input type="date"></input>
          </div>
          <div class="col-3">
            <button type="button" class="btn btn-success kg-button">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
