import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./public-profile-collection-recipes.css";
import { Helmet } from 'react-helmet'
import { FaHeart } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";

import PublicProfileTopPart from "./public-profile-top-part";

const TITLE = 'Public Profile - FoodShare.com';

function PublicProfileCollectionRecipes() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="top-part-container-in-public-profile-collection-recipes-page">
                <PublicProfileTopPart />
                <nav id="group-buttons-in-public-profile-collection-recipes-page">
                    <a href="/public-profile-about-me"><button className="group-button-in-public-profile-collection-recipes-page">About Me</button></a>
                    <a href="/public-profile-favorite-recipes"><button className="group-button-in-public-profile-collection-recipes-page selected-button-in-public-profile-collection-recipes-page">Favorites</button></a>
                    <a href="/public-profile-made-recipes"><button className="group-button-in-public-profile-collection-recipes-page">I Made It</button></a>
                    <a href="/public-profile-evaluated-recipes"><button className="group-button-in-public-profile-collection-recipes-page">Reviews</button></a>
                    <a href="/public-profile-personal-recipes"><button className="group-button-in-public-profile-collection-recipes-page">Personal Recipes</button></a>
                    <a href="/public-profile-follower-accounts"><button className="group-button-in-public-profile-collection-recipes-page">Followers</button></a>
                    <a href="/public-profile-following-accounts"><button className="group-button-in-public-profile-collection-recipes-page last-button-of-group-buttons-in-public-profile-collection-recipes-page">Following</button></a>
                </nav>
            </div>
            <div id="public-profile-collection-recipes-page">
                <div id="top-section-in-public-profile-collection-recipes-page">
                    <div id="favorites-recipes-and-collections-in-public-profile-collection-recipes-page">
                        <a href="/public-profile-collection-recipes">
                            <button>Collections</button>
                        </a>
                        <a href="/public-profile-favorite-recipes">
                            <button>Recipes</button>
                        </a>
                    </div>
                    <div id="collection-recipes-sorting-options-in-public-profile-collection-recipes-page">
                        <label for="select-collection-recipes-sorting-options-in-public-profile-collection-recipes-page">Sort by:</label><br />
                        <select name="sort types" id="select-collection-recipes-sorting-options-in-public-profile-collection-recipes-page">
                            <option value="Newest">Newest</option>
                            <option value="Title">Title</option>
                        </select>
                    </div>
                </div>
                <div id="collections-in-public-profile-collection-recipes-page">
                    <div className="collection-in-public-profile-collection-recipes-page">
                        <button className="save-collection-button-in-public-profile-collection-recipes-page"><i><FaHeart /></i></button>
                        <a href="/other-profile-collection-details">
                            <div className="set-of-containers-representing-the-collection-in-public-profile-collection-recipes-page">
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                            </div>
                        </a>
                        <a href="/other-profile-collection-details">
                            <p className="collection-name-in-public-profile-collection-recipes-page">(Collection Name)</p>
                        </a>
                        <p className="number-recipes-of-collection-in-public-profile-collection-recipes-page">(Number) recipes</p>
                        <hr></hr>
                        <div className="avatar-and-information-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page">
                            <a href="/public-profile-collection-recipes">
                                <img alt="avatar" className="avatar-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page"></img>
                            </a>
                            <div className="information-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page">
                                <p>Created by <a href="/public-profile-collection-recipes">(Account Name)</a></p>
                                <div>
                                    <i className="bi bi-people-fill follower-icon-in-public-profile-collection-recipes-page" title="My Followers"></i>
                                    <p>(Num)</p>
                                    <i className="favorite-icon-in-public-profile-collection-recipes-page" title="My Favorites"><FaHeart /></i>
                                    <p>(Num)</p>
                                    <i className="made-recipes-icon-in-public-profile-collection-recipes-page" title="Recipes I've Made"><FaUtensils /></i>
                                    <p>(Num)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collection-in-public-profile-collection-recipes-page">
                        <button className="save-collection-button-in-public-profile-collection-recipes-page"><i><FaHeart /></i></button>
                        <a href="/other-profile-collection-details">
                            <div className="set-of-containers-representing-the-collection-in-public-profile-collection-recipes-page">
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                            </div>
                        </a>
                        <a href="/other-profile-collection-details">
                            <p className="collection-name-in-public-profile-collection-recipes-page">(Collection Name)</p>
                        </a>
                        <p className="number-recipes-of-collection-in-public-profile-collection-recipes-page">(Number) recipes</p>
                        <hr></hr>
                        <div className="avatar-and-information-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page">
                            <a href="/public-profile-collection-recipes">
                                <img alt="avatar" className="avatar-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page"></img>
                            </a>
                            <div className="information-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page">
                                <p>Created by <a href="/public-profile-collection-recipes">(Account Name)</a></p>
                                <div>
                                    <i className="bi bi-people-fill follower-icon-in-public-profile-collection-recipes-page" title="My Followers"></i>
                                    <p>(Num)</p>
                                    <i className="favorite-icon-in-public-profile-collection-recipes-page" title="My Favorites"><FaHeart /></i>
                                    <p>(Num)</p>
                                    <i className="made-recipes-icon-in-public-profile-collection-recipes-page" title="Recipes I've Made"><FaUtensils /></i>
                                    <p>(Num)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collection-in-public-profile-collection-recipes-page">
                        <button className="save-collection-button-in-public-profile-collection-recipes-page"><i><FaHeart /></i></button>
                        <a href="/other-profile-collection-details">
                            <div className="set-of-containers-representing-the-collection-in-public-profile-collection-recipes-page">
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                            </div>
                        </a>
                        <a href="/other-profile-collection-details">
                            <p className="collection-name-in-public-profile-collection-recipes-page">(Collection Name)</p>
                        </a>
                        <p className="number-recipes-of-collection-in-public-profile-collection-recipes-page">(Number) recipes</p>
                        <hr></hr>
                        <div className="avatar-and-information-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page">
                            <a href="/public-profile-collection-recipes">
                                <img alt="avatar" className="avatar-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page"></img>
                            </a>
                            <div className="information-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page">
                                <p>Created by <a href="/public-profile-collection-recipes">(Account Name)</a></p>
                                <div>
                                    <i className="bi bi-people-fill follower-icon-in-public-profile-collection-recipes-page" title="My Followers"></i>
                                    <p>(Num)</p>
                                    <i className="favorite-icon-in-public-profile-collection-recipes-page" title="My Favorites"><FaHeart /></i>
                                    <p>(Num)</p>
                                    <i className="made-recipes-icon-in-public-profile-collection-recipes-page" title="Recipes I've Made"><FaUtensils /></i>
                                    <p>(Num)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collection-in-public-profile-collection-recipes-page">
                        <button className="save-collection-button-in-public-profile-collection-recipes-page"><i><FaHeart /></i></button>
                        <a href="/other-profile-collection-details">
                            <div className="set-of-containers-representing-the-collection-in-public-profile-collection-recipes-page">
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                            </div>
                        </a>
                        <a href="/other-profile-collection-details">
                            <p className="collection-name-in-public-profile-collection-recipes-page">(Collection Name)</p>
                        </a>
                        <p className="number-recipes-of-collection-in-public-profile-collection-recipes-page">(Number) recipes</p>
                        <hr></hr>
                        <div className="avatar-and-information-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page">
                            <a href="/public-profile-collection-recipes">
                                <img alt="avatar" className="avatar-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page"></img>
                            </a>
                            <div className="information-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page">
                                <p>Created by <a href="/public-profile-collection-recipes">(Account Name)</a></p>
                                <div>
                                    <i className="bi bi-people-fill follower-icon-in-public-profile-collection-recipes-page" title="My Followers"></i>
                                    <p>(Num)</p>
                                    <i className="favorite-icon-in-public-profile-collection-recipes-page" title="My Favorites"><FaHeart /></i>
                                    <p>(Num)</p>
                                    <i className="made-recipes-icon-in-public-profile-collection-recipes-page" title="Recipes I've Made"><FaUtensils /></i>
                                    <p>(Num)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collection-in-public-profile-collection-recipes-page">
                        <button className="save-collection-button-in-public-profile-collection-recipes-page"><i><FaHeart /></i></button>
                        <a href="/other-profile-collection-details">
                            <div className="set-of-containers-representing-the-collection-in-public-profile-collection-recipes-page">
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                            </div>
                        </a>
                        <a href="/other-profile-collection-details">
                            <p className="collection-name-in-public-profile-collection-recipes-page">(Collection Name)</p>
                        </a>
                        <p className="number-recipes-of-collection-in-public-profile-collection-recipes-page">(Number) recipes</p>
                        <hr></hr>
                        <div className="avatar-and-information-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page">
                            <a href="/public-profile-collection-recipes">
                                <img alt="avatar" className="avatar-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page"></img>
                            </a>
                            <div className="information-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page">
                                <p>Created by <a href="/public-profile-collection-recipes">(Account Name)</a></p>
                                <div>
                                    <i className="bi bi-people-fill follower-icon-in-public-profile-collection-recipes-page" title="My Followers"></i>
                                    <p>(Num)</p>
                                    <i className="favorite-icon-in-public-profile-collection-recipes-page" title="My Favorites"><FaHeart /></i>
                                    <p>(Num)</p>
                                    <i className="made-recipes-icon-in-public-profile-collection-recipes-page" title="Recipes I've Made"><FaUtensils /></i>
                                    <p>(Num)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collection-in-public-profile-collection-recipes-page">
                        <button className="save-collection-button-in-public-profile-collection-recipes-page"><i><FaHeart /></i></button>
                        <a href="/other-profile-collection-details">
                            <div className="set-of-containers-representing-the-collection-in-public-profile-collection-recipes-page">
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                                <img alt="(recipe name)"></img>
                            </div>
                        </a>
                        <a href="/other-profile-collection-details">
                            <p className="collection-name-in-public-profile-collection-recipes-page">(Collection Name)</p>
                        </a>
                        <p className="number-recipes-of-collection-in-public-profile-collection-recipes-page">(Number) recipes</p>
                        <hr></hr>
                        <div className="avatar-and-information-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page">
                            <a href="/public-profile-collection-recipes">
                                <img alt="avatar" className="avatar-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page"></img>
                            </a>
                            <div className="information-related-to-the-creator-of-collection-in-public-profile-collection-recipes-page">
                                <p>Created by <a href="/public-profile-collection-recipes">(Account Name)</a></p>
                                <div>
                                    <i className="bi bi-people-fill follower-icon-in-public-profile-collection-recipes-page" title="My Followers"></i>
                                    <p>(Num)</p>
                                    <i className="favorite-icon-in-public-profile-collection-recipes-page" title="My Favorites"><FaHeart /></i>
                                    <p>(Num)</p>
                                    <i className="made-recipes-icon-in-public-profile-collection-recipes-page" title="Recipes I've Made"><FaUtensils /></i>
                                    <p>(Num)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button id="load-more-collections-button-in-public-profile-collection-recipes-page">SHOW MORE</button>
            </div>
        </>
    );
};

export default PublicProfileCollectionRecipes;