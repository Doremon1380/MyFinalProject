import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./world-cuisine.css"
import { Helmet } from 'react-helmet'

import { FaChevronRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import TypicalChineseFood from "./TypicalChineseFood.jpg";
import TypicalGermanFood from "./TypicalGermanFood.png";
import TypicalIndianFood from "./TypicalIndianFood.jpg";
import TypicalJapaneseFood from "./TypicalJapaneseFood.png";
import TypicalRussianFood from "./TypicalRussianFood.png";
import TypicalItalianFood from "./TypicalItalianFood.jpg";
import TypicalMexicanFood from "./TypicalMexicanFood.jpg";
import TypicalSpanishFood from "./TypicalSpanishFood.png";
import GlobalFood from "./GlobalFood.jpg";

const TITLE = 'World Cuisine - Allrecipes.com';

function WorldCuisine() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="world-cuisine-page">
                <div id="top-section-of-world-cuisine-page"></div>
                <div id="titles-with-image-and-recipes-in-world-cuisine-page">
                    <div id="page-titles-of-world-cuisine-page">
                        <div>
                            <a href="/">Home</a>
                            <i><FaChevronRight /></i>
                            <a href="/world-cuisine">World Cuisine</a>
                        </div>
                        <h1>World Cuisine</h1>
                    </div>
                    <div id="titles-with-image-in-world-cuisine-page">
                        <a href="/country-recipes"><img src={TypicalChineseFood} alt="TypicalChineseFood"></img><p>Chinese Recipes</p></a>
                        <a href="/country-recipes"><img src={TypicalGermanFood} alt="TypicalGermanFood"></img><p>German Recipes</p></a>
                        <a href="/country-recipes"><img src={TypicalIndianFood} alt="TypicalIndianFood"></img><p>Indian Recipes</p></a>
                        <a href="/country-recipes"><img src={TypicalJapaneseFood} alt="TypicalJapaneseFood"></img><p>Japanese Recipes</p></a>
                        <a href="/country-recipes"><img src={TypicalRussianFood} alt="TypicalRussianFood"></img><p>Russian Recipes</p></a>
                        <a href="/country-recipes"><img src={TypicalItalianFood} alt="TypicalItalianFood"></img><p>Italian Recipes</p></a>
                        <a href="/country-recipes"><img src={TypicalMexicanFood} alt="TypicalMexicanFood"></img><p>Mexican Recipes</p></a>
                        <a href="/country-recipes"><img src={TypicalSpanishFood} alt="TypicalSpanishFood"></img><p>Spanish Recipes</p></a>
                        <a href="/country-recipes"><img src={GlobalFood} alt="GlobalFood"></img><p>Global Recipes</p></a>
                    </div>
                    <div id="button-to-return-to-previous-recipe-titles-and-button-to-go-to-next-recipe-titles-in-world-cuisine-page">
                        <button id="button-to-return-to-previous-recipe-titles-in-world-cuisine-page"><i className="bi bi-arrow-left-short"></i></button>
                        <button id="button-to-go-to-next-recipe-titles-in-world-cuisine-page"><i className="bi bi-arrow-right-short"></i></button>
                    </div>
                    <div id="recipes-in-world-cuisine-page">
                        <h2 className="recipes-section-title-in-world-cuisine-page">Newest Recipes</h2>
                        <div className="recipes-section-in-world-cuisine-page">
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="load-more-recipes-button-in-world-cuisine-page">SHOW MORE</button>
                        <hr className="break-line-in-world-cuisine-page"></hr>
                        <h2 className="recipes-section-title-in-world-cuisine-page">Most Rated Recipes</h2>
                        <div className="recipes-section-in-world-cuisine-page">
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="load-more-recipes-button-in-world-cuisine-page">SHOW MORE</button>
                        <hr className="break-line-in-world-cuisine-page"></hr>
                        <h2 className="recipes-section-title-in-world-cuisine-page">Most Favorite Recipes</h2>
                        <div className="recipes-section-in-world-cuisine-page">
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipe-in-world-cuisine-page">
                                <button className="save-recipe-button-in-world-cuisine-page"><i><FaHeart /></i></button>
                                <div className="related-information-of-recipe-in-world-cuisine-page">
                                    <a href="/recipe-details">
                                        <img className="recipe-photo-in-world-cuisine-page" src="#" alt="(Recipe name)"></img>
                                    </a>
                                    <div className="recipe-name-and-recipe-ratings-in-world-cuisine-page">
                                        <a href="/recipe-details">
                                            <p className="recipe-name-in-world-cuisine-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-world-cuisine-page">
                                            <div className="recipe-ratings-in-world-cuisine-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-world-cuisine-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-world-cuisine-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="load-more-recipes-button-in-world-cuisine-page">SHOW MORE</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorldCuisine;