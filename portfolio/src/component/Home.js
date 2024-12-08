import React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export default function Home() {
  return (
    <>
      <div
        className="container home_container"
        style={{ padding: "0px 20px", minHeight: "93vh" }}
      >
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>
              Hi, I m <span style={{ color: "#6c63ff" }}>Mukesh kachhawah</span>
            </h2>
            <p
              style={{
                color: "#666",
                letterSpacing: ".5px",
                marginTop: 2,
                textAlign: "justify",
              }}
            >
              An enthusiastic Full Stack Web Developer with a strong set of
              technical as well as non-technical skills and a dedication towards
              creating useful and interactive web applications.
            </p>
            <div className="btn_div mt-4">
              <Button
                style={{
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: 4,
                  backgroundColor: "#2f2d69",
                  marginRight: 24,
                }}
                variant="primary"
              >
                Download Resume <i class="ri-download-2-fill"></i>
              </Button>
            </div>
          </div>
          <div className="right_div">
            <Image
              src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg"
              alt="img"
              roundedCircle
            />
          </div>
        </div>
      </div>
    </>
  );
}
