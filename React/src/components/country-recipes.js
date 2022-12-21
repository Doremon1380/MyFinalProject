import React, { useState, useEffect } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "./country-recipes.css"
import { Helmet } from 'react-helmet'

import { FaChevronRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const TITLE = '(Country) Recipes - FoodShare.com';

function CountryRecipes() {
    const [newestRecipes, setNewestRecipes] = useState([]);
    const [mostRatedRecipes, setMostRatedRecipes] = useState([]);
    const [mostFavoriteRecipes, setMostFavoriteRecipes] = useState([]);
    const [visibleOfNewestRecipes, setVisibleOfNewestRecipes] = useState(9);
    const [visibleOfMostRatedRecipes, setVisibleOfMostRatedRecipes] = useState(9);
    const [visibleOfMostFavoriteRecipes, setVisibleOfMostFavoriteRecipes] = useState(9);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setNewestRecipes(res.data);
            setMostRatedRecipes(res.data);
            setMostFavoriteRecipes(res.data);
            setLoading(false);
        }
        fetchReviews();
    }, []);

    const showMoreNewestRecipes = () => {
        setVisibleOfNewestRecipes((prevValue) => prevValue + 3);
    };

    const showMoreMostRatedRecipes = () => {
        setVisibleOfMostRatedRecipes((prevValue) => prevValue + 3);
    };

    const showMoreMostFavoriteRecipes = () => {
        setVisibleOfMostFavoriteRecipes((prevValue) => prevValue + 3);
    };

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="country-recipes-page">
                <div id="top-section-of-country-recipes-page"></div>
                <div id="titles-with-image-and-recipes-in-country-recipes-page">
                    <div id="page-titles-of-country-recipes-page">
                        <div>
                            <a href="/">Home</a>
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
                    {loading === true ? <h1 style={{ textAlign: "center", marginTop: "25vh" }}>Loading...</h1> :
                        <div id="recipes-in-country-recipes-page">
                            <h2 className="recipes-section-title-in-country-recipes-page">Newest Recipes</h2>
                            <div className="recipes-section-in-country-recipes-page">
                                {newestRecipes.slice(0, visibleOfNewestRecipes).map(recipe => (
                                    <div key={recipe.id} className="recipe-in-country-recipes-page">
                                        <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                        <div className="related-information-of-recipe-in-country-recipes-page">
                                            <a href="/recipe-details">
                                                <img className="recipe-photo-in-country-recipes-page" src={recipe.url} alt="(Recipe name)"></img>
                                            </a>
                                            <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                                <a href="/recipe-details">
                                                    <p className="recipe-name-in-country-recipes-page">{recipe.title}</p>
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
                                ))}
                            </div>
                            <button className="load-more-recipes-button-in-country-recipes-page" onClick={showMoreNewestRecipes}>SHOW MORE</button>
                            <hr className="break-line-in-country-recipes-page"></hr>
                            <h2 className="recipes-section-title-in-country-recipes-page">Most Rated Recipes</h2>
                            <div className="recipes-section-in-country-recipes-page">
                                {mostRatedRecipes.slice(0, visibleOfMostRatedRecipes).map(recipe => (
                                    <div key={recipe.id} className="recipe-in-country-recipes-page">
                                        <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                        <div className="related-information-of-recipe-in-country-recipes-page">
                                            <a href="/recipe-details">
                                                <img className="recipe-photo-in-country-recipes-page" src={recipe.url} alt="(Recipe name)"></img>
                                            </a>
                                            <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                                <a href="/recipe-details">
                                                    <p className="recipe-name-in-country-recipes-page">{recipe.title}</p>
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
                                ))}
                            </div>
                            <button className="load-more-recipes-button-in-country-recipes-page" onClick={showMoreMostRatedRecipes}>SHOW MORE</button>
                            <hr className="break-line-in-country-recipes-page"></hr>
                            <h2 className="recipes-section-title-in-country-recipes-page">Most Favorite Recipes</h2>
                            <div className="recipes-section-in-country-recipes-page">
                                {mostFavoriteRecipes.slice(0, visibleOfMostFavoriteRecipes).map(recipe => (
                                    <div key={recipe.id} className="recipe-in-country-recipes-page">
                                        <button className="save-recipe-button-in-country-recipes-page"><i><FaHeart /></i></button>
                                        <div className="related-information-of-recipe-in-country-recipes-page">
                                            <a href="/recipe-details">
                                                <img className="recipe-photo-in-country-recipes-page" src={recipe.url}  alt="(Recipe name)"></img>
                                            </a>
                                            <div className="recipe-name-and-recipe-ratings-in-country-recipes-page">
                                                <a href="/recipe-details">
                                                    <p className="recipe-name-in-country-recipes-page">{recipe.title}</p>
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
                                ))}
                            </div>
                            <button className="load-more-recipes-button-in-country-recipes-page" onClick={showMoreMostFavoriteRecipes}>SHOW MORE</button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default CountryRecipes;