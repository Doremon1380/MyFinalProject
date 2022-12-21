import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./public-profile-personal-recipes.css";
import { Helmet } from 'react-helmet'
import { FaHeart } from "react-icons/fa";

import PublicProfileTopPart from "./public-profile-top-part";

const TITLE = 'Public Profile - FoodShare.com';

function PublicProfilePersonalRecipes() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="top-part-container-in-public-profile-personal-recipes-page">
                <PublicProfileTopPart />
                <nav id="group-buttons-in-public-profile-personal-recipes-page">
                    <a href="/public-profile-about-me"><button className="group-button-in-public-profile-personal-recipes-page">About Me</button></a>
                    <a href="/public-profile-favorite-recipes"><button className="group-button-in-public-profile-personal-recipes-page">Favorites</button></a>
                    <a href="/public-profile-made-recipes"><button className="group-button-in-public-profile-personal-recipes-page">I Made It</button></a>
                    <a href="/public-profile-evaluated-recipes"><button className="group-button-in-public-profile-personal-recipes-page">Reviews</button></a>
                    <a href="/public-profile-personal-recipes"><button className="group-button-in-public-profile-personal-recipes-page selected-button-in-public-profile-personal-recipes-page">Personal Recipes</button></a>
                    <a href="/public-profile-follower-accounts"><button className="group-button-in-public-profile-personal-recipes-page">Followers</button></a>
                    <a href="/public-profile-following-accounts"><button className="group-button-in-public-profile-personal-recipes-page last-button-of-group-buttons-in-public-profile-personal-recipes-page">Following</button></a>
                </nav>
            </div>
            <div id="public-profile-personal-recipes-page">
                <div id="personal-recipes-sorting-options-in-public-profile-personal-recipes-page">
                    <label for="select-personal-recipes-sorting-options-in-public-profile-personal-recipes-page">Sort by:</label><br />
                    <select name="sort types" id="select-personal-recipes-sorting-options-in-public-profile-personal-recipes-page">
                        <option value="Newest">Newest</option>
                        <option value="Rating">Rating</option>
                        <option value="Title">Title</option>
                    </select>
                </div>
                <div id="recipes-in-public-profile-personal-recipes-page">
                    <div className="recipe-in-public-profile-personal-recipes-page">
                        <button className="save-recipe-button-in-public-profile-personal-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-personal-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-personal-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-personal-recipes-page">
                            <div className="recipe-ratings-in-public-profile-personal-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-personal-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-in-public-profile-personal-recipes-page">
                        <button className="save-recipe-button-in-public-profile-personal-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-personal-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-personal-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-personal-recipes-page">
                            <div className="recipe-ratings-in-public-profile-personal-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-personal-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-in-public-profile-personal-recipes-page">
                        <button className="save-recipe-button-in-public-profile-personal-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-personal-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-personal-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-personal-recipes-page">
                            <div className="recipe-ratings-in-public-profile-personal-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-personal-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-in-public-profile-personal-recipes-page">
                        <button className="save-recipe-button-in-public-profile-personal-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-personal-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-personal-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-personal-recipes-page">
                            <div className="recipe-ratings-in-public-profile-personal-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-personal-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-in-public-profile-personal-recipes-page">
                        <button className="save-recipe-button-in-public-profile-personal-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-personal-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-personal-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-personal-recipes-page">
                            <div className="recipe-ratings-in-public-profile-personal-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-personal-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-in-public-profile-personal-recipes-page">
                        <button className="save-recipe-button-in-public-profile-personal-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-personal-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-personal-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-personal-recipes-page">
                            <div className="recipe-ratings-in-public-profile-personal-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-personal-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-in-public-profile-personal-recipes-page">
                        <button className="save-recipe-button-in-public-profile-personal-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-personal-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-personal-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-personal-recipes-page">
                            <div className="recipe-ratings-in-public-profile-personal-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-personal-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-in-public-profile-personal-recipes-page">
                        <button className="save-recipe-button-in-public-profile-personal-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-personal-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-personal-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-personal-recipes-page">
                            <div className="recipe-ratings-in-public-profile-personal-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-personal-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-in-public-profile-personal-recipes-page">
                        <button className="save-recipe-button-in-public-profile-personal-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-personal-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-personal-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-personal-recipes-page">
                            <div className="recipe-ratings-in-public-profile-personal-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-personal-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button id="load-more-recipes-button-in-public-profile-personal-recipes-page">SHOW MORE</button>
            </div>
        </>
    );
};

export default PublicProfilePersonalRecipes;