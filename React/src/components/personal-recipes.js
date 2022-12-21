import React from "react";
import TopPart from "./top-part";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import "./personal-recipes.css";
import { FaHeart } from "react-icons/fa";

const TITLE = 'Private Profile - FoodShare.com';

function PersonalRecipes() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="top-part-container-in-personal-recipes-page">
                <TopPart />
                <nav id="group-buttons">
                    <a href="/about-me"><button className="group-button">About Me</button></a>
                    <a href="/favorite-recipes"><button className="group-button">My Favorites</button></a>
                    <a href="/follower-accounts"><button className="group-button">My Friends</button></a>
                    <a href="/made-recipes"><button className="group-button">I Made It</button></a>
                    <a href="/photos"><button className="group-button">My Photos</button></a>
                    <a href="/evaluated-recipes"><button className="group-button">My Reviews</button></a>
                    <a href="/personal-recipes"><button className="group-button last-button selected-button"> Personal Recipes</button></a>
                </nav>
            </div>
            <div id="personal-recipes-page">
                <div id="personal-recipes-sorting-options-in-personal-recipes-page">
                    <label for="select-personal-recipes-sorting-options-in-personal-recipes-page">Sort by:</label><br />
                    <select name="sort types" id="select-personal-recipes-sorting-options-in-personal-recipes-page">
                        <option value="Newest">Newest</option>
                        <option value="Rating">Rating</option>
                        <option value="Title">Title</option>
                    </select>
                </div>
                <div id="recipes-in-personal-recipes-page">
                    <a href="/create-recipe">
                        <button className="add-recipe-button-in-personal-recipes-page">
                            <div className="add-icon-in-personal-recipes-page">
                                <i class="bi bi-plus"></i>
                            </div>
                            <p>Add a recipe</p>
                        </button>
                    </a>
                    <div className="recipe-in-personal-recipes-page">
                        <button className="delete-recipe-button-in-personal-recipes-page"><i class="bi bi-x-lg"></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-personal-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-personal-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-personal-recipes-page">
                            <div className="recipe-ratings-in-personal-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-personal-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-in-personal-recipes-page">
                        <button className="delete-recipe-button-in-personal-recipes-page"><i class="bi bi-x-lg"></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-personal-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-personal-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-personal-recipes-page">
                            <div className="recipe-ratings-in-personal-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-personal-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-in-personal-recipes-page">
                        <button className="delete-recipe-button-in-personal-recipes-page"><i class="bi bi-x-lg"></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-personal-recipes-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-personal-recipes-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-personal-recipes-page">
                            <div className="recipe-ratings-in-personal-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-personal-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button id="load-more-recipes-button-in-personal-recipes-page">SHOW MORE</button>
            </div>
        </>
    );
};

export default PersonalRecipes;