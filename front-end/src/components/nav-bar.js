import React from "react";

/* dùng các thành phần có trong các thư viện hay package nào 
   thì nhớ kiểm ra xem có cần import các thư viện hay package đó không */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; //mất 2 tiếng đồng hồ để nhận ra cần import bootstrap-icons để các icon được nhập vào có thể hiển thị thành công.
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaBars } from "react-icons/fa";

import "./nav-bar.css" //custom css for React component 
import MyLogo from "./MyLogo.png";

function NavBar() {
  return (
    <Navbar id="nav-bar">
      <Container id="nav-bar-container">
        <a href="/foodshare.com"><img className="logo" src={MyLogo} alt="Logo" /></a>
        <div className="search-bar">
          <form className="search-form">
            <input name="search recipe" className="search-input" type="search" placeholder="Find a recipe" aria-label="Search" />
            <button className="search-button" type="submit"><i className="bi bi-search"></i></button>
          </form>
        </div>
        <button className="sign-in-button"><a href="/signin">Sign in</a></button>
        <DropdownButton id="dropdown-basic-button" variant="" title={<i className="menu-icon"><FaBars /></i>}>
          <Dropdown.Item className="drop-down-item" href="/foodshare.com">FoodShare</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="drop-down-item" href="#/">World Cuisine</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="drop-down-item" href="#/">Filter Recipes</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="drop-down-item" href="#/">Type of Recipes</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item className="drop-down-item" href="#/">Ask the Community</Dropdown.Item>
        </DropdownButton>
      </Container>
    </Navbar>
  );
};

export default NavBar;