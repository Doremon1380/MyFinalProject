import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./public-profile-evaluated-recipes.css";
import { Helmet } from 'react-helmet'
import { FaHeart } from "react-icons/fa";

import PublicProfileTopPart from "./public-profile-top-part";

const TITLE = 'Public Profile - FoodShare.com';

function PublicProfileEvaluatedRecipes() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="top-part-container-in-public-profile-evaluated-recipes-page">
                <PublicProfileTopPart />
                <nav id="group-buttons-in-public-profile-evaluated-recipes-page">
                    <a href="/public-profile-about-me"><button className="group-button-in-public-profile-evaluated-recipes-page">About Me</button></a>
                    <a href="/public-profile-favorite-recipes"><button className="group-button-in-public-profile-evaluated-recipes-page">Favorites</button></a>
                    <a href="/public-profile-made-recipes"><button className="group-button-in-public-profile-evaluated-recipes-page">I Made It</button></a>
                    <a href="/public-profile-evaluated-recipes"><button className="group-button-in-public-profile-evaluated-recipes-page selected-button-in-public-profile-evaluated-recipes-page">Reviews</button></a>
                    <a href="/public-profile-personal-recipes"><button className="group-button-in-public-profile-evaluated-recipes-page">Personal Recipes</button></a>
                    <a href="/public-profile-follower-accounts"><button className="group-button-in-public-profile-evaluated-recipes-page">Followers</button></a>
                    <a href="/public-profile-following-accounts"><button className="group-button-in-public-profile-evaluated-recipes-page last-button-of-group-buttons-in-public-profile-evaluated-recipes-page">Following</button></a>
                </nav>
            </div>
            <div id="public-profile-evaluated-recipes-page">
                <div id="evaluated-recipes-sorting-options-in-public-profile-evaluated-recipes-page">
                    <label for="select-evaluated-recipes-sorting-options-in-public-profile-evaluated-recipes-page">Sort by:</label><br />
                    <select name="sort types" id="select-evaluated-recipes-sorting-options-in-public-profile-evaluated-recipes-page">
                        <option value="Newest">Newest</option>
                        <option value="Rating">Rating</option>
                        <option value="Title">Title</option>
                    </select>
                </div>
                <div id="recipes-in-public-profile-evaluated-recipes-page">
                    <div className="recipe-in-public-profile-evaluated-recipes-page">
                        <button className="save-recipe-button-in-public-profile-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-public-profile-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-public-profile-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-public-profile-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <hr></hr>
                        <p className="own-review-in-public-profile-evaluated-recipes-page">(Own Review)</p>
                    </div>
                    <div className="recipe-in-public-profile-evaluated-recipes-page">
                        <button className="save-recipe-button-in-public-profile-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-public-profile-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-public-profile-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-public-profile-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <hr></hr>
                        <p className="own-review-in-public-profile-evaluated-recipes-page">(Own Review)</p>
                    </div>
                    <div className="recipe-in-public-profile-evaluated-recipes-page">
                        <button className="save-recipe-button-in-public-profile-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-public-profile-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-public-profile-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-public-profile-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                    </div>
                    <div className="recipe-in-public-profile-evaluated-recipes-page">
                        <button className="save-recipe-button-in-public-profile-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-public-profile-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-public-profile-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-public-profile-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                    </div>
                    <div className="recipe-in-public-profile-evaluated-recipes-page">
                        <button className="save-recipe-button-in-public-profile-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-public-profile-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-public-profile-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-public-profile-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                    </div>
                    <div className="recipe-in-public-profile-evaluated-recipes-page">
                        <button className="save-recipe-button-in-public-profile-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-public-profile-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-public-profile-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-public-profile-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <hr></hr>
                        <p className="own-review-in-public-profile-evaluated-recipes-page">(Own Review)</p>
                    </div>
                    <div className="recipe-in-public-profile-evaluated-recipes-page">
                        <button className="save-recipe-button-in-public-profile-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-public-profile-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-public-profile-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-public-profile-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                    </div>
                    <div className="recipe-in-public-profile-evaluated-recipes-page">
                        <button className="save-recipe-button-in-public-profile-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-public-profile-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-public-profile-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-public-profile-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <hr></hr>
                        <p className="own-review-in-public-profile-evaluated-recipes-page">(Own Review)</p>
                    </div>
                    <div className="recipe-in-public-profile-evaluated-recipes-page">
                        <button className="save-recipe-button-in-public-profile-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-public-profile-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-public-profile-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-public-profile-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                    </div>
                </div>
                <button id="load-more-recipes-button-in-public-profile-evaluated-recipes-page">SHOW MORE</button>
            </div>
        </>
    );
};

export default PublicProfileEvaluatedRecipes;