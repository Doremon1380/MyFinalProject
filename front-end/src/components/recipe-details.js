import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipe-details.css";
import { Helmet } from 'react-helmet'

import { FaAngleRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaMortarPestle } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const TITLE = '"Recipe name" - FoodShare.com';

function Review({ children }) {
    const review = children;
    if (review.length > 200) {
        return (
            <div id="review-in-recipe-details-page">
                <p>{review.slice(0, 200)}...</p>
                <a href="#recipe-review-in-recipe-details-page">Read More</a>
            </div>
        )
    }
    else {
        return (
            <div id="review-in-recipe-details-page">
                <p>{review}</p>
            </div>
        )
    }
}

function RecipeDetails() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="recipe-details-page-container">
                <div id="route-to-recipe-in-recipe-details-page">
                    <a href="/">Home</a>
                    <i><FaAngleRight /></i>
                    <a href="/types-of-recipes">Recipes</a>
                    <i><FaAngleRight /></i>
                    <a href="/specific-type-of-recipes">(Type) Recipes</a>
                    <i><FaAngleRight /></i>
                    <a href="/country-recipes">(Country) Recipes</a>
                    <i><FaAngleRight /></i>
                    <a href="/specific-type-of-country-recipes">(Country) (Type) Recipes</a>
                </div>
                <h1>(Recipe name)</h1>
                <div id="number-of-ratings-reviews-and-photos-in-recipe-details-page">
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <p id="number-of-ratings-in-recipe-details-page">(number) Ratings</p>
                    <p id="number-of-reviews-in-recipe-details-page"><a href="#reviews-section-in-recipe-details-page">(number) Reviews</a></p>
                    <p id="number-of-photos-in-recipe-details-page"><a href="#recipe-photos-in-recipe-details-page">(number) Photos</a></p>
                </div>
                <i><FaQuoteLeft /></i>
                <p id="introduction">Introduction</p>
                <div id="for-author-account-in-recipe-details-page">
                    <a href="/public-profile-about-me"><img alt="avatar" id="author-avatar-image-in-recipe-details-page"></img></a>
                    <p>By <a href="/public-profile-about-me" id="author-account-in-recipe-details-page">Username</a></p>
                </div>
                <div id="functions-bar-in-recipe-details-page">
                    <button>
                        <i class="bi bi-suit-heart-fill"></i>
                        Save
                    </button>
                    <a href="#share-recipe-in-recipe-details-page">
                        <button>
                            <i className="bi bi-three-dots"></i>
                            Share
                        </button>
                    </a>
                </div>
                <div>
                    <div id="current-food-images-in-recipe-details-page">
                        <a href="#recipe-photos-in-recipe-details-page"><img id="current-food-image-of-author-in-recipe-details-page" alt="food image"></img></a>
                        <i class="bi bi-zoom-in"></i>
                        <div id="add-new-image-button-and-current-food-images-of-makers-in-recipe-details-page">
                            <a href="#add-recipe-review-in-recipe-details-page">
                                <button id="add-new-image-button-in-recipe-details-page">
                                    <div>
                                        <i id="camera-icon-of-add-new-image-button-in-recipe-details-page" className="bi bi-camera-fill"></i>
                                    </div>
                                </button>
                            </a>
                            <a href="#recipe-photos-in-recipe-details-page"><img className="current-food-image-of-maker-in-recipe-details-page" alt="image 1"></img></a>
                            <a href="#recipe-photos-in-recipe-details-page"><img className="current-food-image-of-maker-in-recipe-details-page" alt="image 2"></img></a>
                            <a href="#recipe-photos-in-recipe-details-page"><img className="current-food-image-of-maker-in-recipe-details-page" alt="image 3"></img></a>
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
                    <form id="ingredients-in-recipe-details-page" action="" name="ingredientsOfRecipe">
                        <input className="ingredient-in-recipe-details-page" id="ingredient-1" type="checkbox" name="ingredients" value="ingredient-1" form="ingredientsOfRecipe"></input>
                        <label className="ingredient-label-in-recipe-details-page" for="ingredient-1">Ingredient 1</label>
                        <input className="ingredient-in-recipe-details-page" id="ingredient-2" type="checkbox" name="ingredients" value="ingredient-2" form="ingredientsOfRecipe"></input>
                        <label className="ingredient-label-in-recipe-details-page" for="ingredient-2">Ingredient 2</label>
                        <input className="ingredient-in-recipe-details-page" id="ingredient-3" type="checkbox" name="ingredients" value="ingredient-3" form="ingredientsOfRecipe"></input>
                        <label className="ingredient-label-in-recipe-details-page" for="ingredient-3">Ingredient 3</label>
                        <input className="ingredient-in-recipe-details-page" id="ingredient-4" type="checkbox" name="ingredients" value="ingredient-4" form="ingredientsOfRecipe"></input>
                        <label className="ingredient-label-in-recipe-details-page" for="ingredient-4">Ingredient 4</label>
                        <input className="ingredient-in-recipe-details-page" id="ingredient-5" type="checkbox" name="ingredients" value="ingredient-5" form="ingredientsOfRecipe"></input>
                        <label className="ingredient-label-in-recipe-details-page" for="ingredient-5">Ingredient 5</label>
                    </form>
                    <button type="submit" form="ingredientsOfRecipe">
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
                        <p className="suggested-recipe-author-in-recipe-details-page">By <a href="/public-profile-personal-recipes">Author</a></p>
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
                        <p className="suggested-recipe-author-in-recipe-details-page">By <a href="/public-profile-personal-recipes">Author</a></p>
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
                        <p className="suggested-recipe-author-in-recipe-details-page">By <a href="/public-profile-personal-recipes">Author</a></p>
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
                        <p className="suggested-recipe-author-in-recipe-details-page">By <a href="/public-profile-personal-recipes">Author</a></p>
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
                                <a href="#add-recipe-review-in-recipe-details-page"><button>Add Rating & Review</button></a>
                            </div>
                            <hr></hr>
                            <div id="recipe-ratings-and-most-helpful-reviews-in-recipe-details-page">
                                <div id="recipe-ratings-in-recipe-details-page">
                                    <p>(Number) Ratings</p>
                                    <div id="first-number-of-stars-in-recipe-ratings-of-recipe-details-page">
                                        <p>(Number)</p>
                                        <div id="first-line-of-stars-in-recipe-ratings-of-recipe-details-page">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="number-of-stars-in-recipe-ratings-of-recipe-details-page">
                                            <p>(Number)</p>
                                            <div className="line-of-stars-in-recipe-ratings-of-recipe-details-page">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                        </div>
                                        <div className="number-of-stars-in-recipe-ratings-of-recipe-details-page">
                                            <p>(Number) </p>
                                            <div className="line-of-stars-in-recipe-ratings-of-recipe-details-page">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                        </div>
                                        <div className="number-of-stars-in-recipe-ratings-of-recipe-details-page">
                                            <p>(Number) </p>
                                            <div className="line-of-stars-in-recipe-ratings-of-recipe-details-page">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                        </div>
                                        <div className="number-of-stars-in-recipe-ratings-of-recipe-details-page">
                                            <p>(Number) </p>
                                            <div className="line-of-stars-in-recipe-ratings-of-recipe-details-page">
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div id="most-helpful-positive-review-in-recipe-details-page">
                                    <p>Most helpful positive review</p>
                                    <a href="/public-profile-about-me">
                                        <img alt="avartar"></img>
                                        (Account Name)
                                    </a>
                                    <div className="rating-and-review-time-of-review-in-recipe-details-page">
                                        <div className="rating-of-review-in-recipe-details-page">
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                        </div>
                                        <p>(month/date/year)</p>
                                    </div>
                                    <Review>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Review>
                                    <div className="number-of-helpful-of-review-in-recipe-details-page">
                                        <i><FaThumbsUp /></i>
                                        <p>Helpful (number)</p>
                                    </div>
                                </div>
                                <div id="most-helpful-critical-review-in-recipe-details-page">
                                    <p>Most helpful critical review</p>
                                    <a href="/public-profile-about-me">
                                        <img alt="avartar"></img>
                                        (Account Name)
                                    </a>
                                    <div className="rating-and-review-time-of-review-in-recipe-details-page">
                                        <div className="rating-of-review-in-recipe-details-page">
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                        </div>
                                        <p>(month/date/year)</p>
                                    </div>
                                    <Review>Review</Review>
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
                    <div id="user-reviews-in-recipe-details-page">
                        <div className="user-review-in-recipe-details-page">
                            <a href="/public-profile-about-me">
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
                            <Review>Review</Review>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                        <div className="user-review-in-recipe-details-page">
                            <a href="/public-profile-about-me">
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
                            <Review>Review</Review>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                        <div className="user-review-in-recipe-details-page">
                            <a href="/public-profile-about-me">
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
                            <Review>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</Review>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                        <div className="user-review-in-recipe-details-page">
                            <a href="/public-profile-about-me">
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
                            <Review>Review</Review>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                        <div className="user-review-in-recipe-details-page">
                            <a href="/public-profile-about-me">
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
                            <Review>Lorem ipsum</Review>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                        <div className="user-review-in-recipe-details-page">
                            <a href="/public-profile-about-me">
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
                            <Review>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</Review>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                        <div className="user-review-in-recipe-details-page">
                            <a href="/public-profile-about-me">
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
                            <Review>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Review>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                        <div className="user-review-in-recipe-details-page">
                            <a href="/public-profile-about-me">
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
                            <Review>Review</Review>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                        <div className="user-review-in-recipe-details-page">
                            <a href="/public-profile-about-me">
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
                            <Review>Review</Review>
                            <div>
                                <i><FaThumbsUp /></i>
                                <p>Helpful (number)</p>
                            </div>
                        </div>
                    </div>
                    <a href="/all-reviews"><button id="more-reviews-button-in-recipe-details-page">More Reviews</button></a>
                    <div id="share-recipe-in-recipe-details-page">
                        <div id="share-recipe-popup-in-recipe-details-page">
                            <div id="title-and-close-button-of-share-recipe-popup-in-recipe-details-page">
                                <p id="title-of-share-recipe-popup-in-recipe-details-page">Share</p>
                                <a id="close-button-of-share-recipe-popup-in-recipe-details-page" href="#">&times;</a>
                            </div>
                            <div id="social-networks-to-share-recipe-of-share-recipe-popup-in-recipe-details-page">
                                <div>
                                    <button id="facebook-button-of-share-recipe-popup-in-recipe-details-page">{<FaFacebookF />}</button>
                                    <p>FACEBOOK</p>
                                </div>
                                <div>
                                    <button id="pinterest-button-of-share-recipe-popup-in-recipe-details-page">{<FaPinterestP />}</button>
                                    <p>PINTEREST</p>
                                </div>
                                <div>
                                    <button id="twitter-button-of-share-recipe-popup-in-recipe-details-page">{<FaTwitter />}</button>
                                    <p>TWITTER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="recipe-photos-in-recipe-details-page">
                        <div id="recipe-photos-popup-in-recipe-details-page">
                            <div id="title-and-close-button-of-recipe-photos-popup-in-recipe-details-page">
                                <p id="title-of-recipe-photos-popup-in-recipe-details-page">Recipe Photos</p>
                                <a id="close-button-of-recipe-photos-popup-in-recipe-details-page" href="#">&times;</a>
                            </div>
                            <div id="recipe-photos-of-popup-in-recipe-details-page">
                                <div id="displayed-recipe-photos-section-of-recipe-photos-of-popup-in-recipe-details-page">
                                    <p id="title-of-displayed-recipe-photos-section-of-recipe-photos-of-popup-in-recipe-details-page">Photos of (Recipe name)</p>
                                    <div id="back-and-next-button-of-recipe-photos-popup-in-recipe-details-page">
                                        <button id="back-button-of-recipe-photos-popup-in-recipe-details-page"><i class="bi bi-chevron-left"></i></button>
                                        <button id="next-button-of-recipe-photos-popup-in-recipe-details-page"><i class="bi bi-chevron-right"></i></button>
                                    </div>
                                    <img id="displayed-recipe-photo-of-recipe-photos-popup-in-recipe-details-page"></img>
                                    <div id="number-of-recipe-photos-and-recipe-name-of-recipe-photos-of-popup-in-recipe-details-page">
                                        <p id="number-of-recipe-photos-of-recipe-photos-popup-in-recipe-details-page">(number) of (sum)</p>
                                        <p id="recipe-name-of-recipe-photos-of-popup-in-recipe-details-page">(Recipe name)</p>
                                    </div>
                                    <div id="user-account-of-the-author-who-made-the-recipe-of-recipe-photos-popup-in-recipe-details-page">
                                        <img id="author-avatar-image-of-recipe-photos-popup-in-recipe-details-page" alt="avatar"></img>
                                        <p id="author-account-of-recipe-photos-popup-in-recipe-details-page">User name</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form id="add-recipe-review-in-recipe-details-page" action="">
                        <div id="add-recipe-review-popup-in-recipe-details-page">
                            <div id="title-and-close-button-of-add-recipe-review-popup-in-recipe-details-page">
                                <div>
                                    <i class="bi bi-chat-left-text-fill"></i>
                                    <p id="title-of-add-recipe-review-popup-in-recipe-details-page">Review this recipe</p>
                                </div>
                                <a id="close-button-of-add-recipe-review-popup-in-recipe-details-page" href="#">&times;</a>
                            </div>
                            <div id="add-recipe-review-section-of-add-recipe-review-popup-in-recipe-details-page">
                                <p id="name-of-recipe-of-add-recipe-review-popup-in-recipe-details-page">(Recipe name)</p>
                                <div id="add-recipe-review-and-add-photo-button-of-add-recipe-review-popup-in-recipe-details-page">
                                    <div id="add-recipe-rating-and-add-recipe-review-of-add-recipe-review-popup-in-recipe-details-page">
                                        <div id="add-recipe-rating-of-add-recipe-review-popup-in-recipe-details-page">
                                            <div>
                                                <i className="bi bi-star"></i>
                                                <i className="bi bi-star"></i>
                                                <i className="bi bi-star"></i>
                                                <i className="bi bi-star"></i>
                                                <i className="bi bi-star"></i>
                                            </div>
                                            <p>Your rating</p>
                                        </div>
                                        <textarea id="add-recipe-review-of-add-recipe-review-popup-in-recipe-details-page" placeholder="What did you think about this recipe? Did you make any changes when you made it?" name="review" rows="9" cols="40"></textarea>
                                    </div>
                                    <button id="add-photo-button-of-add-recipe-review-popup-in-recipe-details-page">
                                        <div>
                                            <i id="camera-icon-of-add-photo-button-of-add-recipe-review-popup-in-recipe-details-page" className="bi bi-camera camera-icon"></i>
                                        </div>
                                        <p>Add Photo</p>
                                    </button>
                                </div>
                                <div>
                                    <button id="cancle-button-of-add-recipe-review-popup-in-recipe-details-page"><a href="#">Cancel</a></button>
                                    <button type="submit" form="add-recipe-review-in-recipe-details-page" id="submit-button-of-add-recipe-review-popup-in-recipe-details-page">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div id="recipe-review-in-recipe-details-page">
                        <div id="recipe-review-popup-in-recipe-details-page">
                            <div id="title-and-close-button-of-recipe-review-popup-in-recipe-details-page">
                                <p id="title-of-recipe-review-popup-in-recipe-details-page">Recipe Reviews</p>
                                <a id="close-button-of-recipe-review-popup-in-recipe-details-page" href="#">&times;</a>
                            </div>
                            <div id="recipe-review-section-of-recipe-review-popup-in-recipe-details-page">
                                <p id="title-of-recipe-review-section-of-recipe-review-popup-in-recipe-details-page">Review for (Recipe Name)</p>
                                <a href="/public-profile-about-me">
                                    <img alt="avartar"></img>
                                    (Account Name)
                                </a>
                                <div id="rating-and-review-time-in-recipe-review-popup">
                                    <div id="rating-of-review-in-recipe-review-popup">
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                    <p>(month/date/year)</p>
                                </div>
                                <p>Review</p>
                                <div id="number-of-helpful-of-review-in-recipe-review-popup">
                                    <i><FaThumbsUp /></i>
                                    <p>Helpful (number)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeDetails;