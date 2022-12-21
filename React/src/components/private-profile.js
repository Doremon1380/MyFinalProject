import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./public-profile-about-me.css";
import { Helmet } from 'react-helmet'
import TopPart from "./top-part";

const TITLE = 'Private Profile - FoodShare.com';

function PrivateProfile() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="private-profile-container">
                <TopPart />
                <nav id="group-buttons">
                    <a href="/about-me"><button className="group-button selected-button">About Me</button></a>
                    <a href="/favorite-recipes"><button className="group-button">My Favorites</button></a>
                    <a href="/follower-accounts"><button className="group-button">My Friends</button></a>
                    <a href="/made-recipes"><button className="group-button">I Made It</button></a>
                    <a href="/photos"><button className="group-button">My Photos</button></a>
                    <a href="/evaluated-recipes"><button className="group-button">My Reviews</button></a>
                    <a href="/personal-recipes"><button className="group-button last-button"> Personal Recipes</button></a>
                </nav>
                <div id="add-informations">
                    <div id="about-me">
                        <p>About me</p>
                        <a href="/edit-profile">Introduce about yourself</a>
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
            </div>
            <a href="/edit-profile" id="go-to-profile-settings"><button id="edit-profile-button">Edit public profile</button></a>
        </>
    );
};

export default PrivateProfile;
