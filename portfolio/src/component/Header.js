import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{
          backgroundColor: "red",
          minHeightheight: "75px",
          position: "sticky",
          top: "0",
          zIndex: 10,
        }}
      >
        <Container>
          <div>
            <NavLink
              style={{ fontSize: "25px", fontWeight: 500, color: "#6c63ff" }}
              className="navbar-brand"
              to="/"
            >
              Mukesh
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  HOME
                </NavLink>
              </li>
              {/* <li className="nav-item">
                                <NavLink to="/about" className="nav-link active" aria-disabled="true">ABOUT</NavLink>
                            </li> */}
              <li className="nav-item">
                <NavLink className="nav-link active" to="/skills">
                  SKILLS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/projects">
                  PROJECTS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link active"
                  aria-disabled="true"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <Button variant="primary">RESUME</Button>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}
