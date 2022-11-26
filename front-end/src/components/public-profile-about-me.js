import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./public-profile-favorite-recipes.css";
import { Helmet } from 'react-helmet';

import PublicProfileTopPart from "./public-profile-top-part";

const TITLE = 'Public Profile - FoodShare.com';

function PublicProfileAboutMe() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="top-part-container-in-public-profile-about-me-page">
                <PublicProfileTopPart />
                <nav id="group-buttons-in-public-profile-about-me-page">
                    <a href="/public-profile-about-me"><button className="group-button-in-public-profile-about-me-page selected-button-in-public-profile-about-me-page">About Me</button></a>
                    <a href="/public-profile-favorite-recipes"><button className="group-button-in-public-profile-about-me-page">Favorites</button></a>
                    <a href="/public-profile-made-recipes"><button className="group-button-in-public-profile-about-me-page">I Made It</button></a>
                    <a href="/public-profile-evaluated-recipes"><button className="group-button-in-public-profile-about-me-page">Reviews</button></a>
                    <a href="/public-profile-personal-recipes"><button className="group-button-in-public-profile-about-me-page">Personal Recipes</button></a>
                    <a href="/public-profile-follower-accounts"><button className="group-button-in-public-profile-about-me-page">Followers</button></a>
                    <a href="/public-profile-following-accounts"><button className="group-button-in-public-profile-about-me-page last-button-of-group-buttons-in-public-profile-about-me-page">Following</button></a>
                </nav>
                <div id="public-profile-about-me-page">
                    <div>
                        <p className="title-in-public-profile-about-me-page">About me</p>
                        <p>(Discription)</p>
                    </div>
                    <div>
                        <p className="title-in-public-profile-about-me-page">My location</p>
                        <p>(Discription)</p>
                    </div>
                    <div>
                        <p className="title-in-public-profile-about-me-page">Connect with me</p>
                        <a href="public-profile-about-me">(Link)</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PublicProfileAboutMe;