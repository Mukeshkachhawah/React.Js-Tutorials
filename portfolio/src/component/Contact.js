import React, { useState } from "react";
import "./contact.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
export default function Contact() {
  const [input, setinput] = useState([]);
  const handleDetails = () => {
    try {
      axios
        .post("http://127.0.0.1:5000/user/register", input)
        .then((res, err) => {
          if (res.status === 200) {
            toast("Details send successfully!");
          } else {
            toast("Invalid details!");
          }
        });
    } catch {
      toast.error("Invalid Details!");
    }
  };

  return (
    <>
      <div className="container mb-3  contact">
        <h2 className="text-center py-3">ContactUs</h2>
        <div div className="container">
          <div className="card_div">
            <div className="row d-flex justify-content-around align-items-center">
              <Card
                style={{ width: "18rem", height: "15rem" }}
                className="mt-4 mb-4  d-flex justify-content-center align-items-center flex-column"
              >
                <Card.Img
                  style={{ width: "8rem", height: "7rem", marginLeft: -13 }}
                  variant="top"
                  src="./ImagesContact/linkedin-icon.png"
                />
                <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                  <Card.Title className="text-center">LinkedIn</Card.Title>
                  <p>You can contact me on LinkedIn.</p>
                  <a
                    target="_blank"
                    className="text-decoration-none"
                    href="https://www.linkedin.com/in/ashish-sharma-583199181"
                  >
                    Mukesh kachhawah
                  </a>
                </Card.Body>
              </Card>
              <Card
                style={{ width: "18rem", height: "15rem" }}
                className="mt-4 mb-4  d-flex justify-content-center align-items-center flex-column"
              >
                <Card.Img
                  style={{ width: "8rem", height: "6rem", marginLeft: -13 }}
                  variant="top"
                  src="./ImagesContact/github-icon.png"
                />
                <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                  <Card.Title className="text-center">GitHub</Card.Title>
                  <p>You can Check me on GitHub.</p>
                  <a
                    target="_blank"
                    className="text-decoration-none"
                    href="https://github.com/Ashish20sharma"
                  >
                    Mukeshkachhawh
                  </a>
                </Card.Body>
              </Card>
              <Card
                style={{ width: "18rem", height: "15rem" }}
                className="mt-4 mb-4  d-flex justify-content-center align-items-center flex-column"
              >
                <Card.Img
                  style={{ width: "8rem", height: "7rem", marginLeft: -13 }}
                  variant="top"
                  src="./ImagesContact/email-icon.png"
                />
                <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                  <Card.Title className="text-center">Email</Card.Title>
                  <p>You can mail me.</p>
                  <a
                    target="_blank"
                    className="text-decoration-none"
                    href="mailto:mukeshkachhawah1947@g"
                  >
                    mukeshkachhawah1947@gmail.com
                  </a>
                </Card.Body>
              </Card>
              <Card
                style={{ width: "18rem", height: "15rem" }}
                className="mt-4 mb-4  d-flex justify-content-center align-items-center flex-column"
              >
                <Card.Img
                  style={{ width: "8rem", height: "6rem", marginLeft: -13 }}
                  variant="top"
                  src="./ImagesContact/phone-icon.png"
                />
                <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                  <Card.Title className="text-center">Phone</Card.Title>
                  <p>My Phone Number.</p>
                  <a className="text-decoration-none" href="tel:8905825782">
                    7727879503
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="container mt-2 ">
          <Form onSubmit={(e) => e.preventDefault()} className="row mt-2">
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Nmae</Form.Label>
              <Form.Control
                onInput={(e) => setinput({ ...input, fname: e.target.value })}
                type="text"
                name="fnmae"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                onInput={(e) => setinput({ ...input, lname: e.target.value })}
                type="text"
                name="lname"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onInput={(e) => setinput({ ...input, email: e.target.value })}
                type="email"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                onInput={(e) => setinput({ ...input, mobile: e.target.value })}
                type="text"
                name="mobile"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                onInput={(e) =>
                  setinput({ ...input, messages: e.target.value })
                }
                as="textarea"
                rows={6}
                name="messages"
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button
                onClick={() => handleDetails()}
                className="col-lg-6"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
