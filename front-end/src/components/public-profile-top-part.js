import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./public-profile-top-part.css";

import { FaHeart } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";

function PublicProfileTopPart() {
    return (
        <>
            <div id="public-profile-top-part-container">
                <div id="top-section-of-public-profile-top-part">
                    <div id="user-account-of-public-profile-top-part">
                        <a href="/public-profile-favorite-recipes" id="avatar-in-top-section-of-public-profile-top-part"><img alt="Avatar"></img></a>
                        <div id="account-related-in-top-section-of-public-profile-top-part">
                            <p id="account-name-in-top-section-of-public-profile-top-part">Account Name</p>
                            <div id="icons-and-data-in-top-section-of-public-profile-top-part">
                                <i className="bi bi-people-fill" title="My Followers"></i>
                                <i title="My Favorites"><FaHeart /></i>
                                <i title="Recipes I've Made"><FaUtensils /></i>
                            </div>
                        </div>
                    </div>
                    <button id="follow-button-in-top-section-of-public-profile-top-part">
                        <i class="bi bi-person-plus-fill"></i>
                        <p>Follow</p>
                    </button>
                </div>
                <div id="group-photos-in-public-profile-top-part">
                    <a href="#"><img alt="photo1"></img></a>
                    <a href="#"><img alt="photo2"></img></a>
                    <a href="#"><img alt="photo3"></img></a>
                    <a href="#"><img alt="photo4"></img></a>
                </div>
            </div>
        </>
    );
};

export default PublicProfileTopPart;