import React from "react";

/* dùng các thành phần có trong các thư viện hay package nào 
   thì nhớ kiểm ra xem có cần import các thư viện hay package đó không */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; //mất 2 tiếng đồng hồ để nhận ra cần import bootstrap-icons để các icon được nhập vào có thể hiển thị thành công.
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import "./second-nav-bar.css" //custom css for React component 
import MyLogo from "./MyLogo.png";

function SecondNavBar() {
    return (
        <Navbar id="nav-bar2">
            <div id="nav-bar-container2">
                <a href="/foodshare.com"><img className="logo2" src={MyLogo} alt="Logo" /></a>
                <div className="search-bar2">
                    <form className="search-form2"> 
                        <input name="search" className="search-input2" type="search" placeholder="Find a recipe" aria-label="Search" />
                        <button className="search-button2" type="submit"><i className="bi bi-search search"></i></button>
                    </form>
                </div>
                <div className="features-set">
                    <i className="bi bi-search search-icon"></i>
                    <i className="bi bi-bell-fill bell-icon"></i>
                    <a href="#"><i className="favorite-icon"><FaHeart /></i></a>
                    <div id="for-account">
                        <button id="avatar"><a href="/about-me"><img alt="avatar" id="avatar-image"></img></a></button>
                        <DropdownButton id="accountName" variant="" title="Account Name">
                            <Dropdown.Item className="drop-down-item2" href="/about-me">My Profile</Dropdown.Item>
                            <Dropdown.Item className="drop-down-item2" href="/follower-accounts">My Friends</Dropdown.Item>
                            <Dropdown.Item className="drop-down-item2" href="#/">My Shopping List</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="drop-down-item2" href="/foodshare.com">Logout</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button-account" variant="" title={<i className="down-icon"><FaChevronDown /></i>}>
                            <Dropdown.Item className="drop-down-item2" href="/about-me">My Profile</Dropdown.Item>
                            <Dropdown.Item className="drop-down-item2" href="/follower-accounts">My Friends</Dropdown.Item>
                            <Dropdown.Item className="drop-down-item2" href="#/">My Shopping List</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="drop-down-item2" href="/foodshare.com">Logout</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <DropdownButton id="dropdown-basic-button-menu" variant="" title={<i className="menu-icon2"><FaBars /></i>}>
                        {/* Tìm cách hiển thị những dropdown.item nhỏ hơn bên trong những dropdown.item này */}
                        <Dropdown.Item className="drop-down-item2" href="/foodshare.com">FoodShare</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="drop-down-item2" href="#/">World Cuisine</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="drop-down-item2" href="#/">Filter Recipes</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="drop-down-item2" href="#/">Type of Recipes</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="drop-down-item2" href="#/">Ask the Community</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
        </Navbar >
    );
};

export default SecondNavBar;