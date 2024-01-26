import React from "react";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="header-top">
        <div className="to-center">
          <div className="logo-yellow">
            <div className="logo-content">LOGO</div>
          </div>
          <div className="options-route">
            <div className="option-route-value">About us</div>
            <div className="option-route-value">Explore</div>
            <div className="option-route-value">Contact us</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
