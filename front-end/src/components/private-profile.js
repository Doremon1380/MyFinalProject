import React from "react";
import SecondNavBar from "./second-nav-bar";
import TopPart from "./top-part";
import "bootstrap/dist/css/bootstrap.min.css";
import "./private-profile.css";
import { Helmet } from 'react-helmet'

import Container from "react-bootstrap/Container";

const TITLE = 'Private Profile - FoodShare.com';

function PrivateProfile() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <Container id="private-profile-container">
                <TopPart />
                <div id="add-informations">
                    <div id="about-me">
                        <p>About me</p>
                        <a href="/edit-profile" id="abc">Introduce about yourself</a>
                    </div>
                    <div id="my-location">
                        <p>My location</p>
                        <a href="/edit-profile">Add your location</a>
                    </div>
                    <div id="contact-link">
                        <p>Contact with me</p>
                        <a href="/edit-profile">Share your public profile, create a personal URL!</a>
                    </div>
                </div>
            </Container>
            <a href="/edit-profile" id="go-to-profile-settings"><button id="edit-profile-button">Edit public profile</button></a>
        </>
    );
};

export default PrivateProfile;
