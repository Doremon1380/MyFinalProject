import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./public-profile-made-recipes.css";
import { Helmet } from 'react-helmet'
import { FaHeart } from "react-icons/fa";

import PublicProfileTopPart from "./public-profile-top-part";

const TITLE = 'Public Profile - FoodShare.com';

function PublicProfileMadeRecipes() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="top-part-container-in-public-profile-made-recipes-page">
                <PublicProfileTopPart />
                <nav id="group-buttons-in-public-profile-made-recipes-page">
                    <a href="/public-profile-about-me"><button className="group-button-in-public-profile-made-recipes-page">About Me</button></a>
                    <a href="/public-profile-favorite-recipes"><button className="group-button-in-public-profile-made-recipes-page">Favorites</button></a>
                    <a href="/public-profile-made-recipes"><button className="group-button-in-public-profile-made-recipes-page selected-button-in-public-profile-made-recipes-page">I Made It</button></a>
                    <a href="/public-profile-evaluated-recipes"><button className="group-button-in-public-profile-made-recipes-page">Reviews</button></a>
                    <a href="/public-profile-personal-recipes"><button className="group-button-in-public-profile-made-recipes-page">Personal Recipes</button></a>
                    <a href="/public-profile-follower-accounts"><button className="group-button-in-public-profile-made-recipes-page">Followers</button></a>
                    <a href="/public-profile-following-accounts"><button className="group-button-in-public-profile-made-recipes-page last-button-of-group-buttons-in-public-profile-made-recipes-page">Following</button></a>
                </nav>
            </div>
            <div id="public-profile-made-recipes-page">
                <div id="made-recipes-sorting-options-in-public-profile-made-recipes-page">
                    <label for="select-made-recipes-sorting-options-in-public-profile-made-recipes-page">Sort by:</label><br />
                    <select name="sort types" id="select-made-recipes-sorting-options-in-public-profile-made-recipes-page">
                        <option value="Newest">Newest</option>
                        <option value="Rating">Rating</option>
                        <option value="Title">Title</option>
                    </select>
                </div>
                <div id="recipes-in-public-profile-made-recipes-page">
                    <div className="recipe-in-public-profile-made-recipes-page">
                        <button className="save-recipe-button-in-public-profile-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-made-recipes-page">
                            <div className="recipe-ratings-in-public-profile-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-public-profile-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-public-profile-made-recipes-page">
                        <button className="save-recipe-button-in-public-profile-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-made-recipes-page">
                            <div className="recipe-ratings-in-public-profile-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-public-profile-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-public-profile-made-recipes-page">
                        <button className="save-recipe-button-in-public-profile-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-made-recipes-page">
                            <div className="recipe-ratings-in-public-profile-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-public-profile-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-public-profile-made-recipes-page">
                        <button className="save-recipe-button-in-public-profile-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-made-recipes-page">
                            <div className="recipe-ratings-in-public-profile-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-public-profile-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-public-profile-made-recipes-page">
                        <button className="save-recipe-button-in-public-profile-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-made-recipes-page">
                            <div className="recipe-ratings-in-public-profile-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-public-profile-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-public-profile-made-recipes-page">
                        <button className="save-recipe-button-in-public-profile-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-made-recipes-page">
                            <div className="recipe-ratings-in-public-profile-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-public-profile-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-public-profile-made-recipes-page">
                        <button className="save-recipe-button-in-public-profile-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-made-recipes-page">
                            <div className="recipe-ratings-in-public-profile-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-public-profile-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-public-profile-made-recipes-page">
                        <button className="save-recipe-button-in-public-profile-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-made-recipes-page">
                            <div className="recipe-ratings-in-public-profile-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-public-profile-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-public-profile-made-recipes-page">
                        <button className="save-recipe-button-in-public-profile-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-public-profile-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-public-profile-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-public-profile-made-recipes-page">
                            <div className="recipe-ratings-in-public-profile-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-public-profile-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-public-profile-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                </div>
                <button id="load-more-recipes-button-in-public-profile-made-recipes-page">SHOW MORE</button>
            </div>
        </>
    );
};

export default PublicProfileMadeRecipes;

