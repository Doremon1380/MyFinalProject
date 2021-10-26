import React from "react";
import SecondNavBar from "./second-nav-bar";
import TopPart from "./top-part";
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
                <TopPart />
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
};

export default PrivateProfile;
