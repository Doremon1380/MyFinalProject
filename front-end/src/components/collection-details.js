import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./collection-details.css";
import axios from 'axios';
import { Helmet } from 'react-helmet'
import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const TITLE = 'Collection Details - FoodShare.com';

function CollectionDetails() {
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

            <div id="collection-details-page">
                <p id="collection-name-in-collection-details-page">(Collection name)</p>
                <p id="collection-discription-in-collection-details-page">(Collection Discription)</p>
                <div id="top-section-of-collection-details-page">
                    <div id="related-information-of-collection-in-collection-details-page">
                        <a href="/public-profile-favorite-recipes"><img alt="avatar"></img></a>
                        <div>
                            <p>Collection by: <span>(User account name)</span></p>
                            <p>(Num) recipes</p>
                        </div>
                    </div>
                    <div id="share-button-and-option-button-in-top-section-of-collection-details-page">
                        <a href="#share-recipe-in-collection-details-page">
                            <i class="bi bi-share-fill" title="Share"></i>
                            <p>Share</p>
                        </a>
                        <DropdownButton id="option-button-in-top-section-of-collection-details-page" variant="" title={<i className="bi bi-gear-fill" title="Option"></i>}>
                            <Dropdown.Item className="drop-down-option-of-option-button-in-collection-details-page">Edit collection</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="drop-down-option-of-option-button-in-collection-details-page">Delete collection</Dropdown.Item>
                        </DropdownButton>
                        <p>Options</p>
                    </div>
                </div>
                {loading === true ? <h1 style={{ textAlign: "center", marginTop: "30vh" }}>Loading...</h1> :
                    <>
                        <div id="recipes-in-collection-details-page">
                            {recipes.slice(0, visibleOfRecipes).map(recipe => (
                                <>
                                    <div key={recipe.id} className="recipe-in-collection-details-page">
                                        <button className="delete-recipe-button-in-collection-details-page"><i class="bi bi-x-lg"></i></button>
                                        <div className="related-information-of-recipe-in-collection-details-page">
                                            <a href="/recipe-details">
                                                <img className="recipe-photo-in-collection-details-page" src={recipe.url} alt="(Recipe name)"></img>
                                            </a>
                                            <div className="recipe-name-and-recipe-ratings-in-collection-details-page">
                                                <a href="/recipe-details">
                                                    <p className="recipe-name-in-collection-details-page">{recipe.title}</p>
                                                </a>
                                                <div className="recipe-ratings-and-favorites-in-collection-details-page">
                                                    <div className="recipe-ratings-in-collection-details-page">
                                                        <i class="bi bi-star"></i>
                                                        <i class="bi bi-star"></i>
                                                        <i class="bi bi-star"></i>
                                                        <i class="bi bi-star"></i>
                                                        <i class="bi bi-star"></i>
                                                        <p>NoRs</p>
                                                    </div>
                                                    <div className="recipe-favorites-in-collection-details-page">
                                                        <i><FaHeart /></i>
                                                        <p>NoFs</p>
                                                    </div>
                                                </div>
                                                <p className="recipe-author-in-collection-details-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </>
                            ))}
                        </div>
                        <button id="load-more-recipes-button-in-collection-details-page" onClick={showMoreRecipes}>SHOW MORE</button>
                    </>
                }
                <div id="share-recipe-in-collection-details-page">
                    <div id="share-recipe-popup-incollection-details-page">
                        <div id="title-and-close-button-of-share-recipe-popup-in-collection-details-page">
                            <p id="title-of-share-recipe-popup-in-collection-details-page">Share</p>
                            <a id="close-button-of-share-recipe-popup-in-collection-details-page" href="#">&times;</a>
                        </div>
                        <div id="social-networks-to-share-recipe-of-share-recipe-popup-in-collection-details-page">
                            <div>
                                <button id="facebook-button-of-share-recipe-popup-in-collection-details-page">{<FaFacebookF />}</button>
                                <p>FACEBOOK</p>
                            </div>
                            <div>
                                <button id="twitter-button-of-share-recipe-popup-in-collection-details-page">{<FaTwitter />}</button>
                                <p>TWITTER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CollectionDetails;