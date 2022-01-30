import React from "react";
import SecondNavBar from "./second-nav-bar";
import HalfTopPart from "./half-top-part";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import "./follower-accounts.css";
import Container from "react-bootstrap/Container";

const TITLE = 'Private Profile - FoodShare.com';

function FollowerAccounts() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <Container id="top-part-container-in-follower-accounts-page">
                <HalfTopPart />
                <nav id="group-buttons">
                    <a href="/about-me"><button className="group-button">About Me</button></a>
                    <a href="/favorite-recipes"><button className="group-button">My Favorites</button></a>
                    <a href="/follower-accounts"><button className="group-button selected-button">My Friends</button></a>
                    <a href="/made-recipes"><button className="group-button">I Made It</button></a>
                    <a href="/photos"><button className="group-button ">My Photos</button></a>
                    <a href="/evaluated-recipes"><button className="group-button">My Reviews</button></a>
                    <a href="/personal-recipes"><button className="group-button last-button"> Personal Recipes</button></a>
                </nav>
            </Container>
            <div id="follower-accounts-page">
                <div id="following-and-follower-in-follower-accounts-page">
                    <a href="/following-accounts">
                        <button>Following (number)</button>
                    </a>
                    <a href="/follower-accounts">
                        <button>Follower (number)</button>
                    </a>
                </div>
                <div id="follower-accounts-in-follower-accounts-page">
                    <div id="follower-account-in-follower-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-plus-fill"></i>
                                <p>Follow</p>
                            </button>
                        </div>
                    </div>
                    <div id="follower-account-in-follower-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-plus-fill"></i>
                                <p>Follow</p>
                            </button>
                        </div>
                    </div>
                    <div id="follower-account-in-follower-accounts-page">
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
                    <div id="follower-account-in-follower-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-plus-fill"></i>
                                <p>Follow</p>
                            </button>
                        </div>
                    </div>
                    <div id="follower-account-in-follower-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-plus-fill"></i>
                                <p>Follow</p>
                            </button>
                        </div>
                    </div>
                    <div id="follower-account-in-follower-accounts-page">
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
                    <div id="follower-account-in-follower-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-plus-fill"></i>
                                <p>Follow</p>
                            </button>
                        </div>
                    </div>
                    <div id="follower-account-in-follower-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-plus-fill"></i>
                                <p>Follow</p>
                            </button>
                        </div>
                    </div>
                    <div id="follower-account-in-follower-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-plus-fill"></i>
                                <p>Follow</p>
                            </button>
                        </div>
                    </div>
                    <div id="follower-account-in-follower-accounts-page">
                        <a href="#">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="#">
                                Account name
                            </a>
                            <button>
                                <i class="bi bi-person-plus-fill"></i>
                                <p>Follow</p>
                            </button>
                        </div>
                    </div>
                </div>
                <button id="load-more-follower-accounts-button-in-follower-accounts-page">SHOW MORE</button>
            </div>
        </>
    );
};

export default FollowerAccounts;
