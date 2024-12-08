import React, { useState } from "react";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [submitData, setSubmitData] = useState([]);

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && password !== "") {
      e.preventDefault();
      const newData = [...submitData, { name, password }];
      setSubmitData(newData);
      setName("");
      setPassword("");
      closeModal();
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <i className="fa-solid fa-bars fs-4 me-5 mt-2"></i>
          <a className="navbar-brand fs-4" href="#">
            <img
              width={"27px"}
              className="me-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rpkjIjFxUm9QR4uT6FEmrNNg1SraJKKdOQ&s"
              alt=""
            />
            Classroom
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>

          <div className="collapse navbar-collapse" id="navbarScroll ">
            <ul
              className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll "
              style={{ marginRight: "130px" }}
            >
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-dark "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-plus"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Join Class
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={openModal}>
                      Create Class
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {showModal && (
        <div
          className="modal show fade"
          tabIndex="-1"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Class</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="photo" className="form-label">
                      Upload Photo
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="photo"
                      accept="image/*"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="className" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="className"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="classDescription" className="form-label">
                      Password
                    </label>
                    <input
                      className="form-control"
                      id="classDescription"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Password"
                      required
                    ></input>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="row">
        {submitData.map((data, index) => (
          <div
            className="card ms-5 mt-5"
            style={{ width: "17rem" }}
            key={index}
          >
            <>
              <img className="card-img-top" src="" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.password}</p>
              </div>
            </>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
