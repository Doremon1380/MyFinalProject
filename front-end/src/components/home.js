import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./private-profile.css";
import { Helmet } from 'react-helmet'
import "./home.css"

import { FaHeart } from "react-icons/fa";

const TITLE = 'FoodShare - Recipe Inspiration';

function Home() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <div id="home-page-container">
                <p id="newest-recipes-title-in-home-page">Newest Recipes</p>
                <div className="recipes-section-in-home-page">
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                </div>
                <button className="load-more-recipes-button-in-home-page">SHOW MORE</button>
                <hr className="break-line-in-home-page"></hr>
                <p className="recipes-section-title-in-home-page">Most Rated Recipes</p>
                <div className="recipes-section-in-home-page">
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                </div>
                <button className="load-more-recipes-button-in-home-page">SHOW MORE</button>
                <hr className="break-line-in-home-page"></hr>
                <p className="recipes-section-title-in-home-page">Most Favorite Recipes</p>
                <div className="recipes-section-in-home-page">
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-home-page">
                        <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img className="recipe-photo-in-home-page" src="#" alt="(Recipe name)"></img>
                            <p className="recipe-name-in-home-page">Recipe name</p>
                        </a>
                        <div className="recipe-ratings-and-favorites-in-home-page">
                            <div className="recipe-ratings-in-home-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-home-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                </div>
                <button className="load-more-recipes-button-in-home-page">SHOW MORE</button>
            </div>
        </>
    );
};

export default Home;
