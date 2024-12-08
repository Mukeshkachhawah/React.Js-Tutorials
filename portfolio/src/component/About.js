import React from "react";
import "./About.css";
import Image from "react-bootstrap/Image";
export default function About() {
  return (
    <>
      <div
        className="container mb3 about_container"
        style={{ minHeight: "100%" }}
      >
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_contaoiner mt-5" style={{ width: 500 }}>
            <h2 className="">Meet Mukesh Sharma</h2>
            <p
              style={{
                color: "#666",
                letterSpacing: ".5px",
                marginTop: 2,
                lineHeight: 2,
                textAlign: "justify",
              }}
            >
              My name is Mukesh kachhawah.i am graduated with a B.voc. from
              Bhartiya skill developement university. I am passinate about web
              developement and have acquired hand-on experience through my
              internship and made some projects as mentioned in resume. My
              technical skills include proficiency in MERN stack
            </p>
          </div>
          <div className="right_container mt-3"></div>
        </div>
      </div>
    </>
  );
}
