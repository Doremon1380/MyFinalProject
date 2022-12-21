import React, {useState, useEffect} from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet'
import "./all-reviews.css"
import { FaThumbsUp } from "react-icons/fa";
import ReactPaginate from 'react-paginate';

const TITLE = '"Recipe name" - FoodShare.com';

const REVIEWS_PER_PAGE = 10;

function AllReviews() {
    const [currentPage, setCurrentPage] = useState(1);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
            setReviews(res.data);
            setLoading(false);
        }

        fetchReviews();
    }, []);

    const offset = currentPage * REVIEWS_PER_PAGE;

    const currentPageReviews = reviews
        .slice(offset, offset + REVIEWS_PER_PAGE)
        .map((review, id) => (
            <div key={id} className="review-in-all-reviews-page">
                <a href="/public-profile-about-me">
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
                <p>{review.body}</p>
                <div className="number-of-helpful-of-review-in-all-reviews-page">
                    <i><FaThumbsUp /></i>
                    <p>Helpful (number)</p>
                </div>
            </div>
        ))

    const pageCount = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

    const setPage = ({selected: selectedPage}) => {
        setCurrentPage(selectedPage);
    }

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

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
                    {
                        loading === true
                            ?
                            <h1>Loading...</h1>
                            :
                            currentPageReviews
                    }
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={pageCount}
                        onPageChange={setPage}
                        containerClassName={"review-pages-bar-in-all-reviews-page"}
                        activeClassName	={"default-selected-review-page-of-review-pages-bar-in-all-reviews-page"}
                        previousLinkClassName={"back-to-previous-review-pages-of-review-pages-bar-in-all-reviews-page"}
                        nextLinkClassName={"go-to-next-review-pages-of-review-pages-bar-in-all-reviews-page"}
                        pageClassName={"all-pages-of-review-pages-bar-in-all-reviews-page"}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={2}
                        breakClassName={"break-of-review-pages-bar-in-all-reviews-page"}
                        disabledLinkClassName={"disable-button-of-review-pages-bar-in-all-reviews-page"}
                    />
                </div>
            </div>
        </>
    );
};

export default AllReviews;
