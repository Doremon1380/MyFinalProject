import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./private-profile.css";
import { Helmet } from 'react-helmet'
import "./all-reviews.css"
import { FaThumbsUp } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const TITLE = '"Recipe name" - FoodShare.com';

function AllReviews() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <div id="all-reviews-page-container">
                <div id="top-section-of-all-reviews-page">
                    <a href="/recipe-details">
                        <i class="bi bi-arrow-left"></i>
                        <p>Back to (Recipe Name)</p>
                    </a>
                    <p>All Reviews for (Recipe Name)(number)</p>
                    <div id="recipe-ratings-in-all-reviews-page">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </div>
                    <div>
                        <p>(number-number) of (number) Reviews</p>
                        <label for="types-of-reviews-in-all-reviews-page"></label>
                        <select name="typesOfReviews" id="types-of-reviews-in-all-reviews-page">
                            <option value="Most Positive" selected>Most Positive</option>
                            <option value="Least Positive">Least Positive </option>
                            <option value="Newest">Newest</option>
                        </select>
                    </div>
                </div>
                <hr></hr>
                <div id="reviews-in-all-reviews-page">
                    <div className="review-in-all-reviews-page">
                        <a href="#">
                            <img alt="avartar"></img>
                            (Reviewer Account)
                        </a>
                        <div className="stars-and-review-time-of-review-in-all-reviews-page">
                            <div className="stars-of-review-in-all-reviews-page">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <p>(month/date/year)</p>
                        </div>
                        <p>Review</p>
                        <p>Read More</p>
                        <div className="number-of-helpful-of-review-in-all-reviews-page">
                            <i><FaThumbsUp /></i>
                            <p>Helpful (number)</p>
                        </div>
                    </div>
                    <div className="review-in-all-reviews-page">
                        <a href="#">
                            <img alt="avartar"></img>
                            (Reviewer Account)
                        </a>
                        <div className="stars-and-review-time-of-review-in-all-reviews-page">
                            <div className="stars-of-review-in-all-reviews-page">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <p>(month/date/year)</p>
                        </div>
                        <p>Review</p>
                        <p>Read More</p>
                        <div className="number-of-helpful-of-review-in-all-reviews-page">
                            <i><FaThumbsUp /></i>
                            <p>Helpful (number)</p>
                        </div>
                    </div>
                    <div className="review-in-all-reviews-page">
                        <a href="#">
                            <img alt="avartar"></img>
                            (Reviewer Account)
                        </a>
                        <div className="stars-and-review-time-of-review-in-all-reviews-page">
                            <div className="stars-of-review-in-all-reviews-page">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <p>(month/date/year)</p>
                        </div>
                        <p>Review</p>
                        <p>Read More</p>
                        <div className="number-of-helpful-of-review-in-all-reviews-page">
                            <i><FaThumbsUp /></i>
                            <p>Helpful (number)</p>
                        </div>
                    </div>
                    <div className="review-in-all-reviews-page">
                        <a href="#">
                            <img alt="avartar"></img>
                            (Reviewer Account)
                        </a>
                        <div className="stars-and-review-time-of-review-in-all-reviews-page">
                            <div className="stars-of-review-in-all-reviews-page">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <p>(month/date/year)</p>
                        </div>
                        <p>Review</p>
                        <p>Read More</p>
                        <div className="number-of-helpful-of-review-in-all-reviews-page">
                            <i><FaThumbsUp /></i>
                            <p>Helpful (number)</p>
                        </div>
                    </div>
                    <div className="review-in-all-reviews-page">
                        <a href="#">
                            <img alt="avartar"></img>
                            (Reviewer Account)
                        </a>
                        <div className="stars-and-review-time-of-review-in-all-reviews-page">
                            <div className="stars-of-review-in-all-reviews-page">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <p>(month/date/year)</p>
                        </div>
                        <p>Review</p>
                        <p>Read More</p>
                        <div className="number-of-helpful-of-review-in-all-reviews-page">
                            <i><FaThumbsUp /></i>
                            <p>Helpful (number)</p>
                        </div>
                    </div>
                    <div className="review-in-all-reviews-page">
                        <a href="#">
                            <img alt="avartar"></img>
                            (Reviewer Account)
                        </a>
                        <div className="stars-and-review-time-of-review-in-all-reviews-page">
                            <div className="stars-of-review-in-all-reviews-page">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <p>(month/date/year)</p>
                        </div>
                        <p>Review</p>
                        <p>Read More</p>
                        <div className="number-of-helpful-of-review-in-all-reviews-page">
                            <i><FaThumbsUp /></i>
                            <p>Helpful (number)</p>
                        </div>
                    </div>
                    <div className="review-in-all-reviews-page">
                        <a href="#">
                            <img alt="avartar"></img>
                            (Reviewer Account)
                        </a>
                        <div className="stars-and-review-time-of-review-in-all-reviews-page">
                            <div className="stars-of-review-in-all-reviews-page">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <p>(month/date/year)</p>
                        </div>
                        <p>Review</p>
                        <p>Read More</p>
                        <div className="number-of-helpful-of-review-in-all-reviews-page">
                            <i><FaThumbsUp /></i>
                            <p>Helpful (number)</p>
                        </div>
                    </div>
                    <div className="review-in-all-reviews-page">
                        <a href="#">
                            <img alt="avartar"></img>
                            (Reviewer Account)
                        </a>
                        <div className="stars-and-review-time-of-review-in-all-reviews-page">
                            <div className="stars-of-review-in-all-reviews-page">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <p>(month/date/year)</p>
                        </div>
                        <p>Review</p>
                        <p>Read More</p>
                        <div className="number-of-helpful-of-review-in-all-reviews-page">
                            <i><FaThumbsUp /></i>
                            <p>Helpful (number)</p>
                        </div>
                    </div>
                    <div className="review-in-all-reviews-page">
                        <a href="#">
                            <img alt="avartar"></img>
                            (Reviewer Account)
                        </a>
                        <div className="stars-and-review-time-of-review-in-all-reviews-page">
                            <div className="stars-of-review-in-all-reviews-page">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <p>(month/date/year)</p>
                        </div>
                        <p>Review</p>
                        <p>Read More</p>
                        <div className="number-of-helpful-of-review-in-all-reviews-page">
                            <i><FaThumbsUp /></i>
                            <p>Helpful (number)</p>
                        </div>
                    </div>
                    <div className="review-in-all-reviews-page">
                        <a href="#">
                            <img alt="avartar"></img>
                            (Reviewer Account)
                        </a>
                        <div className="stars-and-review-time-of-review-in-all-reviews-page">
                            <div className="stars-of-review-in-all-reviews-page">
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                                <i className="bi bi-star"></i>
                            </div>
                            <p>(month/date/year)</p>
                        </div>
                        <p>Review</p>
                        <p>Read More</p>
                        <div className="number-of-helpful-of-review-in-all-reviews-page">
                            <i><FaThumbsUp /></i>
                            <p>Helpful (number)</p>
                        </div>
                    </div>
                    <div id="review-pages-bar-in-all-reviews-page">
                        <i id="back-to-previous-review-pages-of-review-pages-bar-in-all-reviews-page"><FaChevronLeft /></i>
                        <button id="default-selected-review-page-of-review-pages-bar-in-all-reviews-page">1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <p>...</p>
                        <i id="go-to-next-review-pages-of-review-pages-bar-in-all-reviews-page"><FaChevronRight /></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllReviews;
