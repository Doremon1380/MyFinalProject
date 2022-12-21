import React from "react";

/* dùng các thành phần có trong các thư viện hay package nào 
   thì nhớ kiểm ra xem có cần import các thư viện hay package đó không */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; //mất 2 tiếng đồng hồ để nhận ra cần import bootstrap-icons để các icon được nhập vào có thể hiển thị thành công.
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from "react-bootstrap/Dropdown";
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import "./second-nav-bar.css" //custom css for React component 
import MyLogo from "./MyLogo.png";
import AnonymousChef from "./AnonymousChef.png";

function SecondNavBar({signUserOut}) {

    return (
        <Navbar id="nav-bar2">
            <div id="nav-bar-container2">
                <a href="/"><img className="logo2" src={MyLogo} alt="Logo" /></a>
                <div className="search-bar2">
                    <form className="search-form2" action="" name="searchRecipe" id="search-bar-of-second-nav-bar">
                        <input name="search" className="search-input2" type="search" placeholder="Find a recipe" aria-label="Search" />
                        <button className="search-button2" type="submit" form="search-bar-of-second-nav-bar"><i className="bi bi-search search"></i></button>
                    </form>
                </div>
                <div className="features-set">
                    <i className="bi bi-search search-icon"></i>
                    <i className="bi bi-bell-fill bell-icon" title="Notifications"></i>
                    <a href="/favorite-recipes"><i className="favorite-icon" title="My Favorites"><FaHeart /></i></a>
                    <div id="for-account">
                        <button id="avatar"><a href="/about-me"><img alt="avatar" src={AnonymousChef} id="avatar-image"></img></a></button>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="account-name-dropdown-button-in-second-nav-bar">Account Name</Dropdown.Toggle>
                            <Dropdown.Menu id="account-name-dropdown-button-content-in-second-nav-bar">
                                <Dropdown.Item className="drop-down-item2" href="/about-me">My Profile</Dropdown.Item>
                                <Dropdown.Item className="drop-down-item2" href="/follower-accounts">My Friends</Dropdown.Item>
                                <Dropdown.Item className="drop-down-item2" href="/shopping-lists">My Shopping List</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className="drop-down-item2" href="/" type="submit" onClick={() => {signUserOut()}}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="account-dropdown-button-in-second-nav-bar"><i className="down-icon"><FaChevronDown /></i></Dropdown.Toggle>
                            <Dropdown.Menu id="account-dropdown-button-content-in-second-nav-bar">
                                <Dropdown.Item className="drop-down-item2" href="/about-me">My Profile</Dropdown.Item>
                                <Dropdown.Item className="drop-down-item2" href="/follower-accounts">My Friends</Dropdown.Item>
                                <Dropdown.Item className="drop-down-item2" href="/shopping-lists">My Shopping List</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className="drop-down-item2" href="/" type="submit" onClick={() => {signUserOut()}}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="menu-dropdown-button-in-second-nav-bar"><i className="menu-icon2"><FaBars /></i></Dropdown.Toggle>
                        <Dropdown.Menu id="menu-dropdown-button-content-in-second-nav-bar">
                            <Dropdown.Item className="drop-down-item2" href="/">FoodShare</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="drop-down-item2" href="/world-cuisine">World Cuisine</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="drop-down-item2" href="/filter-recipes">Filter Recipes</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="drop-down-item2" href="/types-of-recipes">Types of Recipes</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="drop-down-item2" href="/ask-the-community">Ask the Community</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </Navbar >
    );
};

export default SecondNavBar;