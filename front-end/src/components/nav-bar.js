import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyLogo from "./MyLogo.png";
import OptionIcon from "./OptionIcon.jpg";

function NavBar() {
  return (
    <nav className="nav">
      <div className="container">
        <img src={MyLogo} alt="Logo"></img>
        <img src={OptionIcon} alt="Option"></img>
      </div>
    </nav>
  );
}

export default NavBar;