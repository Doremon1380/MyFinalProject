import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./private-profile.css";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaHeart } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import Container from "react-bootstrap/Container";

function PrivateProfile() {
    return (
        <>
            <SecondNavBar />
            <Container id="private-profile-container">
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
                <div id="add-informations">
                    <div id="about-me">
                        <p>About me</p>
                        <a href="#" id="abc">Introduce about yourself</a>
                    </div>
                    <div id="my-location">
                        <p>My location</p>
                        <a href="#">Add your location</a>
                    </div>
                    <div id="contact-link">
                        <p>Contact with me</p>
                        <a href="#">Share your public profile, create a personal URL!</a>
                    </div>
                </div>
            </Container>
            <a href="/Profile Settings" id="go-to-profile-settings"><button id="edit-profile-button">Edit public profile</button></a>
        </>
    );
}

export default PrivateProfile;
