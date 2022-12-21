import React, { useState, useEffect } from "react";
import TopPart from "./top-part";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import "./evaluated-recipes.css";
import { FaHeart } from "react-icons/fa";

const TITLE = 'Private Profile - FoodShare.com';

function EvaluatedRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [visibleOfRecipes, setVisibleOfRecipes] = useState(9);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setRecipes(res.data);
            setLoading(false);
        }
        fetchRecipes();
    }, []);

    const showMoreRecipes = () => {
        setVisibleOfRecipes((prevValue) => prevValue + 3);
    };

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="top-part-container-in-evaluated-recipes-page">
                <TopPart />
                <nav id="group-buttons">
                    <a href="/about-me"><button className="group-button">About Me</button></a>
                    <a href="/favorite-recipes"><button className="group-button">My Favorites</button></a>
                    <a href="/follower-accounts"><button className="group-button">My Friends</button></a>
                    <a href="/made-recipes"><button className="group-button">I Made It</button></a>
                    <a href="/photos"><button className="group-button ">My Photos</button></a>
                    <a href="/evaluated-recipes"><button className="group-button selected-button">My Reviews</button></a>
                    <a href="/personal-recipes"><button className="group-button last-button"> Personal Recipes</button></a>
                </nav>
            </div>
            <div id="evaluated-recipes-page">
                <div id="evaluated-recipes-sorting-options-in-evaluated-recipes-page">
                    <label for="select-evaluated-recipes-sorting-options-in-evaluated-recipes-page">Sort by:</label><br />
                    <select name="sort types" id="select-evaluated-recipes-sorting-options-in-evaluated-recipes-page">
                        <option value="Newest">Newest</option>
                        <option value="Rating">Rating</option>
                        <option value="Title">Title</option>
                    </select>
                </div>
                {loading === true ? <h1 style={{ textAlign: "center", marginTop: "30vh" }}>Loading...</h1> :
                    <>
                        <div id="recipes-in-evaluated-recipes-page">
                            {recipes.slice(0, visibleOfRecipes).map(recipe => (
                                <div key={recipe.id} className="recipe-in-evaluated-recipes-page">
                                    <button className="save-recipe-button-in-evaluated-recipes-page"><i><FaHeart /></i></button>
                                    <a href="/recipe-details">
                                        <img alt="(Recipe name)" className="recipe-photo-in-evaluated-recipes-page" src={recipe.url}></img>
                                        <p className="recipe-name-in-evaluated-recipes-page">{recipe.title}</p>
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
                            ))}
                        </div>
                        <button id="load-more-recipes-button-in-evaluated-recipes-page" onClick={showMoreRecipes}>SHOW MORE</button>
                    </>
                }
            </div>
        </>
    );
};

export default EvaluatedRecipes;