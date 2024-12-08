import React from "react";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container footer_container d-flex justify-content-around flex-wrap">
        <div className="first mt-5">
          <h4>Mukesh kachhawah</h4>
          <p>@ {year} Mukesh Kachhawah All right reserved</p>
          <p className="d-flex">
            <a
              target="_blank"
              href="https://www.instagram.com/ashu_pradhan_20?igsh=MW1lZG82dm52eWRpcw=="
              className="ri-instagram-line text-decoration-none text-white"
            ></a>
            <a
              target="_blank"
              href="https://github.com/Ashish20sharma"
              className="ri-github-line text-decoration-none text-white mx-2"
            ></a>
          </p>
        </div>
        <div className="second mt-5">
          <h4>Get in Touch</h4>
          <p>Hellow,I am Mukesh Kachhawah</p>
          <p>Mukeshkachhawa1947@gmail.com</p>
          <p>7727879503</p>
        </div>
        <div className="third mt-5">
          <h4>About</h4>
          <p>Resume</p>
        </div>
      </div>
    </div>
  );
}
