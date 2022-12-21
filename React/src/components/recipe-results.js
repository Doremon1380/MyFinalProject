import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipe-results.css";
import { Helmet } from 'react-helmet'
import { FaMinusCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BsFillXCircleFill } from "react-icons/bs";

const TITLE = 'Account Settings - FoodShare.com';

class RecipeResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            includedIngredients: [],
            excludedIngredients: [],
            inputIncludedIngredients: "",
            inputExcludedIngredients: "",
        };
        this.addIncludedIngredients = this.addIncludedIngredients.bind(this);
        this.addExcludedIngredients = this.addExcludedIngredients.bind(this);
        this.saveIncludedIngredients = this.saveIncludedIngredients.bind(this);
        this.saveExcludedIngredients = this.saveExcludedIngredients.bind(this);
        this.removeIncludedIngredients = this.removeIncludedIngredients.bind(this);
        this.removeExcludedIngredients = this.removeExcludedIngredients.bind(this);
    };

    addIncludedIngredients(event) {
        this.setState({
            inputIncludedIngredients: event.target.value,
        });
    };

    addExcludedIngredients(event) {
        this.setState({
            inputExcludedIngredients: event.target.value,
        });
    };

    saveIncludedIngredients() {
        this.setState({
            includedIngredients: [...this.state.includedIngredients, this.state.inputIncludedIngredients]
        });
    };

    saveExcludedIngredients() {
        this.setState({
            excludedIngredients: [...this.state.excludedIngredients, this.state.inputExcludedIngredients]
        });
    };

    removeIncludedIngredients(event) {
        let includedIngredients = [...this.state.includedIngredients];
        let index = includedIngredients.indexOf(event.target.value);
        if (index !== -1) {
            includedIngredients.splice(index, 1);
            this.setState({ includedIngredients: includedIngredients })
        }
    };

    removeExcludedIngredients(event) {
        this.setState({
            excludedIngredients: this.state.excludedIngredients.filter(function (ingredient) {
                return ingredient !== event.target.value;
            })
        });
    };

    render() {
        return (
            <>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>

                <div id="recipe-results-page">
                    <div id="top-section-of-recipe-results-page"></div>
                    <div id="recipes-filter-and-results-in-recipe-results-page">
                        <div id="recipe-results-for-keyword-in-recipe-results-page">
                            <h1>Recipe Results for (keyword)</h1>
                        </div>
                        <div>
                            <div id="recipes-filter-in-recipe-results-page">
                                <form id="filters-of-recipes-filter-in-recipe-results-page" name="filters" action="">
                                    <div id="title-and-clear-all-button-of-recipes-filter-in-recipe-results-page">
                                        <p>Filters</p>
                                        <button type="reset">Clear all</button>
                                    </div>
                                    <div id="filters-by-keyword-or-ingredients-of-recipes-filter-in-recipe-results-page">
                                        <div id="filter-by-keyword-of-recipes-filter-in-recipe-results-page">
                                            <p>Recipe or keyword</p>
                                            <input placeholder="Keywords" name="recipeOrKeyword"></input>
                                        </div>
                                        <div id="filters-by-ingredients-of-recipes-filter-in-recipe-results-page"> 
                                            <p>Ingredients</p>
                                            <p>Include these ingredients</p>
                                            <div id="filter-by-included-ingredient-of-recipes-filter-in-recipe-results-page">
                                                <input placeholder="Include ingredients" name="includedIngredients" onChange={this.addIncludedIngredients}></input>
                                                <i class="bi bi-plus-circle-fill" onClick={this.saveIncludedIngredients}></i>
                                                {
                                                    this.state.includedIngredients.map((ingredients, index) => {
                                                        return (
                                                            <div id="included-ingredient-of-recipes-filter-in-recipe-results-page">
                                                                <i class="bi bi-plus"></i>
                                                                <p key={ingredients + index}>{ingredients}</p>
                                                                <BsFillXCircleFill id="remove-included-ingredient-button-of-recipes-filter-in-recipe-results-page" onClick={this.removeIncludedIngredients} />
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                            <p>Do not include these ingredients</p>
                                            <div id="filter-by-excluded-ingredient-of-recipes-filter-in-recipe-results-page">
                                                <input placeholder="Exclude ingredients" name="excludedIngredients" onChange={this.addExcludedIngredients}></input>
                                                <i><FaMinusCircle onClick={this.saveExcludedIngredients} /></i>
                                                {
                                                    this.state.excludedIngredients.map((ingredients, index) => {
                                                        return (
                                                            <div id="excluded-ingredient-of-recipes-filter-in-recipe-results-page">
                                                                <i class="bi bi-dash"></i>
                                                                <p key={ingredients + index}>{ingredients}</p>
                                                                <BsFillXCircleFill id="remove-excluded-ingredient-button-of-recipes-filter-in-recipe-results-page" onClick={this.removeExcludedIngredients} />
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <button id="show-more-results-button-in-recipe-results-page" type="submit" form="filters-in-recipe-results-page">SHOW RESULTS</button>
                                </form>
                            </div>
                            <div id="recipes-in-recipe-results-page">
                                <p id="number-of-recipes-in-recipe-results-page">(number) Results</p>
                                <div>
                                    <div className="recipe-in-recipe-results-page">
                                        <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                        <a href="/recipe-details">
                                            <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                            <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                            <div className="recipe-ratings-in-recipe-results-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-recipe-results-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                    <div className="recipe-in-recipe-results-page">
                                        <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                        <a href="/recipe-details">
                                            <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                            <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                            <div className="recipe-ratings-in-recipe-results-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-recipe-results-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                    <div className="recipe-in-recipe-results-page">
                                        <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                        <a href="/recipe-details">
                                            <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                            <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                            <div className="recipe-ratings-in-recipe-results-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-recipe-results-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                    <div className="recipe-in-recipe-results-page">
                                        <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                        <a href="/recipe-details">
                                            <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                            <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                            <div className="recipe-ratings-in-recipe-results-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-recipe-results-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                    <div className="recipe-in-recipe-results-page">
                                        <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                        <a href="/recipe-details">
                                            <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                            <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                            <div className="recipe-ratings-in-recipe-results-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-recipe-results-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                    <div className="recipe-in-recipe-results-page">
                                        <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                        <a href="/recipe-details">
                                            <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                            <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                            <div className="recipe-ratings-in-recipe-results-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-recipe-results-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                    <div className="recipe-in-recipe-results-page">
                                        <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                        <a href="/recipe-details">
                                            <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                            <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                            <div className="recipe-ratings-in-recipe-results-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-recipe-results-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                    <div className="recipe-in-recipe-results-page">
                                        <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                        <a href="/recipe-details">
                                            <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                            <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                            <div className="recipe-ratings-in-recipe-results-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-recipe-results-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                    <div className="recipe-in-recipe-results-page">
                                        <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                        <a href="/recipe-details">
                                            <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                            <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                            <div className="recipe-ratings-in-recipe-results-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-recipe-results-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                    <div className="recipe-in-recipe-results-page">
                                        <button className="save-recipe-button-in-recipe-results-page"><i><FaHeart /></i></button>
                                        <a href="/recipe-details">
                                            <img className="recipe-photo-in-recipe-results-page" src="#" alt="(Recipe name)"></img>
                                            <p className="recipe-name-in-recipe-results-page">Recipe name</p>
                                        </a>
                                        <div className="recipe-ratings-and-favorites-in-recipe-results-page">
                                            <div className="recipe-ratings-in-recipe-results-page">
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <i class="bi bi-star"></i>
                                                <p>NoRs</p>
                                            </div>
                                            <div className="recipe-favorites-in-recipe-results-page">
                                                <i><FaHeart /></i>
                                                <p>NoFs</p>
                                            </div>
                                        </div>
                                        <p className="recipe-author-in-recipe-results-page">By <a href="/public-profile-personal-recipes">Author</a></p>
                                    </div>
                                </div>
                                <button id="load-more-recipes-button-in-recipe-results-page">SHOW MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default RecipeResults;