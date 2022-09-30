import React from "react";

/* dùng các thành phần có trong các thư viện hay package nào 
   thì nhớ kiểm ra xem có cần import các thư viện hay package đó không */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; //mất 2 tiếng đồng hồ để nhận ra cần import bootstrap-icons để các icon được nhập vào có thể hiển thị thành công.
import Navbar from 'react-bootstrap/Navbar';
import { FaBars } from "react-icons/fa";

import "./nav-bar.css" //custom css for React component 
import { useState, useRef, useEffect } from "react";
import MyLogo from "./MyLogo.png";

function NavBar() {
  const [isDropDownButtonOpen, setIsDropDownButtonOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isDropDownButtonOpen && ref.current && !ref.current.contains(e.target)) {
        setIsDropDownButtonOpen(false)
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside)
    }
  }, [isDropDownButtonOpen])

  return (
    <Navbar id="nav-bar">
      <div id="nav-bar-container">
        <a href="/"><img className="logo" src={MyLogo} alt="Logo" /></a>
        <div className="search-bar">
          <form className="search-form" id="search-form-of-nav-bar" name="searchRecipe">
            <input name="inputRecipe" className="search-input" type="search" placeholder="Find a recipe" aria-label="Search" />
            <button className="search-button" type="submit" form="search-form-of-nav-bar"><i className="bi bi-search"></i></button>
          </form>
        </div>
        <button className="sign-in-button"><a href="/signin">Sign in</a></button>
        <div id="dropdown-button-in-nav-bar" ref={ref}>
          <FaBars id="menu-icon-of-dropdown-button-in-nav-bar" onClick={() => setIsDropDownButtonOpen(!isDropDownButtonOpen)} />
          {isDropDownButtonOpen && (
            <div id="dropdown-button-content-in-nav-bar">
              <a className="dropdown-item-of-dropdown-button-in-nav-bar" href="/">FoodShare</a>
              <a className="dropdown-item-of-dropdown-button-in-nav-bar" href="/world-cuisine">World Cuisine</a>
              <a className="dropdown-item-of-dropdown-button-in-nav-bar" href="/filter-recipes">Filter Recipes</a>
              <a className="dropdown-item-of-dropdown-button-in-nav-bar" href="/types-of-recipes">Types of Recipes</a>
              <a className="dropdown-item-of-dropdown-button-in-nav-bar" id="last-item-of-dropdown-button-in-nav-bar" href="/ask-the-community">Ask the Community</a>
            </div>
          )}
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;