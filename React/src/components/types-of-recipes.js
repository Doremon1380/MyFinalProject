import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./types-of-recipes.css"
import { Helmet } from 'react-helmet'

import { FaChevronRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const TITLE = 'Recipes - FoodShare.com';

function TypesOfRecipes() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="types-of-recipes-page">
                <div id="top-section-of-types-of-recipes-page"></div>
                <div id="titles-with-image-and-recipes-in-types-of-recipes-page">
                    <div id="page-titles-of-types-of-recipes-page">
                        <div>
                            <a href="/">Home</a>
                            <i><FaChevronRight /></i>
                            <a href="/types-of-recipes">Recipes</a>
                        </div>
                        <h1>Recipes</h1>
                    </div>
                    <div id="titles-with-image-in-types-of-recipes-page">
                        <a href="/specific-type-of-recipes"><img ></img><p>Breakfast Recipes</p></a>
                        <a href="/specific-type-of-recipes"><img ></img><p>Lunch Recipes</p></a>
                        <a href="/specific-type-of-recipes"><img ></img><p>Dinner Recipes</p></a>
                        <a href="/specific-type-of-recipes"><img ></img><p>Appetizer and Snack Recipes</p></a>
                        <a href="/specific-type-of-recipes"><img ></img><p>Dessert Recipes</p></a>
                        <a href="/specific-type-of-recipes"><img ></img><p>Main Dish Recipes</p></a>
                        <a href="/specific-type-of-recipes"><img ></img><p>Side Dish Recipes</p></a>
                        <a href="/specific-type-of-recipes"><img ></img><p>Drink Recipes</p></a>
                    </div>
                    <div id="button-to-return-to-previous-recipe-titles-and-button-to-go-to-next-recipe-titles-in-types-of-recipes-page">
                        <button id="button-to-return-to-previous-recipe-titles-in-types-of-recipes-page"><i className="bi bi-arrow-left-short"></i></button>
                        <button id="button-to-go-to-next-recipe-titles-in-types-of-recipes-page"><i className="bi bi-arrow-right-short"></i></button>
                    </div>
                    <div id="recipes-in-types-of-recipes-page">
                        <h2 className="recipes-section-title-in-types-of-recipes-page">Newest Recipes</h2>
                        <div className="recipes-section-in-types-of-recipes-page">
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="load-more-recipes-button-in-types-of-recipes-page">SHOW MORE</button>
                        <hr className="break-line-in-types-of-recipes-page"></hr>
                        <h2 className="recipes-section-title-in-types-of-recipes-page">Most Rated Recipes</h2>
                        <div className="recipes-section-in-types-of-recipes-page">
                        <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="load-more-recipes-button-in-types-of-recipes-page">SHOW MORE</button>
                        <hr className="break-line-in-types-of-recipes-page"></hr>
                        <h2 className="recipes-section-title-in-types-of-recipes-page">Most Favorite Recipes</h2>
                        <div className="recipes-section-in-types-of-recipes-page">
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-types-of-recipes-page">
                                <button className="save-recipe-button-in-types-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-types-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-types-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-types-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-types-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-types-of-recipes-page">
                                            <div className="recipe-ratings-in-types-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-types-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-types-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="load-more-recipes-button-in-types-of-recipes-page">SHOW MORE</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TypesOfRecipes;