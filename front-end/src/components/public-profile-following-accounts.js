import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./public-profile-following-accounts.css";
import { Helmet } from 'react-helmet'

import Container from "react-bootstrap/Container";
import PublicProfileTopPart from "./public-profile-top-part";

const TITLE = 'Public Profile - FoodShare.com';

function PublicProfileFollowingAccounts() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <Container id="top-part-container-in-public-profile-following-accounts-page">
                <PublicProfileTopPart />
                <nav id="group-buttons-in-public-profile-following-accounts-page">
                    <a href="/public-profile-about-me"><button className="group-button-in-public-profile-following-accounts-page">About Me</button></a>
                    <a href="/public-profile-favorite-recipes"><button className="group-button-in-public-profile-following-accounts-page">Favorites</button></a>
                    <a href="/public-profile-made-recipes"><button className="group-button-in-public-profile-following-accounts-page">I Made It</button></a>
                    <a href="/public-profile-evaluated-recipes"><button className="group-button-in-public-profile-following-accounts-page">Reviews</button></a>
                    <a href="/public-profile-personal-recipes"><button className="group-button-in-public-profile-following-accounts-page">Personal Recipes</button></a>
                    <a href="/public-profile-follower-accounts"><button className="group-button-in-public-profile-following-accounts-page">Followers</button></a>
                    <a href="/public-profile-following-accounts"><button className="group-button-in-public-profile-following-accounts-page last-button-of-group-buttons-in-public-profile-following-accounts-page selected-button-in-public-profile-following-accounts-page">Following</button></a>
                </nav>
            </Container>
            <div id="public-profile-following-accounts-page">
                <div id="following-and-follower-in-public-profile-following-accounts-page">
                    <a href="/public-profile-following-accounts">
                        <button id="following-button-in-public-profile-following-accounts-page">Following (number)</button>
                    </a>
                    <a href="/public-profile-follower-accounts">
                        <button>Follower (number)</button>
                    </a>
                </div>
                <div id="following-accounts-in-public-profile-following-accounts-page">
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-check-fill"></i>
                                <p>Following</p>
                            </button>
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-check-fill"></i>
                                <p>Following</p>
                            </button>
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-check-fill"></i>
                                <p>Following</p>
                            </button>
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-check-fill"></i>
                                <p>Following</p>
                            </button>
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-check-fill"></i>
                                <p>Following</p>
                            </button>
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-check-fill"></i>
                                <p>Following</p>
                            </button>
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-check-fill"></i>
                                <p>Following</p>
                            </button>
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-check-fill"></i>
                                <p>Following</p>
                            </button>
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-check-fill"></i>
                                <p>Following</p>
                            </button>
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-check-fill"></i>
                                <p>Following</p>
                            </button>
                        </div>
                    </div>
                </div>
                <button id="load-more-following-accounts-button-in-public-profile-following-accounts-page">SHOW MORE</button>
            </div>
        </>
    );
};

export default PublicProfileFollowingAccounts;