import React from "react";
import TopPart from "./top-part";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import "./favorite-recipes.css";
import { FaHeart } from "react-icons/fa";

const TITLE = 'Private Profile - FoodShare.com';

function FavoriteRecipes() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="top-part-container-in-favorite-recipes-page">
                <TopPart />
                <nav id="group-buttons">
                    <a href="/about-me"><button className="group-button">About Me</button></a>
                    <a href="/favorite-recipes"><button className="group-button selected-button">My Favorites</button></a>
                    <a href="/follower-accounts"><button className="group-button">My Friends</button></a>
                    <a href="/made-recipes"><button className="group-button">I Made It</button></a>
                    <a href="/photos"><button className="group-button ">My Photos</button></a>
                    <a href="/evaluated-recipes"><button className="group-button">My Reviews</button></a>
                    <a href="/personal-recipes"><button className="group-button last-button"> Personal Recipes</button></a>
                </nav>
            </div>
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
                    <form action="" id="search-saved-recipe-in-favorite-recipes-page" name="searchInputRecipe">
                        <input name="inputSavedRecipe" type="search" placeholder="Find a saved recipe" aria-label="Search" />
                        <button type="submit" form="search-saved-recipe-in-favorite-recipes-page"><i className="bi bi-search"></i></button>
                    </form>
                </div>
                <div id="recipes-in-favorite-recipes-page">
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="Recipe photo"></img></a>
                        <a href="#add-favorite-recipes-to-collection-form-in-favorite-recipes-page">
                            <button>
                                <i class="bi bi-plus"></i>
                                <p>Add to Collections</p>
                            </button>
                        </a>
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
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="Recipe photo"></img></a>
                        <a href="#add-favorite-recipes-to-collection-form-in-favorite-recipes-page">
                            <button>
                                <i class="bi bi-plus"></i>
                                <p>Add to Collections</p>
                            </button>
                        </a>
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
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="Recipe photo"></img></a>
                        <a href="#add-favorite-recipes-to-collection-form-in-favorite-recipes-page">
                            <button>
                                <p>Saved in <span>(number) collections</span></p>
                            </button>
                        </a>
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
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="Recipe photo"></img></a>
                        <a href="#add-favorite-recipes-to-collection-form-in-favorite-recipes-page">
                            <button>
                                <p>Saved in <span>(number) collections</span></p>
                            </button>
                        </a>
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
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="#"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="Recipe photo"></img></a>
                        <a href="#add-favorite-recipes-to-collection-form-in-favorite-recipes-page">
                            <button>
                                <i class="bi bi-plus"></i>
                                <p>Add to Collections</p>
                            </button>
                        </a>
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
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="Recipe photo"></img></a>
                        <a href="#add-favorite-recipes-to-collection-form-in-favorite-recipes-page">
                            <button>
                                <i class="bi bi-plus"></i>
                                <p>Add to Collections</p>
                            </button>
                        </a>
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
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="#"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="Recipe photo"></img></a>
                        <a href="#add-favorite-recipes-to-collection-form-in-favorite-recipes-page">
                            <button>
                                <i class="bi bi-plus"></i>
                                <p>Add to Collections</p>
                            </button>
                        </a>
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
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="Recipe photo"></img></a>
                        <a href="#add-favorite-recipes-to-collection-form-in-favorite-recipes-page">
                            <button>
                                <p>Saved in <span>(number) collections</span></p>
                            </button>
                        </a>
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
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <div className="recipe-in-favorite-recipes-page">
                        <button className="save-recipe-button-in-favorite-recipes-page"><i><FaHeart /></i></button>
                        <a href="/recipe-details"><img className="recipe-photo-in-favorite-recipes-page" src="#" alt="Recipe photo"></img></a>
                        <a href="#add-favorite-recipes-to-collection-form-in-favorite-recipes-page">
                            <button>
                                <p>Saved in <span>(number) collections</span></p>
                            </button>
                        </a>
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
                        <p className="recipe-author-in-favorite-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                    </div>
                    <form action="" name="addFavoriteRecipesToCollection" id="add-favorite-recipes-to-collection-form-in-favorite-recipes-page">
                        <div id="popup-in-favorite-recipes-page">
                            <div id="title-and-close-button-of-add-favorite-recipes-to-collection-form-in-favorite-recipes-page">
                                <p id="title-of-add-favorite-recipes-to-collection-form-in-favorite-recipes-page">Pick a collection</p>
                                <a id="close-button-of-add-favorite-recipes-to-collection-form-in-favorite-recipes-page" href="#">&times;</a>
                            </div>
                            <hr />
                            <div id="list-of-created-collection-and-recipe-may-be-added-of-add-favorite-recipes-to-collection-form-in-favorite-recipes-page">
                                <div>
                                    <div id="list-of-created-collection-of-add-favorite-recipes-to-collection-form-in-favorite-recipes-page">
                                        <div>
                                            <input name="collection" value="(collection)" id="collection1" className="collection-checkbox-in-favorite-recipes-page" type="checkbox"></input>
                                            <label for="collection1" className="collection-checkbox-label-in-favorite-recipes-page">(collection 1)</label>
                                        </div>
                                        <div>
                                            <input name="collection" value="(collection)" id="collection2" className="collection-checkbox-in-favorite-recipes-page" type="checkbox"></input>
                                            <label for="collection2" className="collection-checkbox-label-in-favorite-recipes-page">(collection 2)</label>
                                        </div>
                                        <div>
                                            <input name="collection" value="(collection)" id="collection3" className="collection-checkbox-in-favorite-recipes-page" type="checkbox"></input>
                                            <label for="collection3" className="collection-checkbox-label-in-favorite-recipes-page">(collection 3)</label>
                                        </div>
                                        <div>
                                            <input name="collection" value="(collection)" id="collection4" className="collection-checkbox-in-favorite-recipes-page" type="checkbox"></input>
                                            <label for="collection4" className="collection-checkbox-label-in-favorite-recipes-page">(collection 4)</label>
                                        </div>
                                        <div>
                                            <input name="collection" value="(collection)" id="collection5" className="collection-checkbox-in-favorite-recipes-page" type="checkbox"></input>
                                            <label for="collection5" className="collection-checkbox-label-in-favorite-recipes-page">(collection 5)</label>
                                        </div>
                                    </div>
                                    <div id="create-new-collection-bar-of-add-favorite-recipes-to-collection-form-in-favorite-recipes-page">
                                        <input name="inputNewCollection" placeholder="New Collection" />
                                        <button type="submit" form="add-favorite-recipes-to-collection-form-in-favorite-recipes-page"><i class="bi bi-plus"></i></button>
                                    </div>
                                </div>
                                <div id="recipe-may-be-added-of-add-favorite-recipes-to-collection-form-in-favorite-recipes-page">
                                    <img alt="Recipe photo"></img>
                                    <p>(Recipe name)</p>
                                </div>
                            </div>
                            <button type="submit" form="add-favorite-recipes-to-collection-form-in-favorite-recipes-page">All done</button>
                        </div>
                    </form>
                </div>
                <button id="load-more-recipes-button-in-favorite-recipes-page">SHOW MORE</button>
            </div>
        </>
    );
};

export default FavoriteRecipes;
