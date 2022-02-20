import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipe-results.css";
import { Helmet } from 'react-helmet'
import { FaMinusCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


const TITLE = 'Account Settings - FoodShare.com';

function RecipeResults() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <div id="recipe-results-page">
                <div id="top-section-of-recipe-results-page"></div>
                <div id="recipes-filter-and-results-in-recipe-results-page">
                    <div id="recipe-results-for-keyword-in-recipe-results-page">
                        <h1>Recipe Results for (keyword)</h1>
                    </div>
                    <div>
                        <div id="recipes-filter-in-recipe-results-page">
                            <form>
                                <div>
                                    <p>Filters</p>
                                    <button>Clear all</button>
                                </div>
                                <div>
                                    <div id="recipe-or-keyword-in-recipes-filter-of-recipe-results-page">
                                        <p>Recipe or keyword</p>
                                        <input placeholder="Keywords" name="recipeOrKeyword"></input>
                                    </div>
                                    <div>
                                        <p>Ingredients</p>
                                        <p>Include these ingredients</p>
                                        <div>
                                            <input placeholder="Include ingredients" name="includeIngredients"></input>
                                            <i class="bi bi-plus-circle-fill"></i>
                                        </div>
                                        <p>Do not include these ingredients</p>
                                        <div>
                                            <input placeholder="Exclude ingredients"  name="excludeIngredients"></input>
                                            <i><FaMinusCircle /></i>
                                        </div>
                                    </div>
                                </div>
                                <button id="show-more-results-button-in-recipe-results-page">SHOW RESULTS</button>
                            </form>
                        </div>
                        <div id="recipes-in-recipe-results-page">
                            <p id="number-of-recipes-in-recipe-results-page">(number) Results</p>
                            <div>
                                <div className="recipe-in-recipe-results-page">
                                    <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                        <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                    </a>
                                    <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                        <div className="recipe-ratings-in-recipe-results-page">
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <p>NoRs</p>
                                        </div>
                                        <div className="recipe-favorites-in-recipe-results-page">
                                            <i><FaHeart /></i>
                                            <p>NoFs</p>
                                        </div>
                                    </div>
                                    <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                </div>
                                <div className="recipe-in-recipe-results-page">
                                    <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                        <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                    </a>
                                    <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                        <div className="recipe-ratings-in-recipe-results-page">
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <p>NoRs</p>
                                        </div>
                                        <div className="recipe-favorites-in-recipe-results-page">
                                            <i><FaHeart /></i>
                                            <p>NoFs</p>
                                        </div>
                                    </div>
                                    <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                </div>
                                <div className="recipe-in-recipe-results-page">
                                    <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                        <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                    </a>
                                    <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                        <div className="recipe-ratings-in-recipe-results-page">
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <p>NoRs</p>
                                        </div>
                                        <div className="recipe-favorites-in-recipe-results-page">
                                            <i><FaHeart /></i>
                                            <p>NoFs</p>
                                        </div>
                                    </div>
                                    <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                </div>
                                <div className="recipe-in-recipe-results-page">
                                    <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                        <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                    </a>
                                    <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                        <div className="recipe-ratings-in-recipe-results-page">
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <p>NoRs</p>
                                        </div>
                                        <div className="recipe-favorites-in-recipe-results-page">
                                            <i><FaHeart /></i>
                                            <p>NoFs</p>
                                        </div>
                                    </div>
                                    <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                </div>
                                <div className="recipe-in-recipe-results-page">
                                    <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                        <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                    </a>
                                    <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                        <div className="recipe-ratings-in-recipe-results-page">
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <p>NoRs</p>
                                        </div>
                                        <div className="recipe-favorites-in-recipe-results-page">
                                            <i><FaHeart /></i>
                                            <p>NoFs</p>
                                        </div>
                                    </div>
                                    <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                </div>
                                <div className="recipe-in-recipe-results-page">
                                    <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                        <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                    </a>
                                    <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                        <div className="recipe-ratings-in-recipe-results-page">
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <p>NoRs</p>
                                        </div>
                                        <div className="recipe-favorites-in-recipe-results-page">
                                            <i><FaHeart /></i>
                                            <p>NoFs</p>
                                        </div>
                                    </div>
                                    <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                </div>
                                <div className="recipe-in-recipe-results-page">
                                    <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                        <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                    </a>
                                    <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                        <div className="recipe-ratings-in-recipe-results-page">
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <p>NoRs</p>
                                        </div>
                                        <div className="recipe-favorites-in-recipe-results-page">
                                            <i><FaHeart /></i>
                                            <p>NoFs</p>
                                        </div>
                                    </div>
                                    <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                </div>
                                <div className="recipe-in-recipe-results-page">
                                    <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                        <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                    </a>
                                    <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                        <div className="recipe-ratings-in-recipe-results-page">
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <p>NoRs</p>
                                        </div>
                                        <div className="recipe-favorites-in-recipe-results-page">
                                            <i><FaHeart /></i>
                                            <p>NoFs</p>
                                        </div>
                                    </div>
                                    <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                </div>
                                <div className="recipe-in-recipe-results-page">
                                    <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                        <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                    </a>
                                    <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                        <div className="recipe-ratings-in-recipe-results-page">
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <p>NoRs</p>
                                        </div>
                                        <div className="recipe-favorites-in-recipe-results-page">
                                            <i><FaHeart /></i>
                                            <p>NoFs</p>
                                        </div>
                                    </div>
                                    <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                </div>
                                <div className="recipe-in-recipe-results-page">
                                    <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                        <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                    </a>
                                    <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                        <div className="recipe-ratings-in-recipe-results-page">
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <i class="bi bi-star"></i>
                                            <p>NoRs</p>
                                        </div>
                                        <div className="recipe-favorites-in-recipe-results-page">
                                            <i><FaHeart /></i>
                                            <p>NoFs</p>
                                        </div>
                                    </div>
                                    <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                </div>
                            </div>
                            <button id="load-more-recipes-button-in-recipe-results-page">SHOW MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeResults;