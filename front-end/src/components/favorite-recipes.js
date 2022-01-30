import React from "react";
import SecondNavBar from "./second-nav-bar";
import HalfTopPart from "./half-top-part";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import "./favorite-recipes.css";
import { FaHeart } from "react-icons/fa";
import Container from "react-bootstrap/Container";

const TITLE = 'Private Profile - FoodShare.com';

function FavoriteRecipes() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <Container id="top-part-container-in-favorite-recipes-page">
                <HalfTopPart />
                <nav id="group-buttons">
                    <a href="/about-me"><button className="group-button">About Me</button></a>
                    <a href="/favorite-recipes"><button className="group-button selected-button">My Favorites</button></a>
                    <a href="/follower-accounts"><button className="group-button">My Friends</button></a>
                    <a href="/made-recipes"><button className="group-button">I Made It</button></a>
                    <a href="/photos"><button className="group-button ">My Photos</button></a>
                    <a href="/evaluated-recipes"><button className="group-button">My Reviews</button></a>
                    <a href="/personal-recipes"><button className="group-button last-button"> Personal Recipes</button></a>
                </nav>
            </Container>
            <div id="favorite-recipes-page">
                <div id="top-section-of-favorite-recipes-page">
                    <div id="favorites-recipes-and-collections-in-favorite-recipes-page">
                        <a href="/collection-recipes">
                            <button>Collections</button>
                        </a>
                        <a href="/favorite-recipes">
                            <button>Recipes</button>
                        </a>
                    </div>
                    <div id="favorite-recipes-sorting-options-in-favorite-recipes-page">
                        <label for="select-favorite-recipes-sorting-options-in-favorite-recipes-page">Sort by:</label><br />
                        <select name="sort types" id="select-favorite-recipes-sorting-options-in-favorite-recipes-page">
                            <option value="Newest">Newest</option>
                            <option value="Rating">Rating</option>
                            <option value="Title">Title</option>
                        </select>
                    </div>
                </div>
                <div id="search-bar-in-favorite-recipes-page">
                    <form>
                        <input name="searchSavedRecipe" type="search" placeholder="Find a saved recipe" aria-label="Search" />
                        <button type="submit"><i className="bi bi-search"></i></button>
                    </form>
                </div>
                <div id="recipes-in-favorite-recipes-page">
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                        <button>
                            <i class="bi bi-plus"></i>
                            <p>Add to Collections</p>
                        </button>
                        <a href="/recipe-details"><p className="recipe-name-in-favorite-recipes-page">Recipe name</p></a>
                        <div className="recipe-ratings-and-favorites-in-favorite-recipes-page">
                            <div className="recipe-ratings-in-favorite-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-favorite-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="#">Author</a></p>
                    </div>
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                        <button>
                            <i class="bi bi-plus"></i>
                            <p>Add to Collections</p>
                        </button>
                        <a href="/recipe-details"><p className="recipe-name-in-favorite-recipes-page">Recipe name</p></a>
                        <div className="recipe-ratings-and-favorites-in-favorite-recipes-page">
                            <div className="recipe-ratings-in-favorite-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-favorite-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="#">Author</a></p>
                    </div>
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                        <button>
                            <p>Saved in <span>(number) collections</span></p>
                        </button>
                        <a href="/recipe-details"><p className="recipe-name-in-favorite-recipes-page">Recipe name</p></a>
                        <div className="recipe-ratings-and-favorites-in-favorite-recipes-page">
                            <div className="recipe-ratings-in-favorite-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-favorite-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="#">Author</a></p>
                    </div>
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                        <button>
                            <p>Saved in <span>(number) collections</span></p>
                        </button>
                        <a href="/recipe-details"><p className="recipe-name-in-favorite-recipes-page">Recipe name</p></a>
                        <div className="recipe-ratings-and-favorites-in-favorite-recipes-page">
                            <div className="recipe-ratings-in-favorite-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-favorite-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="#">Author</a></p>
                    </div>
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="#"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                        <button>
                            <i class="bi bi-plus"></i>
                            <p>Add to Collections</p>
                        </button>
                        <a href="#"><p className="recipe-name-in-favorite-recipes-page">Recipe name</p></a>
                        <div className="recipe-ratings-and-favorites-in-favorite-recipes-page">
                            <div className="recipe-ratings-in-favorite-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-favorite-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="#">Author</a></p>
                    </div>
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                        <button>
                            <i class="bi bi-plus"></i>
                            <p>Add to Collections</p>
                        </button>
                        <a href="/recipe-details"><p className="recipe-name-in-favorite-recipes-page">Recipe name</p></a>
                        <div className="recipe-ratings-and-favorites-in-favorite-recipes-page">
                            <div className="recipe-ratings-in-favorite-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-favorite-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="#">Author</a></p>
                    </div>
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="#"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                        <button>
                            <i class="bi bi-plus"></i>
                            <p>Add to Collections</p>
                        </button>
                        <a href="#"><p className="recipe-name-in-favorite-recipes-page">Recipe name</p></a>
                        <div className="recipe-ratings-and-favorites-in-favorite-recipes-page">
                            <div className="recipe-ratings-in-favorite-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-favorite-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="#">Author</a></p>
                    </div>
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                        <button>
                            <p>Saved in <span>(number) collections</span></p>
                        </button>
                        <a href="/recipe-details"><p className="recipe-name-in-favorite-recipes-page">Recipe name</p></a>
                        <div className="recipe-ratings-and-favorites-in-favorite-recipes-page">
                            <div className="recipe-ratings-in-favorite-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-favorite-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="#">Author</a></p>
                    </div>
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                        <button>
                            <p>Saved in <span>(number) collections</span></p>
                        </button>
                        <a href="/recipe-details"><p className="recipe-name-in-favorite-recipes-page">Recipe name</p></a>
                        <div className="recipe-ratings-and-favorites-in-favorite-recipes-page">
                            <div className="recipe-ratings-in-favorite-recipes-page">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <p>NoRs</p>
                            </div>
                            <div className="recipe-favorites-in-favorite-recipes-page">
                                <i><FaHeart /></i>
                                <p>NoFs</p>
                            </div>
                        </div>
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="#">Author</a></p>
                    </div>
                </div>
                <button id="load-more-recipes-button-in-favorite-recipes-page">SHOW MORE</button>
            </div>
        </>
    );
};

export default FavoriteRecipes;
