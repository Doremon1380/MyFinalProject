import React from "react";
import TopPart from "./top-part";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import "./made-recipes.css";
import { FaHeart } from "react-icons/fa";

const TITLE = 'Private Profile - FoodShare.com';

function MadeRecipes() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="top-part-container-in-made-recipes-page">
                <TopPart />
                <nav id="group-buttons">
                    <a href="/about-me"><button className="group-button">About Me</button></a>
                    <a href="/favorite-recipes"><button className="group-button">My Favorites</button></a>
                    <a href="/follower-accounts"><button className="group-button">My Friends</button></a>
                    <a href="/made-recipes"><button className="group-button selected-button">I Made It</button></a>
                    <a href="/photos"><button className="group-button ">My Photos</button></a>
                    <a href="/evaluated-recipes"><button className="group-button">My Reviews</button></a>
                    <a href="/personal-recipes"><button className="group-button last-button"> Personal Recipes</button></a>
                </nav>
            </div>
            <div id="made-recipes-page">
                <div id="made-recipes-sorting-options-in-made-recipes-page">
                    <label for="select-made-recipes-sorting-options-in-made-recipes-page">Sort by:</label><br />
                    <select name="sort types" id="select-made-recipes-sorting-options-in-made-recipes-page">
                        <option value="Newest">Newest</option>
                        <option value="Rating">Rating</option>
                        <option value="Title">Title</option>
                    </select>
                </div>
                <div id="recipes-in-made-recipes-page">
                    <div className="recipe-in-made-recipes-page">
                        <button className="save-recipe-button-in-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-made-recipes-page">
                            <div className="recipe-ratings-in-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-made-recipes-page">
                        <button className="save-recipe-button-in-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-made-recipes-page">
                            <div className="recipe-ratings-in-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-made-recipes-page">
                        <button className="save-recipe-button-in-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-made-recipes-page">
                            <div className="recipe-ratings-in-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-made-recipes-page">
                        <button className="save-recipe-button-in-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-made-recipes-page">
                            <div className="recipe-ratings-in-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-made-recipes-page">
                        <button className="save-recipe-button-in-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-made-recipes-page">
                            <div className="recipe-ratings-in-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-made-recipes-page">
                        <button className="save-recipe-button-in-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-made-recipes-page">
                            <div className="recipe-ratings-in-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-made-recipes-page">
                        <button className="save-recipe-button-in-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-made-recipes-page">
                            <div className="recipe-ratings-in-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-made-recipes-page">
                        <button className="save-recipe-button-in-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-made-recipes-page">
                            <div className="recipe-ratings-in-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-made-recipes-page">
                        <button className="save-recipe-button-in-made-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-made-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-made-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-made-recipes-page">
                            <div className="recipe-ratings-in-made-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-made-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-made-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                </div>
                <button id="load-more-recipes-button-in-made-recipes-page">SHOW MORE</button>
            </div>
        </>
    );
};

export default MadeRecipes;