import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipe-details.css";
import { Helmet } from 'react-helmet'
import "./home.css"

import { FaAngleRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaMortarPestle } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";


const TITLE = '"Recipe name" - FoodShare';

function RecipeDetails() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <div id="recipe-details-page-container">
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
                <div id="number-of-ratings-reviews-and-photos-in-recipe-details-page">
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <p id="number-of-ratings-in-recipe-details-page">(number) Ratings</p>
                    <p id="number-of-reviews-in-recipe-details-page"><a href="#">(number) Reviews</a></p>
                    <p id="number-of-photos-in-recipe-details-page"><a href="#">(number) Photos</a></p>
                </div>
                <i><FaQuoteLeft /></i>
                <p id="introduction">Introduction</p>
                <div id="for-author-account-in-recipe-details-page">
                    <a href="#/"><img alt="avatar" id="author-avatar-image-in-recipe-details-page"></img></a>
                    <p>By <a href="#" id="author-account-in-recipe-details-page">Username</a></p>
                </div>
                <div id="functions-bar-in-recipe-details-page">
                    <button>
                        <i class="bi bi-suit-heart-fill"></i>
                        Save
                    </button>
                    <button>
                        <i className="bi bi-three-dots"></i>
                        Share
                    </button>
                </div>
                <div>
                    <div id="current-food-images-in-recipe-details-page">
                        <img id="current-food-image-of-author-in-recipe-details-page" alt="food image"></img>
                        <i class="bi bi-zoom-in"></i>
                        <div id="add-new-image-button-and-current-food-images-of-makers-in-recipe-details-page">
                            <button id="add-new-image-button-in-recipe-details-page">
                                <div>
                                    <i id="camera-icon-of-add-new-image-button-in-recipe-details-page" className="bi bi-camera-fill"></i>
                                    <i id="plus-icon-of-add-new-image-button-in-recipe-details-page" className="bi bi-plus"></i>
                                </div>
                            </button>
                            <img className="current-food-image-of-maker-in-recipe-details-page" alt="image 1"></img>
                            <img className="current-food-image-of-maker-in-recipe-details-page" alt="image 2"></img>
                            <img className="current-food-image-of-maker-in-recipe-details-page" alt="image 3"></img>
                        </div>
                    </div>
                    <div id="information-related-to-current-food-in-recipe-details-page">
                        <p><span>Prep:</span> (numbers) hrs and/or mins</p>
                        <p><span>Cook:</span> (numbers) hrs and/or mins</p>
                        <p><span>Additional:</span> (numbers) hrs and/or mins</p>
                        <p><span>Total:</span> (numbers) hrs and/or mins</p>
                        <p><span>Servings:</span> (numbers)</p>
                        <p><span>Yield:</span> (numbers + product type)</p>
                    </div>
                </div>
                <div id="move-to-ingredients-section-in-recipe-details-page">
                    <hr></hr>
                    <i className="bi bi-cart-plus-fill"></i>
                </div>
                <div id="ingredients-section-in-recipe-details-page">
                    <p>Ingredients</p>
                    <div id="ingredients-in-recipe-details-page">
                        <input className="ingredient-in-recipe-details-page" id="ingredient-1" type="checkbox" name="ingredients" value="ingredient-1"></input>
                        <label className="ingredient-label-in-recipe-details-page" for="ingredient-1">Ingredient 1</label>
                        <input className="ingredient-in-recipe-details-page" id="ingredient-2" type="checkbox" name="ingredients" value="ingredient-2"></input>
                        <label className="ingredient-label-in-recipe-details-page" for="ingredient-2">Ingredient 2</label>
                        <input className="ingredient-in-recipe-details-page" id="ingredient-3" type="checkbox" name="ingredients" value="ingredient-3"></input>
                        <label className="ingredient-label-in-recipe-details-page" for="ingredient-3">Ingredient 3</label>
                        <input className="ingredient-in-recipe-details-page" id="ingredient-4" type="checkbox" name="ingredients" value="ingredient-4"></input>
                        <label className="ingredient-label-in-recipe-details-page" for="ingredient-4">Ingredient 4</label>
                        <input className="ingredient-in-recipe-details-page" id="ingredient-5" type="checkbox" name="ingredients" value="ingredient-5"></input>
                        <label className="ingredient-label-in-recipe-details-page" for="ingredient-5">Ingredient 5</label>
                    </div>
                    <button>
                        ADD ALL INGREDIENTS TO SHOPPING LIST
                        <i className="bi bi-cart-check-fill"></i>
                    </button>
                </div>
                <div id="move-to-directions-section-in-recipe-details-page">
                    <hr></hr>
                    <i><FaMortarPestle /></i>
                </div>
                <div id="directions-section-in-recipe-details-page">
                    <p>Directions</p>
                    <i className="bi bi-check-circle-fill"></i>
                    <p>Step 1</p>
                    <p>Discription</p>
                    <i className="bi bi-check-circle-fill"></i>
                    <p>Step 2</p>
                    <p>Discription</p>
                    <i className="bi bi-check-circle-fill"></i>
                    <p>Step 3</p>
                    <p>Discription</p>
                    <i className="bi bi-check-circle-fill"></i>
                    <p>Step 4</p>
                    <p>Discription</p>
                    <i className="bi bi-check-circle-fill"></i>
                    <p>Step 5</p>
                    <p>Discription</p>
                    <button>
                        I Made It
                        <i><FaUtensils /></i>
                    </button>
                </div>
                <hr></hr>
                <p>Popular in (Country name) Recipes about (Type of Recipes)</p>
                <button><i className="bi bi-arrow-left-short"></i></button>
                <div id="other-popular-related-recipes-in-recipe-details-page">
                    <div className="suggested-recipe-in-recipe-details-page">
                        <button className="save-recipe-button-in-recipe-details-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details"><img className="suggested-recipe-photo-in-recipe-details-page" src="#" alt="image 1"></img></a>
                        <a href="/recipe-details"><p className="suggested-recipe-name-in-recipe-details-page">Recipe name</p></a>
                        <div className="suggested-recipe-ratings-and-favorites-in-recipe-details-page">
                            <div className="suggested-recipe-ratings-in-recipe-details-page">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
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
                        <a href="/recipe-details"><img className="suggested-recipe-photo-in-recipe-details-page" src="#" alt="image 2"></img></a>
                        <a href="/recipe-details"><p className="suggested-recipe-name-in-recipe-details-page">Recipe name</p></a>
                        <div className="suggested-recipe-ratings-and-favorites-in-recipe-details-page">
                            <div className="suggested-recipe-ratings-in-recipe-details-page">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
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
                        <a href="/recipe-details"><img className="suggested-recipe-photo-in-recipe-details-page" src="#" alt="image 3"></img></a>
                        <a href="/recipe-details"><p className="suggested-recipe-name-in-recipe-details-page">Recipe name</p></a>
                        <div className="suggested-recipe-ratings-and-favorites-in-recipe-details-page">
                            <div className="suggested-recipe-ratings-in-recipe-details-page">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
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
                        <a href="/recipe-details"><img className="suggested-recipe-photo-in-recipe-details-page" src="#" alt="image 4"></img></a>
                        <a href="/recipe-details"><p className="suggested-recipe-name-in-recipe-details-page">Recipe name</p></a>
                        <div className="suggested-recipe-ratings-and-favorites-in-recipe-details-page">
                            <div className="suggested-recipe-ratings-in-recipe-details-page">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="suggested-recipe-favorites-in-recipe-details-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="suggested-recipe-author-in-recipe-details-page">By <a href="#">Author</a></p>
                    </div>
                </div>
                <button><i className="bi bi-arrow-right-short"></i></button>
                <hr></hr>
                <div id="reviews-section-in-recipe-details-page">
                    <div id="reviews-section-title-and-read-more-reviews-in-recipe-details-page">
                        <p>Reviews (number)</p>
                        <div>
                            <a href="/all-reviews">Read More Reviews</a>
                            <i class="bi bi-chat-left-text-fill"></i>
                        </div>
                    </div>
                    <div id="reviews-section-background-1-in-recipe-details-page">
                        <div id="reviews-section-background-2-in-recipe-details-page">
                            <div id="add-rating-and-review-button-in-recipe-details-page">
                                <i className="bi bi-person-circle"></i>
                                <button>Add Rating & Review</button>
                            </div>
                            <hr></hr>
                            <div id="recipe-ratings-and-most-helpful-reviews-in-recipe-details-page">
                                <div id="recipe-ratings-in-recipe-details-page">
                                    <p>(Number) Ratings</p>
                                    <div id="first-number-of-stars-in-recipe-ratings-of-recipe-details-page">
                                        <p>(Number)</p>
                                        <div id="first-line-of-stars-in-recipe-ratings-of-recipe-details-page">
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="number-of-stars-in-recipe-ratings-of-recipe-details-page">
                                            <p>(Number)</p>
                                            <div className="line-of-stars-in-recipe-ratings-of-recipe-details-page">
                                                <i className="bi bi-star"></i>
                                                <i className="bi bi-star"></i>
                                                <i className="bi bi-star"></i>
                                                <i className="bi bi-star"></i>
                                            </div>
                                        </div>
                                        <div className="number-of-stars-in-recipe-ratings-of-recipe-details-page">
                                            <p>(Number) </p>
                                            <div className="line-of-stars-in-recipe-ratings-of-recipe-details-page">
                                                <i className="bi bi-star"></i>
                                                <i className="bi bi-star"></i>
                                                <i className="bi bi-star"></i>
                                            </div>
                                        </div>
                                        <div className="number-of-stars-in-recipe-ratings-of-recipe-details-page">
                                            <p>(Number) </p>
                                            <div className="line-of-stars-in-recipe-ratings-of-recipe-details-page">
                                                <i className="bi bi-star"></i>
                                                <i className="bi bi-star"></i>
                                            </div>
                                        </div>
                                        <div className="number-of-stars-in-recipe-ratings-of-recipe-details-page">
                                            <p>(Number) </p>
                                            <div className="line-of-stars-in-recipe-ratings-of-recipe-details-page">
                                                <i className="bi bi-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div id="most-helpful-positive-review-in-recipe-details-page">
                                    <p>Most helpful positive review</p>
                                    <a href="#">
                                        <img alt="avartar"></img>
                                        (Account Name)
                                    </a>
                                    <div className="stars-and-review-time-of-review-in-recipe-details-page">
                                        <div className="stars-of-review-in-recipe-details-page">
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                        </div>
                                        <p>(month/date/year)</p>
                                    </div>
                                    <p>Review</p>
                                    <p>Read More</p>
                                    <div className="number-of-helpful-of-review-in-recipe-details-page">
                                        <i><FaThumbsUp /></i>
                                        <p>Helpful (number)</p>
                                    </div>
                                </div>
                                <div id="most-helpful-critical-review-in-recipe-details-page">
                                    <p>Most helpful critical review</p>
                                    <a href="#">
                                        <img alt="avartar"></img>
                                        (Account Name)
                                    </a>
                                    <div className="stars-and-review-time-of-review-in-recipe-details-page">
                                        <div className="stars-of-review-in-recipe-details-page">
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                        </div>
                                        <p>(month/date/year)</p>
                                    </div>
                                    <p>Review</p>
                                    <p>Read More</p>
                                    <div className="number-of-helpful-of-review-in-recipe-details-page">
                                        <i><FaThumbsUp /></i>
                                        <p>Helpful (number)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p id="most-positive-reviews-title-in-recipe-details-page">Most Positive</p>
                        <p>Least Positive</p>
                        <p>Newest</p>
                    </div>
                    <div id="reviews-in-recipe-details-page">
                        <div className="review-in-recipe-details-page">
                            <a href="#">
                                <img alt="avartar"></img>
                                (Account Name)
                            </a>
                            <div>
                                <div>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                </div>
                                <p>(month/date/year)</p>
                            </div>
                            <p>Review</p>
                            <p>Read More</p>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                        <div className="review-in-recipe-details-page">
                            <a href="#">
                                <img alt="avartar"></img>
                                (Account Name)
                            </a>
                            <div>
                                <div>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                </div>
                                <p>(month/date/year)</p>
                            </div>
                            <p>Review</p>
                            <p>Read More</p>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                        <div className="review-in-recipe-details-page">
                            <a href="#">
                                <img alt="avartar"></img>
                                (Account Name)
                            </a>
                            <div>
                                <div>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                </div>
                                <p>(month/date/year)</p>
                            </div>
                            <p>Review</p>
                            <p>Read More</p>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                        <div className="review-in-recipe-details-page">
                            <a href="#">
                                <img alt="avartar"></img>
                                (Account Name)
                            </a>
                            <div>
                                <div>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                </div>
                                <p>(month/date/year)</p>
                            </div>
                            <p>Review</p>
                            <p>Read More</p>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                        <div className="review-in-recipe-details-page">
                            <a href="#">
                                <img alt="avartar"></img>
                                (Account Name)
                            </a>
                            <div>
                                <div>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                </div>
                                <p>(month/date/year)</p>
                            </div>
                            <p>Review</p>
                            <p>Read More</p>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                        <div className="review-in-recipe-details-page">
                            <a href="#">
                                <img alt="avartar"></img>
                                (Account Name)
                            </a>
                            <div>
                                <div>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                </div>
                                <p>(month/date/year)</p>
                            </div>
                            <p>Review</p>
                            <p>Read More</p>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                        <div className="review-in-recipe-details-page">
                            <a href="#">
                                <img alt="avartar"></img>
                                (Account Name)
                            </a>
                            <div>
                                <div>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                </div>
                                <p>(month/date/year)</p>
                            </div>
                            <p>Review</p>
                            <p>Read More</p>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                        <div className="review-in-recipe-details-page">
                            <a href="#">
                                <img alt="avartar"></img>
                                (Account Name)
                            </a>
                            <div>
                                <div>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                </div>
                                <p>(month/date/year)</p>
                            </div>
                            <p>Review</p>
                            <p>Read More</p>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                        <div className="review-in-recipe-details-page">
                            <a href="#">
                                <img alt="avartar"></img>
                                (Account Name)
                            </a>
                            <div>
                                <div>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                    <i className="bi bi-star"></i>
                                </div>
                                <p>(month/date/year)</p>
                            </div>
                            <p>Review</p>
                            <p>Read More</p>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                    </div>
                    <a href="/all-reviews"><button id="more-reviews-button-in-recipe-details-page">More Reviews</button></a>
                </div>
            </div>
        </>
    );
};

export default RecipeDetails;