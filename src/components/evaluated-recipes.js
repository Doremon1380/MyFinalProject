import React from "react";
import SecondNavBar from "./second-nav-bar";
import HalfTopPart from "./half-top-part";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import "./evaluated-recipes.css";
import { FaHeart } from "react-icons/fa";
import Container from "react-bootstrap/Container";

const TITLE = 'Private Profile - FoodShare.com';

function EvaluatedRecipes() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <Container id="top-part-container-in-evaluated-recipes-page">
                <HalfTopPart />
                <nav id="group-buttons">
                    <a href="/about-me"><button className="group-button">About Me</button></a>
                    <a href="/favorite-recipes"><button className="group-button">My Favorites</button></a>
                    <a href="/follower-accounts"><button className="group-button">My Friends</button></a>
                    <a href="/made-recipes"><button className="group-button">I Made It</button></a>
                    <a href="/photos"><button className="group-button ">My Photos</button></a>
                    <a href="/evaluated-recipes"><button className="group-button selected-button">My Reviews</button></a>
                    <a href="/personal-recipes"><button className="group-button last-button"> Personal Recipes</button></a>
                </nav>
            </Container>
            <div id="evaluated-recipes-page">
                <div id="evaluated-recipes-sorting-options-in-evaluated-recipes-page">
                    <label for="select-evaluated-recipes-sorting-options-in-evaluated-recipes-page">Sort by:</label><br />
                    <select name="sort types" id="select-evaluated-recipes-sorting-options-in-evaluated-recipes-page">
                        <option value="Newest">Newest</option>
                        <option value="Rating">Rating</option>
                        <option value="Title">Title</option>
                    </select>
                </div>
                <div id="recipes-in-evaluated-recipes-page">
                    <div className="recipe-in-evaluated-recipes-page">
                        <button className="save-recipe-button-in-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <hr></hr>
                        <p className="own-review-in-evaluated-recipes-page">(Own Review)</p>
                    </div>
                    <div className="recipe-in-evaluated-recipes-page">
                        <button className="save-recipe-button-in-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <hr></hr>
                        <p className="own-review-in-evaluated-recipes-page">(Own Review)</p>
                    </div>
                    <div className="recipe-in-evaluated-recipes-page">
                        <button className="save-recipe-button-in-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <a href="/recipe-details">
                            <button className="add-review-button-in-evaluated-recipes-page">
                                <div className="add-icon-in-evaluated-recipes-page">
                                    <i class="bi bi-plus"></i>
                                </div>
                                <p>Add a review</p>
                            </button>
                        </a>
                    </div>
                    <div className="recipe-in-evaluated-recipes-page">
                        <button className="save-recipe-button-in-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <a href="/recipe-details">
                            <button className="add-review-button-in-evaluated-recipes-page">
                                <div className="add-icon-in-evaluated-recipes-page">
                                    <i class="bi bi-plus"></i>
                                </div>
                                <p>Add a review</p>
                            </button>
                        </a>
                    </div>
                    <div className="recipe-in-evaluated-recipes-page">
                        <button className="save-recipe-button-in-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <a href="/recipe-details">
                            <button className="add-review-button-in-evaluated-recipes-page">
                                <div className="add-icon-in-evaluated-recipes-page">
                                    <i class="bi bi-plus"></i>
                                </div>
                                <p>Add a review</p>
                            </button>
                        </a>
                    </div>
                    <div className="recipe-in-evaluated-recipes-page">
                        <button className="save-recipe-button-in-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <hr></hr>
                        <p className="own-review-in-evaluated-recipes-page">(Own Review)</p>
                    </div>
                    <div className="recipe-in-evaluated-recipes-page">
                        <button className="save-recipe-button-in-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <a href="/recipe-details">
                            <button className="add-review-button-in-evaluated-recipes-page">
                                <div className="add-icon-in-evaluated-recipes-page">
                                    <i class="bi bi-plus"></i>
                                </div>
                                <p>Add a review</p>
                            </button>
                        </a>
                    </div>
                    <div className="recipe-in-evaluated-recipes-page">
                        <button className="save-recipe-button-in-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <hr></hr>
                        <p className="own-review-in-evaluated-recipes-page">(Own Review)</p>
                    </div>
                    <div className="recipe-in-evaluated-recipes-page">
                        <button className="save-recipe-button-in-evaluated-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details">
                            <img alt="(Recipe name)" className="recipe-photo-in-evaluated-recipes-page"></img>
                            <p className="recipe-name-in-evaluated-recipes-page">(Recipe name)</p>
                        </a>
                        <p>My rating:</p>
                        <div className="own-ratings-in-evaluated-recipes-page">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <a href="/recipe-details">
                            <button className="add-review-button-in-evaluated-recipes-page">
                                <div className="add-icon-in-evaluated-recipes-page">
                                    <i class="bi bi-plus"></i>
                                </div>
                                <p>Add a review</p>
                            </button>
                        </a>
                    </div>
                </div>
                <button id="load-more-recipes-button-in-evaluated-recipes-page">SHOW MORE</button>
            </div>
        </>
    );
};

export default EvaluatedRecipes;