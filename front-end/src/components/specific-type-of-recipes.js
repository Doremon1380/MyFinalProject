import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./specific-type-of-recipes.css"
import { Helmet } from 'react-helmet'

import { FaChevronRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const TITLE = '(Type) Recipes - FoodShare.com';

function SpecificTypeOfRecipes() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="specific-type-of-recipes-page">
                <div id="top-section-of-specific-type-of-recipes-page"></div>
                <div id="titles-with-image-and-recipes-in-specific-type-of-recipes-page">
                    <div id="page-titles-of-specific-type-of-recipes-page">
                        <div>
                            <a href="/">Home</a>
                            <i><FaChevronRight /></i>
                            <a href="/types-of-recipes">Recipes</a>
                            <i><FaChevronRight /></i>
                            <a href="/specific-type-of-recipes">(Type) Recipes</a>
                        </div>
                        <h1>(Type) Recipes</h1>
                    </div>
                    <div id="titles-with-image-in-specific-type-of-recipes-page">
                        <a href="/specific-type-of-country-recipes"><img ></img><p>Chinese (Type) Recipes</p></a>
                        <a href="/specific-type-of-country-recipes"><img ></img><p>German (Type) Recipes</p></a>
                        <a href="/specific-type-of-country-recipes"><img ></img><p>Indian (Type) Recipes</p></a>
                        <a href="/specific-type-of-country-recipes"><img ></img><p>Japanese (Type) Recipes</p></a>
                        <a href="/specific-type-of-country-recipes"><img ></img><p>Russian (Type) Recipes</p></a>
                        <a href="/specific-type-of-country-recipes"><img ></img><p>Italian (Type) Recipes</p></a>
                        <a href="/specific-type-of-country-recipes"><img ></img><p>Mexican (Type) Recipes</p></a>
                        <a href="/specific-type-of-country-recipes"><img ></img><p>Spanish (Type) Recipes</p></a>
                        <a href="/specific-type-of-country-recipes"><img ></img><p>Global (Type) Recipes</p></a>
                    </div>
                    <div id="button-to-return-to-previous-recipe-titles-and-button-to-go-to-next-recipe-titles-in-specific-type-of-recipes-page">
                        <button id="button-to-return-to-previous-recipe-titles-in-specific-type-of-recipes-page"><i className="bi bi-arrow-left-short"></i></button>
                        <button id="button-to-go-to-next-recipe-titles-in-specific-type-of-recipes-page"><i className="bi bi-arrow-right-short"></i></button>
                    </div>
                    <div id="recipes-in-specific-type-of-recipes-page">
                        <h2 className="recipes-section-title-in-specific-type-of-recipes-page">Newest Recipes</h2>
                        <div className="recipes-section-in-specific-type-of-recipes-page">
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="load-more-recipes-button-in-specific-type-of-recipes-page">SHOW MORE</button>
                        <hr className="break-line-in-specific-type-of-recipes-page"></hr>
                        <h2 className="recipes-section-title-in-specific-type-of-recipes-page">Most Rated Recipes</h2>
                        <div className="recipes-section-in-specific-type-of-recipes-page">
                        <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="load-more-recipes-button-in-specific-type-of-recipes-page">SHOW MORE</button>
                        <hr className="break-line-in-specific-type-of-recipes-page"></hr>
                        <h2 className="recipes-section-title-in-specific-type-of-recipes-page">Most Favorite Recipes</h2>
                        <div className="recipes-section-in-specific-type-of-recipes-page">
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-specific-type-of-recipes-page">
                                <button className="save-recipe-button-in-specific-type-of-recipes-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-specific-type-of-recipes-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-specific-type-of-recipes-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-specific-type-of-recipes-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-specific-type-of-recipes-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-specific-type-of-recipes-page">
                                            <div className="recipe-ratings-in-specific-type-of-recipes-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-specific-type-of-recipes-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-specific-type-of-recipes-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="load-more-recipes-button-in-specific-type-of-recipes-page">SHOW MORE</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpecificTypeOfRecipes;