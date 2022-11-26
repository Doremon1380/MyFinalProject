import React, { useState, useEffect } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "./private-profile.css";
import { Helmet } from 'react-helmet'
import "./home.css"
import { FaHeart } from "react-icons/fa";

const TITLE = 'FoodShare - Recipe Inspiration';

// var recipes = [
//     {
//         image: "PizzaImage",
//         name: "Pizza1",
//         numberOfRatings: 42,
//         numberOfFavorites: 29,
//         author: "John1"
//     },
//     {
//         image: "PizzaImage",
//         name: "Pizza2",
//         numberOfRatings: 16,
//         numberOfFavorites: 54,
//         author: "John2"
//     },
//     {
//         image: "PizzaImage",
//         name: "Pizza3",
//         numberOfRatings: 20,
//         numberOfFavorites: 16,
//         author: "John3"
//     },
// ];

function Home() {
    const [newestRecipes, setNewestRecipes] = useState([]);
    const [mostRatedRecipes, setMostRatedRecipes] = useState([]);
    const [mostFavoriteRecipes, setMostFavoriteRecipes] = useState([]);
    const [visibleOfNewestRecipes, setVisibleOfNewestRecipes] = useState(9);
    const [visibleOfMostRatedRecipes, setVisibleOfMostRatedRecipes] = useState(9);
    const [visibleOfMostFavoriteRecipes, setVisibleOfMostFavoriteRecipes] = useState(9);
    const [loading, setLoading] = useState(false);
/*     const [recipes, setRecipes] = useState([{
        _id: 0,
        recipe_name: "",
        rating: 0,
        number_of_ratings: 0,
        number_of_reviews: 0,
        number_of_photos: 0,
        description: "",
        author: {
            profile_name: "",
            profile_icon: ""
        },
        image: "", 
        ingredients: [],
        directions: [],
        reviews: [],
        related_information: {
            prep: "",
            cook: "",
            additional: "",
            total: "",
            servings: "",
            yield: ""
        },
        is_private: false,
        number_of_people_who_love_this_recipe: 0,
        images_of_recipe: [] //
    }]) */

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

/*     useEffect(() => {
        fetch("/").then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(jsonRes => setRecipes(jsonRes));
    }) */

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

            {loading === true ? <h1 style={{textAlign: "center", marginTop: "35vh"}}>Loading...</h1> :
                <div id="home-page-container">
                    <p id="newest-recipes-title-in-home-page">Newest Recipes</p>
                    <div className="recipes-section-in-home-page">
                        {newestRecipes.slice(0, visibleOfNewestRecipes).map(recipe => (
                            <div key={recipe.id} className="recipe-in-home-page">
                                <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                                <a href="/recipe-details">
                                    <img className="recipe-photo-in-home-page" src={recipe.url} alt="(Recipe name)"></img>
                                    <p className="recipe-name-in-home-page">{recipe.title}</p>
                                </a>
                                <div className="recipe-ratings-and-favorites-in-home-page">
                                    <div className="recipe-ratings-in-home-page">
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        {/* <p>{recipe.numberOfRatings}</p> */}
                                        <p>NoRs</p>
                                    </div>
                                    <div className="recipe-favorites-in-home-page">
                                        <i><FaHeart /></i>
                                        {/* <p>{recipe.numberOfFavorites}</p> */}
                                        <p>NoFs</p>
                                    </div>
                                </div>
                                {/* <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">{recipe.author}</a></p> */}
                                <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                            </div>
                        ))}
                    </div>
                    <button className="load-more-recipes-button-in-home-page" onClick={showMoreNewestRecipes}>SHOW MORE</button>
                    <hr className="break-line-in-home-page"></hr>
                    <p className="recipes-section-title-in-home-page">Most Rated Recipes</p>
                    <div className="recipes-section-in-home-page">
                        {mostRatedRecipes.slice(0, visibleOfMostRatedRecipes).map(recipe => (
                            <div key={recipe.id} className="recipe-in-home-page">
                                <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                                <a href="/recipe-details">
                                    <img className="recipe-photo-in-home-page" src={recipe.url} alt="(Recipe name)"></img>
                                    <p className="recipe-name-in-home-page">{recipe.title}</p>
                                </a>
                                <div className="recipe-ratings-and-favorites-in-home-page">
                                    <div className="recipe-ratings-in-home-page">
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        {/* <p>{recipe.numberOfRatings}</p> */}
                                        <p>NoRs</p>
                                    </div>
                                    <div className="recipe-favorites-in-home-page">
                                        <i><FaHeart /></i>
                                        {/* <p>{recipe.numberOfFavorites}</p> */}
                                        <p>NoFs</p>
                                    </div>
                                </div>
                                {/* <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">{recipe.author}</a></p> */}
                                <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                            </div>
                        ))}
                    </div>
                    <button className="load-more-recipes-button-in-home-page" onClick={showMoreMostRatedRecipes}>SHOW MORE</button>
                    <hr className="break-line-in-home-page"></hr>
                    <p className="recipes-section-title-in-home-page">Most Favorite Recipes</p>
                    <div className="recipes-section-in-home-page">
                        {mostFavoriteRecipes.slice(0, visibleOfMostFavoriteRecipes).map(recipe => (
                            <div key={recipe.id} className="recipe-in-home-page">
                                <button className="save-recipe-button-in-home-page"><i><FaHeart /></i></button>
                                <a href="/recipe-details">
                                    <img className="recipe-photo-in-home-page" src={recipe.url} alt="(Recipe name)"></img>
                                    <p className="recipe-name-in-home-page">{recipe.title}</p>
                                </a>
                                <div className="recipe-ratings-and-favorites-in-home-page">
                                    <div className="recipe-ratings-in-home-page">
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        {/* <p>{recipe.numberOfRatings}</p> */}
                                        <p>NoRs</p>
                                    </div>
                                    <div className="recipe-favorites-in-home-page">
                                        <i><FaHeart /></i>
                                        {/* <p>{recipe.numberOfFavorites}</p> */}
                                        <p>NoFs</p>
                                    </div>
                                </div>
                                {/* <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">{recipe.author}</a></p> */}
                                <p className="recipe-author-in-home-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                            </div>
                        ))}
                    </div>
                    <button className="load-more-recipes-button-in-home-page" onClick={showMoreMostFavoriteRecipes}>SHOW MORE</button>
                </div>
            }
        </>
    );
};

export default Home;

