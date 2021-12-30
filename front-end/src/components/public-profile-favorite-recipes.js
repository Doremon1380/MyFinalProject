import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./public-profile-favorite-recipes.css";
import { Helmet } from 'react-helmet'
import { FaHeart } from "react-icons/fa";

import Container from "react-bootstrap/Container";
import PublicProfileTopPart from "./public-profile-top-part";

const TITLE = 'Public Profile - FoodShare.com';

function PublicProfileFavoriteRecipes() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <Container id="top-part-container-in-public-profile-favorite-recipes-page">
                <PublicProfileTopPart />
            </Container>
            <div id="public-profile-favorite-recipes-page">
                <div>
                    <div>
                        <p>About me</p>
                        <p>(Discription)</p>
                        <p>My location</p>
                        <p>(Discription)</p>
                        <p>Connect with me</p>
                        <p>(Discription)</p>
                    </div>
                    <div>
                        <p>Followers (number)</p>
                        <div>
                            <a><img></img></a>
                            <a><img></img></a>
                            <a><img></img></a>
                            <a><img></img></a>
                            <a><img></img></a>
                            <a><img></img></a>
                            <a><img></img></a>
                            <a><img></img></a>
                            <a><img></img></a>
                            <button>
                                <i class="bi bi-plus"></i>
                                <p>(number)</p>
                            </button>
                        </div>
                    </div>
                    <div>
                        <p>Following (number)</p>
                        <div>
                            <a><img></img></a>
                            <a><img></img></a>
                            <a><img></img></a>
                            <a><img></img></a>
                            <a><img></img></a>
                            <a><img></img></a>
                            <a><img></img></a>
                            <a><img></img></a>
                            <a><img></img></a>
                            <button>
                                <i class="bi bi-plus"></i>
                                <p>(number)</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <nav id="group-buttons-in-public-profile-favorite-recipes-page">
                        <a href="#"><button className="group-button-in-public-profile-favorite-recipes-page">About Me</button></a>
                        <a href="/www.foodshare.com/cook/cook-id/favorite-recipes/"><button className="group-button-in-public-profile-favorite-recipes-page selected-button-in-public-profile-favorite-recipes-page">Favorites</button></a>
                        <a href="#"><button className="group-button-in-public-profile-favorite-recipes-page">I Made It</button></a>
                        <a href="#"><button className="group-button-in-public-profile-favorite-recipes-page">Reviews</button></a>
                        <a href="#"><button className="group-button-in-public-profile-favorite-recipes-page">Personal Recipes</button></a>
                        <a href="#"><button className="group-button-in-public-profile-favorite-recipes-page">Followers</button></a>
                        <a href="#"><button className="group-button-in-public-profile-favorite-recipes-page last-button-in-public-profile-favorite-recipes-page">Following</button></a>
                    </nav>
                    <div id="favorites-recipes-and-collections-in-public-profile-favorite-recipes-page">
                        <a href="#">
                            <button>Collections</button>
                        </a>
                        <a href="/recipe-details">
                            <button>Recipes</button>
                        </a>
                    </div>
                    <div id="favorites-recipes-sorting-options-in-public-profile-favorite-recipes-page">
                        <label for="select-favorites-recipes-sorting-options-in-public-profile-favorite-recipes-page">Sort by:</label><br />
                        <select name="sort types" id="select-made-recipes-sorting-options-in-public-profile-favorite-recipes-page">
                            <option value="Newest">Newest</option>
                            <option value="Rating">Rating</option>
                            <option value="Title">Title</option>
                        </select>
                    </div>
                    <div id="recipes-in-public-profile-favorite-recipes-page">
                        <div className="recipe-in-public-profile-favorite-recipes-page">
                            <button className="save-recipe-button-in-public-profile-favorite-recipes-page"><i><FaHeart /></i></button>
                            <a href="/recipe-details"><img className="recipe-photo-in-public-profile-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                            <a href="/recipe-details"><p className="recipe-name-in-public-profile-favorite-recipes-page">Recipe name</p></a>
                            <div className="recipe-ratings-and-favorites-in-public-profile-favorite-recipes-page">
                                <div className="recipe-ratings-in-public-profile-favorite-recipes-page">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <p>NoRs</p>
                                </div>
                                <div className="recipe-favorites-in-public-profile-favorite-recipes-page">
                                    <i><FaHeart /></i>
                                    <p>NoFs</p>
                                </div>
                            </div>
                            <p className="recipe-author-in-public-profile-favorite-recipes-page">By <a href="/public-profile-favorite-recipes">Author</a></p>
                        </div>
                        <div className="recipe-in-public-profile-favorite-recipes-page">
                            <button className="save-recipe-button-in-public-profile-favorite-recipes-page"><i><FaHeart /></i></button>
                            <a href="/recipe-details"><img className="recipe-photo-in-public-profile-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                            <a href="/recipe-details"><p className="recipe-name-in-public-profile-favorite-recipes-page">Recipe name</p></a>
                            <div className="recipe-ratings-and-favorites-in-public-profile-favorite-recipes-page">
                                <div className="recipe-ratings-in-public-profile-favorite-recipes-page">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <p>NoRs</p>
                                </div>
                                <div className="recipe-favorites-in-public-profile-favorite-recipes-page">
                                    <i><FaHeart /></i>
                                    <p>NoFs</p>
                                </div>
                            </div>
                            <p className="recipe-author-in-public-profile-favorite-recipes-page">By <a href="/public-profile-favorite-recipes">Author</a></p>
                        </div>
                        <div className="recipe-in-public-profile-favorite-recipes-page">
                            <button className="save-recipe-button-in-public-profile-favorite-recipes-page"><i><FaHeart /></i></button>
                            <a href="/recipe-details"><img className="recipe-photo-in-public-profile-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                            <a href="/recipe-details"><p className="recipe-name-in-public-profile-favorite-recipes-page">Recipe name</p></a>
                            <div className="recipe-ratings-and-favorites-in-public-profile-favorite-recipes-page">
                                <div className="recipe-ratings-in-public-profile-favorite-recipes-page">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <p>NoRs</p>
                                </div>
                                <div className="recipe-favorites-in-public-profile-favorite-recipes-page">
                                    <i><FaHeart /></i>
                                    <p>NoFs</p>
                                </div>
                            </div>
                            <p className="recipe-author-in-public-profile-favorite-recipes-page">By <a href="/public-profile-favorite-recipes">Author</a></p>
                        </div>
                        <div className="recipe-in-public-profile-favorite-recipes-page">
                            <button className="save-recipe-button-in-public-profile-favorite-recipes-page"><i><FaHeart /></i></button>
                            <a href="/recipe-details"><img className="recipe-photo-in-public-profile-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                            <a href="/recipe-details"><p className="recipe-name-in-public-profile-favorite-recipes-page">Recipe name</p></a>
                            <div className="recipe-ratings-and-favorites-in-public-profile-favorite-recipes-page">
                                <div className="recipe-ratings-in-public-profile-favorite-recipes-page">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <p>NoRs</p>
                                </div>
                                <div className="recipe-favorites-in-public-profile-favorite-recipes-page">
                                    <i><FaHeart /></i>
                                    <p>NoFs</p>
                                </div>
                            </div>
                            <p className="recipe-author-in-public-profile-favorite-recipes-page">By <a href="/public-profile-favorite-recipes">Author</a></p>
                        </div>
                        <div className="recipe-in-public-profile-favorite-recipes-page">
                            <button className="save-recipe-button-in-public-profile-favorite-recipes-page"><i><FaHeart /></i></button>
                            <a href="/recipe-details"><img className="recipe-photo-in-public-profile-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                            <a href="/recipe-details"><p className="recipe-name-in-public-profile-favorite-recipes-page">Recipe name</p></a>
                            <div className="recipe-ratings-and-favorites-in-public-profile-favorite-recipes-page">
                                <div className="recipe-ratings-in-public-profile-favorite-recipes-page">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <p>NoRs</p>
                                </div>
                                <div className="recipe-favorites-in-public-profile-favorite-recipes-page">
                                    <i><FaHeart /></i>
                                    <p>NoFs</p>
                                </div>
                            </div>
                            <p className="recipe-author-in-public-profile-favorite-recipes-page">By <a href="/public-profile-favorite-recipes">Author</a></p>
                        </div>
                        <div className="recipe-in-public-profile-favorite-recipes-page">
                            <button className="save-recipe-button-in-public-profile-favorite-recipes-page"><i><FaHeart /></i></button>
                            <a href="/recipe-details"><img className="recipe-photo-in-public-profile-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                            <a href="/recipe-details"><p className="recipe-name-in-public-profile-favorite-recipes-page">Recipe name</p></a>
                            <div className="recipe-ratings-and-favorites-in-public-profile-favorite-recipes-page">
                                <div className="recipe-ratings-in-public-profile-favorite-recipes-page">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <p>NoRs</p>
                                </div>
                                <div className="recipe-favorites-in-public-profile-favorite-recipes-page">
                                    <i><FaHeart /></i>
                                    <p>NoFs</p>
                                </div>
                            </div>
                            <p className="recipe-author-in-public-profile-favorite-recipes-page">By <a href="/public-profile-favorite-recipes">Author</a></p>
                        </div>
                        <div className="recipe-in-public-profile-favorite-recipes-page">
                            <button className="save-recipe-button-in-public-profile-favorite-recipes-page"><i><FaHeart /></i></button>
                            <a href="/recipe-details"><img className="recipe-photo-in-public-profile-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                            <a href="/recipe-details"><p className="recipe-name-in-public-profile-favorite-recipes-page">Recipe name</p></a>
                            <div className="recipe-ratings-and-favorites-in-public-profile-favorite-recipes-page">
                                <div className="recipe-ratings-in-public-profile-favorite-recipes-page">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <p>NoRs</p>
                                </div>
                                <div className="recipe-favorites-in-public-profile-favorite-recipes-page">
                                    <i><FaHeart /></i>
                                    <p>NoFs</p>
                                </div>
                            </div>
                            <p className="recipe-author-in-public-profile-favorite-recipes-page">By <a href="/public-profile-favorite-recipes">Author</a></p>
                        </div>
                        <div className="recipe-in-public-profile-favorite-recipes-page">
                            <button className="save-recipe-button-in-public-profile-favorite-recipes-page"><i><FaHeart /></i></button>
                            <a href="/recipe-details"><img className="recipe-photo-in-public-profile-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                            <a href="/recipe-details"><p className="recipe-name-in-public-profile-favorite-recipes-page">Recipe name</p></a>
                            <div className="recipe-ratings-and-favorites-in-public-profile-favorite-recipes-page">
                                <div className="recipe-ratings-in-public-profile-favorite-recipes-page">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <p>NoRs</p>
                                </div>
                                <div className="recipe-favorites-in-public-profile-favorite-recipes-page">
                                    <i><FaHeart /></i>
                                    <p>NoFs</p>
                                </div>
                            </div>
                            <p className="recipe-author-in-public-profile-favorite-recipes-page">By <a href="/public-profile-favorite-recipes">Author</a></p>
                        </div>
                        <div className="recipe-in-public-profile-favorite-recipes-page">
                            <button className="save-recipe-button-in-public-profile-favorite-recipes-page"><i><FaHeart /></i></button>
                            <a href="/recipe-details"><img className="recipe-photo-in-public-profile-favorite-recipes-page" src="#" alt="(Recipe name)"></img></a>
                            <a href="/recipe-details"><p className="recipe-name-in-public-profile-favorite-recipes-page">Recipe name</p></a>
                            <div className="recipe-ratings-and-favorites-in-public-profile-favorite-recipes-page">
                                <div className="recipe-ratings-in-public-profile-favorite-recipes-page">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <p>NoRs</p>
                                </div>
                                <div className="recipe-favorites-in-public-profile-favorite-recipes-page">
                                    <i><FaHeart /></i>
                                    <p>NoFs</p>
                                </div>
                            </div>
                            <p className="recipe-author-in-public-profile-favorite-recipes-page">By <a href="/public-profile-favorite-recipes">Author</a></p>
                        </div>
                        <button id="load-more-recipes-button-in-public-profile-favorite-recipes-page">SHOW MORE</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PublicProfileFavoriteRecipes;

