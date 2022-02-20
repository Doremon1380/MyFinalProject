import React from "react";
import SecondNavBar from "./second-nav-bar";
import HalfTopPart from "./half-top-part";
import "bootstrap/dist/css/bootstrap.min.css";
import "./photos.css";
import { Helmet } from 'react-helmet';

import Container from "react-bootstrap/Container";

const TITLE = 'Private Profile - FoodShare.com';

function Photos() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <Container id="photos-container">
                <HalfTopPart />
                <nav id="group-buttons">
                <a href="/about-me"><button className="group-button">About Me</button></a>
                <a href="/favorite-recipes"><button className="group-button">My Favorites</button></a>
                <a href="/follower-accounts"><button className="group-button">My Friends</button></a>
                <a href="/made-recipes"><button className="group-button">I Made It</button></a>
                <a href="/photos"><button className="group-button selected-button">My Photos</button></a>
                <a href="/evaluated-recipes"><button className="group-button">My Reviews</button></a>
                <a href="/personal-recipes"><button className="group-button last-button"> Personal Recipes</button></a>
                </nav>
            </Container>
            <div id="photos-page">
                <div id="grid-photos-page">
                    <button id="add-photos-button">
                        <i className="bi bi-plus-circle-fill"></i>
                        <p id="add-photos">Add a photo</p>
                    </button>
                    <div className="photo">
                        <div id="image-in-photos-page">
                            <a href="/photo-id"><img alt="photo1"></img></a>
                        </div>
                        <div className="description">
                            <button>
                                <i className="bi bi-plus-circle-fill"></i>
                                <p>Description</p>
                            </button>
                        </div>
                    </div>
                    <div className="photo">
                        <div id="image-in-photos-page">
                            <a href="/photo-id"><img alt="photo2"></img></a>
                        </div>
                        <div className="description">
                            <button>
                                <i className="bi bi-plus-circle-fill"></i>
                                <p>Description</p>
                            </button>
                        </div>
                    </div>
                    <div className="photo">
                        <div id="image-in-photos-page">
                            <a href="/photo-id"><img alt="photo3"></img></a>
                        </div>
                        <div className="description">
                            <button>
                                <i className="bi bi-plus-circle-fill"></i>
                                <p>Description</p>
                            </button>
                        </div>
                    </div>
                    <div className="photo">
                        <div id="image-in-photos-page">
                            <a href="/photo-id"><img alt="photo3"></img></a>
                        </div>
                        <div className="description">
                            <button>
                                <i className="bi bi-plus-circle-fill"></i>
                                <p>Description</p>
                            </button>
                        </div>
                    </div>
                    <div className="photo">
                        <div id="image-in-photos-page">
                            <a href="/photo-id"><img alt="photo3"></img></a>
                        </div>
                        <div className="description">
                            <button>
                                <i className="bi bi-plus-circle-fill"></i>
                                <p>Description</p>
                            </button>
                        </div>
                    </div>
                </div>
                <button id="load-more-recipes-button-in-photos-page">SHOW MORE</button>
            </div>
        </>
    );
};

export default Photos;