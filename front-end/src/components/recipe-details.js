import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipe-details.css";
import { Helmet } from 'react-helmet'
import "./home.css"

import { FaAngleRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUtensilSpoon } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";


const TITLE = '"Recipe name" - FoodShare';

function RecipeDetails() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <div id="recipe-details-page-container"></div>
            <div id="route-to-recipe-in-recipe-details-page">
                <a href="/foodshare.com">Home</a>
                <i><FaAngleRight /></i>
                <a href="#/">World Cuisine</a>
                <i><FaAngleRight /></i>
                <a href="#/">(Country name) Recipes</a>
                <i><FaAngleRight /></i>
                <a href="#/">(Type of Recipes)</a>
            </div>
            <h1>(Recipe name)</h1>
            <div>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <p>(number) Ratings</p>
                <p>(number) Reviews</p>
                <p>(number) Photos</p>
            </div>
            <p>Introduction</p>
            <div id="for-author-account-in-recipe-details-page">
                <button id="author-avatar-in-recipe-details-page"><a href="#/"><img alt="avatar" id="author-avatar-image-in-recipe-details-page"></img></a></button>
                <p>By <a href="#" id="author-account-in-recipe-details-page">Username</a></p>
            </div>
            <div>
                <div>
                    <button>
                        <i><FaHeart /></i>
                        <p>Save</p>
                    </button>
                    <button>
                        <i class="bi bi-three-dots"></i>
                        <p>Share</p>
                    </button>
                </div>
                <div>
                    <img alt="food image"></img>
                    <div>
                        <button>
                            <div>
                                <i class="bi bi-plus"></i>
                                <i class="bi bi-camera-fill"></i>
                            </div>
                        </button>
                        <img alt="image 1"></img>
                        <img alt="image 2"></img>
                        <img alt="image 3"></img>
                        <img alt="image 4"></img>
                    </div>
                </div>
                <div>
                    <p><span>Prep:</span> (numbers) hrs and/or mins</p>
                    <p><span>Cook:</span> (numbers) hrs and/or mins</p>
                    <p><span>Additional:</span> (numbers) hrs and/or mins</p>
                    <p><span>Total:</span> (numbers) hrs and/or mins</p>
                    <p><span>Servings:</span> (numbers)</p>
                    <p><span>Yield:</span> (numbers + product type)</p>
                </div>
            </div>
            <div>
                <hr></hr>
                <i class="bi bi-cart-plus-fill"></i>
            </div>
            <div>
                <p>Ingredients</p>
                <input id="ingredient-1" type="checkbox" name="ingredients" value="ingredient-1"></input>
                <label for="ingredient-1">Ingredient 1</label>
                <input id="ingredient-2" type="checkbox" name="ingredients" value="ingredient-2"></input>
                <label for="ingredient-2">Ingredient 2</label>
                <input id="ingredient-3" type="checkbox" name="ingredients" value="ingredient-3"></input>
                <label for="ingredient-3">Ingredient 3</label>
                <input id="ingredient-4" type="checkbox" name="ingredients" value="ingredient-4"></input>
                <label for="ingredient-4">Ingredient 4</label>
                <input id="ingredient-5" type="checkbox" name="ingredients" value="ingredient-5"></input>
                <label for="ingredient-5">Ingredient 5</label>
                <button>
                    ADD ALL INGREDIENTS TO SHOPPING LIST
                    <i class="bi bi-cart-check-fill"></i>
                </button>
            </div>
            <div>
                <hr></hr>
                <i><FaUtensilSpoon /></i>
            </div>
            <div>
                <p>Directions</p>
                <i class="bi bi-check-circle-fill"></i>
                <p>Step 1</p>
                <p>Discription</p>
                <i class="bi bi-check-circle-fill"></i>
                <p>Step 2</p>
                <p>Discription</p>
                <i class="bi bi-check-circle-fill"></i>
                <p>Step 3</p>
                <p>Discription</p>
                <i class="bi bi-check-circle-fill"></i>
                <p>Step 4</p>
                <p>Discription</p>
                <i class="bi bi-check-circle-fill"></i>
                <p>Step 5</p>
                <p>Discription</p>
            </div>
            <button>
                I Made It
                <i><FaThumbsUp /></i>
            </button>
            <hr></hr>
            <button><i class="bi bi-arrow-left-short"></i></button>
            <p>Popular in (Country name) Recipes about (Type of Recipes)</p>
            <div className="suggested-recipe-in-recipe-details-page">
                <button className="save-recipe-button-in-recipe-details-page"><i><FaHeart /></i></button>
                <a href="#"><img className="suggested-recipe-photo-in-recipe-details-page" src="#" alt="image 1"></img></a>
                <p className="suggested-recipe-name-in-recipe-details-page">Recipe name</p>
                <div className="suggested-recipe-ratings-and-favorites-in-recipe-details-page">
                    <div className="suggested-recipe-ratings-in-recipe-details-page">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <p>NoRs</p>
                    </div>
                    <div className="suggested-recipe-favorites-in-recipe-details-page">
                        <i><FaHeart /></i>
                        <p>NoFs</p>
                    </div>
                </div>
                <p className="suggested-recipe-author-in-recipe-details-page">By <a href="#">Author</a></p>
            </div>
            <div className="suggested-recipe-in-recipe-details-page">
                <button className="save-recipe-button-in-recipe-details-page"><i><FaHeart /></i></button>
                <a href="#"><img className="suggested-recipe-photo-in-recipe-details-page" src="#" alt="image 2"></img></a>
                <p className="suggested-recipe-name-in-recipe-details-page">Recipe name</p>
                <div className="suggested-recipe-ratings-and-favorites-in-recipe-details-page">
                    <div className="suggested-recipe-ratings-in-recipe-details-page">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <p>NoRs</p>
                    </div>
                    <div className="suggested-recipe-favorites-in-recipe-details-page">
                        <i><FaHeart /></i>
                        <p>NoFs</p>
                    </div>
                </div>
                <p className="suggested-recipe-author-in-recipe-details-page">By <a href="#">Author</a></p>
            </div>
            <div className="suggested-recipe-in-recipe-details-page">
                <button className="save-recipe-button-in-recipe-details-page"><i><FaHeart /></i></button>
                <a href="#"><img className="suggested-recipe-photo-in-recipe-details-page" src="#" alt="image 3"></img></a>
                <p className="suggested-recipe-name-in-recipe-details-page">Recipe name</p>
                <div className="suggested-recipe-ratings-and-favorites-in-recipe-details-page">
                    <div className="suggested-recipe-ratings-in-recipe-details-page">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <p>NoRs</p>
                    </div>
                    <div className="suggested-recipe-favorites-in-recipe-details-page">
                        <i><FaHeart /></i>
                        <p>NoFs</p>
                    </div>
                </div>
                <p className="suggested-recipe-author-in-recipe-details-page">By <a href="#">Author</a></p>
            </div>
            <div className="suggested-recipe-in-recipe-details-page">
                <button className="save-recipe-button-in-recipe-details-page"><i><FaHeart /></i></button>
                <a href="#"><img className="suggested-recipe-photo-in-recipe-details-page" src="#" alt="image 4"></img></a>
                <p className="suggested-recipe-name-in-recipe-details-page">Recipe name</p>
                <div className="suggested-recipe-ratings-and-favorites-in-recipe-details-page">
                    <div className="suggested-recipe-ratings-in-recipe-details-page">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <p>NoRs</p>
                    </div>
                    <div className="suggested-recipe-favorites-in-recipe-details-page">
                        <i><FaHeart /></i>
                        <p>NoFs</p>
                    </div>
                </div>
                <p className="suggested-recipe-author-in-recipe-details-page">By <a href="#">Author</a></p>
                <button><i class="bi bi-arrow-right-short"></i></button>
            </div>
        </>
    );
};

export default RecipeDetails;