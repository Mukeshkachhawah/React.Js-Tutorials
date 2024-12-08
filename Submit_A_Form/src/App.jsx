import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [submitData, setSubmitData] = useState([]);

  function onSubmitEvent(e) {
    if (name !== "" && password !== "") {
      e.preventDefault();
      const newData = [...submitData, { name, password }];
      setSubmitData(newData);
      setName("");
      setPassword("");
    }
  }
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Open modal
      </button>
      <div className="container mt-3 text-center">
        <div className="container mt-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              {submitData.length !== 0 ? (
                submitData.map((submitDatas, index) => (
                  <tr key={index + 1}>
                    <th scope="row">{index + 1}</th>
                    <td>{submitDatas.name}</td>
                    <td>{submitDatas.password}</td>
                  </tr>
                ))
              ) : (
                <h1>No data</h1>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={onSubmitEvent}>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupFile01"
                    >
                      Upload
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile01"
                    />
                  </div>

                  <input
                    type="text"
                    value={name}
                    className="form-control  mb-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    value={password}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
