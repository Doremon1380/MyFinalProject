import React from "react";
import SecondNavBar from "./second-nav-bar";
import HalfTopPart from "./half-top-part";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import "./collection-recipes.css";
import { FaHeart } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import Container from "react-bootstrap/Container";

const TITLE = 'Private Profile - FoodShare.com';

function CollectionRecipes() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <Container id="top-part-container-in-collection-recipes-page">
                <HalfTopPart />
                <nav id="group-buttons">
                    <a href="/about-me"><button className="group-button">About Me</button></a>
                    <a href="/favorite-recipes"><button className="group-button selected-button">My Favorites</button></a>
                    <a href="/follower-accounts"><button className="group-button">My Friends</button></a>
                    <a href="/made-recipes"><button className="group-button">I Made It</button></a>
                    <a href="/photos"><button className="group-button ">My Photos</button></a>
                    <a href="/evaluated-recipes"><button className="group-button">My Reviews</button></a>
                    <a href="/personal-recipes"><button className="group-button last-button"> Personal Recipes</button></a>
                </nav>
            </Container>
            <div id="collection-recipes-page">
                <div id="top-section-of-collection-recipes-page">
                    <div id="favorites-recipes-and-collections-in-collection-recipes-page">
                        <a href="/collection-recipes">
                            <button>Collections</button>
                        </a>
                        <a href="/favorite-recipes">
                            <button>Recipes</button>
                        </a>
                    </div>
                    <div id="collection-recipes-sorting-options-in-collection-recipes-page">
                        <label for="select-collection-recipes-sorting-options-in-collection-recipes-page">Sort by:</label><br />
                        <select name="sort types" id="select-collection-recipes-sorting-options-in-collection-recipes-page">
                            <option value="Newest">Newest</option>
                            <option value="Title">Title</option>
                        </select>
                    </div>
                </div>
                <div id="collections-in-collection-recipes-page">
                    <button className="add-collection-button-in-collection-recipes-page">
                        <div className="add-icon-in-collection-recipes-page">
                            <i class="bi bi-plus"></i>
                        </div>
                        <p>Create a collection</p>
                    </button>
                    <div className="collection-in-collection-recipes-page">
                        <button className="save-collection-button-in-collection-recipes-page"><i><FaHeart /></i></button>
                        <a href="#">
                            <div className="set-of-containers-representing-the-collection-in-collection-recipes-page">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </a>
                        <a href="#">
                            <p className="collection-name-in-collection-recipes-page">Side Dishes</p>
                        </a>
                        <p className="number-recipes-of-collection-in-collection-recipes-page">(Number) recipes</p>
                        <hr></hr>
                        <div className="avatar-and-information-related-to-the-creator-of-collection-in-collection-recipes-page">
                            <a href="#">
                                <img alt="avatar" className="avatar-related-to-the-creator-of-collection-in-collection-recipes-page"></img>
                            </a>
                            <div className="information-related-to-the-creator-of-collection-in-collection-recipes-page">
                                <p>Created by <a href="#">(Account Name)</a></p>
                                <div>
                                    <i className="bi bi-people-fill follower-icon-in-collection-recipes-page" title="My Followers"></i>
                                    <p>(Num)</p>
                                    <i className="favorite-icon-in-collection-recipes-page" title="My Favorites"><FaHeart /></i>
                                    <p>(Num)</p>
                                    <i className="made-recipes-icon-in-collection-recipes-page" title="Recipes I've Made"><FaUtensils /></i>
                                    <p>(Num)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collection-in-collection-recipes-page">
                        <button className="save-collection-button-in-collection-recipes-page"><i><FaHeart /></i></button>
                        <a href="#">
                            <div className="set-of-containers-representing-the-collection-in-collection-recipes-page">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </a>
                        <a href="#">
                            <p className="collection-name-in-collection-recipes-page">Main Dishes</p>
                        </a>
                        <p className="number-recipes-of-collection-in-collection-recipes-page">(Number) recipes</p>
                        <hr></hr>
                        <div className="avatar-and-information-related-to-the-creator-of-collection-in-collection-recipes-page">
                            <a href="#">
                                <img alt="avatar" className="avatar-related-to-the-creator-of-collection-in-collection-recipes-page"></img>
                            </a>
                            <div className="information-related-to-the-creator-of-collection-in-collection-recipes-page">
                                <p>Created by <a href="#">(Account Name)</a></p>
                                <div>
                                    <i className="bi bi-people-fill follower-icon-in-collection-recipes-page" title="My Followers"></i>
                                    <p>(Num)</p>
                                    <i className="favorite-icon-in-collection-recipes-page" title="My Favorites"><FaHeart /></i>
                                    <p>(Num)</p>
                                    <i className="made-recipes-icon-in-collection-recipes-page" title="Recipes I've Made"><FaUtensils /></i>
                                    <p>(Num)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collection-in-collection-recipes-page">
                        <button className="save-collection-button-in-collection-recipes-page"><i><FaHeart /></i></button>
                        <a href="#">
                            <div className="set-of-containers-representing-the-collection-in-collection-recipes-page">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </a>
                        <a href="#">
                            <p className="collection-name-in-collection-recipes-page">Drinks</p>
                        </a>
                        <p className="number-recipes-of-collection-in-collection-recipes-page">(Number) recipes</p>
                        <hr></hr>
                        <div className="avatar-and-information-related-to-the-creator-of-collection-in-collection-recipes-page">
                            <a href="#">
                                <img alt="avatar" className="avatar-related-to-the-creator-of-collection-in-collection-recipes-page"></img>
                            </a>
                            <div className="information-related-to-the-creator-of-collection-in-collection-recipes-page">
                                <p>Created by <a href="#">(Account Name)</a></p>
                                <div>
                                    <i className="bi bi-people-fill follower-icon-in-collection-recipes-page" title="My Followers"></i>
                                    <p>(Num)</p>
                                    <i className="favorite-icon-in-collection-recipes-page" title="My Favorites"><FaHeart /></i>
                                    <p>(Num)</p>
                                    <i className="made-recipes-icon-in-collection-recipes-page" title="Recipes I've Made"><FaUtensils /></i>
                                    <p>(Num)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collection-in-collection-recipes-page">
                        <button className="save-collection-button-in-collection-recipes-page"><i><FaHeart /></i></button>
                        <a href="#">
                            <div className="set-of-containers-representing-the-collection-in-collection-recipes-page">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </a>
                        <a href="#">
                            <p className="collection-name-in-collection-recipes-page">Desserts</p>
                        </a>
                        <p className="number-recipes-of-collection-in-collection-recipes-page">(Number) recipes</p>
                        <hr></hr>
                        <div className="avatar-and-information-related-to-the-creator-of-collection-in-collection-recipes-page">
                            <a href="#">
                                <img alt="avatar" className="avatar-related-to-the-creator-of-collection-in-collection-recipes-page"></img>
                            </a>
                            <div className="information-related-to-the-creator-of-collection-in-collection-recipes-page">
                                <p>Created by <a href="#">(Account Name)</a></p>
                                <div>
                                    <i className="bi bi-people-fill follower-icon-in-collection-recipes-page" title="My Followers"></i>
                                    <p>(Num)</p>
                                    <i className="favorite-icon-in-collection-recipes-page" title="My Favorites"><FaHeart /></i>
                                    <p>(Num)</p>
                                    <i className="made-recipes-icon-in-collection-recipes-page" title="Recipes I've Made"><FaUtensils /></i>
                                    <p>(Num)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collection-in-collection-recipes-page">
                        <button className="save-collection-button-in-collection-recipes-page"><i><FaHeart /></i></button>
                        <a href="#">
                            <div className="set-of-containers-representing-the-collection-in-collection-recipes-page">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </a>
                        <a href="#">
                            <p className="collection-name-in-collection-recipes-page">Appetizers</p>
                        </a>
                        <p className="number-recipes-of-collection-in-collection-recipes-page">(Number) recipes</p>
                        <hr></hr>
                        <div className="avatar-and-information-related-to-the-creator-of-collection-in-collection-recipes-page">
                            <a href="#">
                                <img alt="avatar" className="avatar-related-to-the-creator-of-collection-in-collection-recipes-page"></img>
                            </a>
                            <div className="information-related-to-the-creator-of-collection-in-collection-recipes-page">
                                <p>Created by <a href="#">(Account Name)</a></p>
                                <div>
                                    <i className="bi bi-people-fill follower-icon-in-collection-recipes-page" title="My Followers"></i>
                                    <p>(Num)</p>
                                    <i className="favorite-icon-in-collection-recipes-page" title="My Favorites"><FaHeart /></i>
                                    <p>(Num)</p>
                                    <i className="made-recipes-icon-in-collection-recipes-page" title="Recipes I've Made"><FaUtensils /></i>
                                    <p>(Num)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button id="load-more-collections-button-in-collection-recipes-page">SHOW MORE</button>
            </div>
        </>
    );
};

export default CollectionRecipes;