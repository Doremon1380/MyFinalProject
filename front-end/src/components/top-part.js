import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./top-part.css";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaHeart } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";

function TopPart() {
    return (
        <>
            <div id="top">
                <div id="user-account">
                    <img alt="Avatar" id="avatar-top"></img>
                    <div id="account-related">
                        <p id="account-name">Account Name</p>
                        <div id="icons-and-data">
                            <i className="bi bi-people-fill followers" title="My Followers"></i>
                            <i className="heart" title="My Favorites"><FaHeart /></i>
                            <i className="dishes" title="Recipes I've Made"><FaUtensils /></i>
                        </div>
                    </div>
                </div>
                <DropdownButton id="dropdown-basic-button-settings" variant="" title={<i className="bi bi-gear-fill"></i>}>
                    <Dropdown.Item className="drop-down-item2" href="/Profile Settings">Edit profile</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="drop-down-item2" href="#/">See public profile</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="drop-down-item2" href="#/">Notification setting</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="drop-down-item2" href="#/">Account setting</Dropdown.Item>
                </DropdownButton>
            </div>
            <nav id="group-buttons">
                <a href="/Private Profile"><button className="group-button selected-button" >About Me</button></a>
                <a href="#"><button className="group-button">My Favorites</button></a>
                <a href="#"><button className="group-button">My Friends</button></a>
                <a href="#"><button className="group-button">I Made It</button></a>
                <a href="#"><button className="group-button">My Photos</button></a>
                <a href="#"><button className="group-button">My Reviews</button></a>
                <a href="#"><button className="group-button last-button"> Personal Recipes</button></a>
            </nav>
        </>
    );
}

export default TopPart;