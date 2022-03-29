import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./country-recipes.css"
import { Helmet } from 'react-helmet'

import { FaChevronRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const TITLE = '(Country) Recipes - FoodShare.com';

function CountryRecipes() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <div id="country-recipes-page">
                <div id="top-section-of-country-recipes-page"></div>
                <div id="titles-with-image-and-recipes-in-country-recipes-page">
                    <div id="page-titles-of-country-recipes-page">
                        <div>
                            <a href="/foodshare.com">Home</a>
                            <i><FaChevronRight /></i>
                            <a href="/world-cuisine">World Cuisine</a>
                            <i><FaChevronRight /></i>
                            <a href="/country-recipes">(Country) Recipes</a>
                        </div>
                        <h1>(Country) Recipes</h1>
                    </div>
                    <div id="titles-with-image-in-country-recipes-page">
                        <a href="/specific-type-of-country-recipes"><img ></img><p>(Country) Breakfast Recipes</p></a>
                        <a href="/specific-type-of-country-recipes"><img ></img><p>(Country) Lunch Recipes</p></a>
                        <a href="/specific-type-of-country-recipes"><img ></img><p>(Country) Dinner Recipes</p></a>
                        <a href="/specific-type-of-country-recipes"><img ></img><p>(Country) Appetizer and Snack Recipes</p></a>
                        <a href="/specific-type-of-country-recipes"><img ></img><p>(Country) Dessert Recipes</p></a>
                        <a href="/specific-type-of-country-recipes"><img ></img><p>(Country) Main Dish Recipes</p></a>
                        <a href="/specific-type-of-country-recipes"><img ></img><p>(Country) Side Dish Recipes</p></a>
                        <a href="/specific-type-of-country-recipes"><img ></img><p>(Country) Drink Recipes</p></a>
                    </div>
                    <div id="button-to-return-to-previous-recipe-titles-and-button-to-go-to-next-recipe-titles-in-country-recipes-page">
                        <button id="button-to-return-to-previous-recipe-titles-in-country-recipes-page"><i className="bi bi-arrow-left-short"></i></button>
                        <button id="button-to-go-to-next-recipe-titles-in-country-recipes-page"><i className="bi bi-arrow-right-short"></i></button>
                    </div>
                    <div id="recipes-in-country-recipes-page">
                        <h2 className="recipes-section-title-in-country-recipes-page">Newest Recipes</h2>
                        <div className="recipes-section-in-country-recipes-page">
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="load-more-recipes-button-in-country-recipes-page">SHOW MORE</button>
                        <hr className="break-line-in-country-recipes-page"></hr>
                        <h2 className="recipes-section-title-in-country-recipes-page">Most Rated Recipes</h2>
                        <div className="recipes-section-in-country-recipes-page">
                        <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="load-more-recipes-button-in-country-recipes-page">SHOW MORE</button>
                        <hr className="break-line-in-country-recipes-page"></hr>
                        <h2 className="recipes-section-title-in-country-recipes-page">Most Favorite Recipes</h2>
                        <div className="recipes-section-in-country-recipes-page">
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-country-recipes-page">
                                <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-country-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-country-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-country-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-country-recipes-page">
                                            <div className="recipe-ratings-in-country-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-country-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-country-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="load-more-recipes-button-in-country-recipes-page">SHOW MORE</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CountryRecipes;