import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div id="main">
        <div id="center">
          <div className="imageContainer" id="one">
            <img
              className="image"
              src="https://images.unsplash.com/photo-1677035482842-b40d79777b66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjByZW5kZXIlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div className="imageContainer">
            <img
              src="https://plus.unsplash.com/premium_photo-1709657370188-631981874341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8M2QlMjByZW5kZXIlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div className="imageContainer">
            <img
              src="https://plus.unsplash.com/premium_photo-1711727005572-5b87994e8a6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fDNkJTIwcmVuZGVyJTIwZmxvd2VyfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
