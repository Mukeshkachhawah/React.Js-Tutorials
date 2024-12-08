import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import projectData from "./data";
export default function Projects() {
  const [spin, setspin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setspin(false);
    }, 1500);
  }, []);
  return (
    <>
      {spin ? (
        <div
          className="d-flex justify-content-center align-items-center mt-4"
          style={{ height: "90vh" }}
        >
          <Spinner animation="border" variant="danger" />
          &nbsp;&nbsp;Loading....
        </div>
      ) : (
        <div div className="container">
          <h2 className="text-center mt-2">Projects</h2>
          <div className="card_div">
            <div className="row d-flex justify-content-around align-items-center">
              {projectData.map((ele, index) => {
                return (
                  <>
                    <Card
                      key={index}
                      style={{ width: "20rem", height: "18rem" }}
                      className="mt-4 mb-4"
                    >
                      <Card.Img
                        style={{ width: "20rem", marginLeft: -13 }}
                        variant="top"
                        src={ele.imgsrc}
                      />
                      <Card.Body className="d-flex justify-content-center flex-column">
                        <Card.Title className="text-center">
                          {ele.projectName}
                        </Card.Title>
                        <Button variant="primary">
                          <a
                            href="#"
                            target="_blank"
                            className="text-decoration-none text-light"
                          >
                            Live Demo
                          </a>
                        </Button>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
