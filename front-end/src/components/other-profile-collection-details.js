import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./other-profile-collection-details.css";
import { Helmet } from 'react-helmet'

import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const TITLE = 'Collection Details - FoodShare.com';

function OtherProfileCollectionDetails() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="other-profile-collection-details-page">
                <div id="collection-name-and-save-collection-button-in-other-profile-collection-details-page">
                    <div>
                        <p id="collection-name-in-other-profile-collection-details-page">(Collection name)</p>
                        <a href="/public-profile-collection-recipes">More collections by this cook</a>
                    </div>
                    <button id="save-collection-button-in-other-profile-collection-details-page">
                        <i><FaHeart /></i>
                        <p>Save to favorite collections</p>
                    </button>
                </div>
                <div id="related-information-of-collection-and-share-button-in-other-profile-collection-details-page">
                    <div id="related-information-of-collection-in-other-profile-collection-details-page">
                        <a href="/public-profile-favorite-recipes"><img alt="avatar"></img></a>
                        <div>
                            <p>Collection by: <span>(User account name)</span></p>
                            <p>(Num) recipes</p>
                        </div>
                    </div>
                    <a href="#share-recipe-in-other-profile-collection-details-page">
                        <div id="share-button-in-other-profile-collection-details-page">
                            <i class="bi bi-share-fill" title="Share"></i>
                            <p>Share</p>
                        </div>
                    </a>
                </div>
                <div id="recipes-in-other-profile-collection-details-page">
                    <div className="recipe-in-other-profile-collection-details-page">
                        <div className="related-information-of-recipe-in-other-profile-collection-details-page">
                            <a href="/recipe-details">
                                <img className="recipe-photo-in-other-profile-collection-details-page" src="#" alt="(Recipe name)"></img>
                            </a>
                            <div className="recipe-name-and-recipe-ratings-in-other-profile-collection-details-page">
                                <a href="/recipe-details">
                                    <p className="recipe-name-in-other-profile-collection-details-page">Recipe name</p>
                                </a>
                                <div className="recipe-ratings-and-favorites-in-other-profile-collection-details-page">
                                    <div className="recipe-ratings-in-other-profile-collection-details-page">
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <p>NoRs</p>
                                    </div>
                                    <div className="recipe-favorites-in-other-profile-collection-details-page">
                                        <i><FaHeart /></i>
                                        <p>NoFs</p>
                                    </div>
                                </div>
                                <p className="recipe-author-in-other-profile-collection-details-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                            </div>
                        </div>
                        <button className="save-recipe-button-in-other-profile-collection-details-page"><i><FaHeart /></i></button>
                    </div>
                    <hr></hr>
                    <div className="recipe-in-other-profile-collection-details-page">
                        <div className="related-information-of-recipe-in-other-profile-collection-details-page">
                            <a href="/recipe-details">
                                <img className="recipe-photo-in-other-profile-collection-details-page" src="#" alt="(Recipe name)"></img>
                            </a>
                            <div className="recipe-name-and-recipe-ratings-in-other-profile-collection-details-page">
                                <a href="/recipe-details">
                                    <p className="recipe-name-in-other-profile-collection-details-page">Recipe name</p>
                                </a>
                                <div className="recipe-ratings-and-favorites-in-other-profile-collection-details-page">
                                    <div className="recipe-ratings-in-other-profile-collection-details-page">
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <p>NoRs</p>
                                    </div>
                                    <div className="recipe-favorites-in-other-profile-collection-details-page">
                                        <i><FaHeart /></i>
                                        <p>NoFs</p>
                                    </div>
                                </div>
                                <p className="recipe-author-in-other-profile-collection-details-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                            </div>
                        </div>
                        <button className="save-recipe-button-in-other-profile-collection-details-page"><i><FaHeart /></i></button>
                    </div>
                    <hr></hr>
                    <div className="recipe-in-other-profile-collection-details-page">
                        <div className="related-information-of-recipe-in-other-profile-collection-details-page">
                            <a href="/recipe-details">
                                <img className="recipe-photo-in-other-profile-collection-details-page" src="#" alt="(Recipe name)"></img>
                            </a>
                            <div className="recipe-name-and-recipe-ratings-in-other-profile-collection-details-page">
                                <a href="/recipe-details">
                                    <p className="recipe-name-in-other-profile-collection-details-page">Recipe name</p>
                                </a>
                                <div className="recipe-ratings-and-favorites-in-other-profile-collection-details-page">
                                    <div className="recipe-ratings-in-other-profile-collection-details-page">
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <p>NoRs</p>
                                    </div>
                                    <div className="recipe-favorites-in-other-profile-collection-details-page">
                                        <i><FaHeart /></i>
                                        <p>NoFs</p>
                                    </div>
                                </div>
                                <p className="recipe-author-in-other-profile-collection-details-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                            </div>
                        </div>
                        <button className="save-recipe-button-in-other-profile-collection-details-page"><i><FaHeart /></i></button>
                    </div>
                    <hr></hr>
                    <div className="recipe-in-other-profile-collection-details-page">
                        <div className="related-information-of-recipe-in-other-profile-collection-details-page">
                            <a href="/recipe-details">
                                <img className="recipe-photo-in-other-profile-collection-details-page" src="#" alt="(Recipe name)"></img>
                            </a>
                            <div className="recipe-name-and-recipe-ratings-in-other-profile-collection-details-page">
                                <a href="/recipe-details">
                                    <p className="recipe-name-in-other-profile-collection-details-page">Recipe name</p>
                                </a>
                                <div className="recipe-ratings-and-favorites-in-other-profile-collection-details-page">
                                    <div className="recipe-ratings-in-other-profile-collection-details-page">
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <p>NoRs</p>
                                    </div>
                                    <div className="recipe-favorites-in-other-profile-collection-details-page">
                                        <i><FaHeart /></i>
                                        <p>NoFs</p>
                                    </div>
                                </div>
                                <p className="recipe-author-in-other-profile-collection-details-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                            </div>
                        </div>
                        <button className="save-recipe-button-in-other-profile-collection-details-page"><i><FaHeart /></i></button>
                    </div>
                    <hr></hr>
                    <div className="recipe-in-other-profile-collection-details-page">
                        <div className="related-information-of-recipe-in-other-profile-collection-details-page">
                            <a href="/recipe-details">
                                <img className="recipe-photo-in-other-profile-collection-details-page" src="#" alt="(Recipe name)"></img>
                            </a>
                            <div className="recipe-name-and-recipe-ratings-in-other-profile-collection-details-page">
                                <a href="/recipe-details">
                                    <p className="recipe-name-in-other-profile-collection-details-page">Recipe name</p>
                                </a>
                                <div className="recipe-ratings-and-favorites-in-other-profile-collection-details-page">
                                    <div className="recipe-ratings-in-other-profile-collection-details-page">
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <p>NoRs</p>
                                    </div>
                                    <div className="recipe-favorites-in-other-profile-collection-details-page">
                                        <i><FaHeart /></i>
                                        <p>NoFs</p>
                                    </div>
                                </div>
                                <p className="recipe-author-in-other-profile-collection-details-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                            </div>
                        </div>
                        <button className="save-recipe-button-in-other-profile-collection-details-page"><i><FaHeart /></i></button>
                    </div>
                    <hr></hr>
                    <div className="recipe-in-other-profile-collection-details-page">
                        <div className="related-information-of-recipe-in-other-profile-collection-details-page">
                            <a href="/recipe-details">
                                <img className="recipe-photo-in-other-profile-collection-details-page" src="#" alt="(Recipe name)"></img>
                            </a>
                            <div className="recipe-name-and-recipe-ratings-in-other-profile-collection-details-page">
                                <a href="/recipe-details">
                                    <p className="recipe-name-in-other-profile-collection-details-page">Recipe name</p>
                                </a>
                                <div className="recipe-ratings-and-favorites-in-other-profile-collection-details-page">
                                    <div className="recipe-ratings-in-other-profile-collection-details-page">
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <p>NoRs</p>
                                    </div>
                                    <div className="recipe-favorites-in-other-profile-collection-details-page">
                                        <i><FaHeart /></i>
                                        <p>NoFs</p>
                                    </div>
                                </div>
                                <p className="recipe-author-in-other-profile-collection-details-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                            </div>
                        </div>
                        <button className="save-recipe-button-in-other-profile-collection-details-page"><i><FaHeart /></i></button>
                    </div>
                    <hr></hr>
                    <div className="recipe-in-other-profile-collection-details-page">
                        <div className="related-information-of-recipe-in-other-profile-collection-details-page">
                            <a href="/recipe-details">
                                <img className="recipe-photo-in-other-profile-collection-details-page" src="#" alt="(Recipe name)"></img>
                            </a>
                            <div className="recipe-name-and-recipe-ratings-in-other-profile-collection-details-page">
                                <a href="/recipe-details">
                                    <p className="recipe-name-in-other-profile-collection-details-page">Recipe name</p>
                                </a>
                                <div className="recipe-ratings-and-favorites-in-other-profile-collection-details-page">
                                    <div className="recipe-ratings-in-other-profile-collection-details-page">
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <p>NoRs</p>
                                    </div>
                                    <div className="recipe-favorites-in-other-profile-collection-details-page">
                                        <i><FaHeart /></i>
                                        <p>NoFs</p>
                                    </div>
                                </div>
                                <p className="recipe-author-in-other-profile-collection-details-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                            </div>
                        </div>
                        <button className="save-recipe-button-in-other-profile-collection-details-page"><i><FaHeart /></i></button>
                    </div>
                    <hr></hr>
                    <div className="recipe-in-other-profile-collection-details-page">
                        <div className="related-information-of-recipe-in-other-profile-collection-details-page">
                            <a href="/recipe-details">
                                <img className="recipe-photo-in-other-profile-collection-details-page" src="#" alt="(Recipe name)"></img>
                            </a>
                            <div className="recipe-name-and-recipe-ratings-in-other-profile-collection-details-page">
                                <a href="/recipe-details">
                                    <p className="recipe-name-in-other-profile-collection-details-page">Recipe name</p>
                                </a>
                                <div className="recipe-ratings-and-favorites-in-other-profile-collection-details-page">
                                    <div className="recipe-ratings-in-other-profile-collection-details-page">
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <p>NoRs</p>
                                    </div>
                                    <div className="recipe-favorites-in-other-profile-collection-details-page">
                                        <i><FaHeart /></i>
                                        <p>NoFs</p>
                                    </div>
                                </div>
                                <p className="recipe-author-in-other-profile-collection-details-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                            </div>
                        </div>
                        <button className="save-recipe-button-in-other-profile-collection-details-page"><i><FaHeart /></i></button>
                    </div>
                    <hr></hr>
                    <div className="recipe-in-other-profile-collection-details-page">
                        <div className="related-information-of-recipe-in-other-profile-collection-details-page">
                            <a href="/recipe-details">
                                <img className="recipe-photo-in-other-profile-collection-details-page" src="#" alt="(Recipe name)"></img>
                            </a>
                            <div className="recipe-name-and-recipe-ratings-in-other-profile-collection-details-page">
                                <a href="/recipe-details">
                                    <p className="recipe-name-in-other-profile-collection-details-page">Recipe name</p>
                                </a>
                                <div className="recipe-ratings-and-favorites-in-other-profile-collection-details-page">
                                    <div className="recipe-ratings-in-other-profile-collection-details-page">
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <i class="bi bi-star"></i>
                                        <p>NoRs</p>
                                    </div>
                                    <div className="recipe-favorites-in-other-profile-collection-details-page">
                                        <i><FaHeart /></i>
                                        <p>NoFs</p>
                                    </div>
                                </div>
                                <p className="recipe-author-in-other-profile-collection-details-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                            </div>
                        </div>
                        <button className="save-recipe-button-in-other-profile-collection-details-page"><i><FaHeart /></i></button>
                    </div>
                    <hr></hr>
                </div>
                <button id="load-more-recipes-button-in-other-profile-collection-details-page">SHOW MORE</button>
                <div id="share-recipe-in-other-profile-collection-details-page">
                    <div id="share-recipe-popup-in-other-profile-collection-details-page">
                        <div id="title-and-close-button-of-share-recipe-popup-in-other-profile-collection-details-page">
                            <p id="title-of-share-recipe-popup-in-other-profile-collection-details-page">Share</p>
                            <a id="close-button-of-share-recipe-popup-in-other-profile-collection-details-page" href="#">&times;</a>
                        </div>
                        <div id="social-networks-to-share-recipe-of-share-recipe-popup-in-other-profile-collection-details-page">
                            <div>
                                <button id="facebook-button-of-share-recipe-popup-in-other-profile-collection-details-page">{<FaFacebookF />}</button>
                                <p>FACEBOOK</p>
                            </div>
                            <div>
                                <button id="twitter-button-of-share-recipe-popup-in-other-profile-collection-details-page">{<FaTwitter />}</button>
                                <p>TWITTER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OtherProfileCollectionDetails;