import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./create-recipe.css";
import { Helmet } from 'react-helmet';

import TopPart from "./top-part";
import MultiSelectDropdown from "./multiselect-dropdown";
import { FaCamera } from "react-icons/fa";

const TITLE = 'Submit a recipe - FoodShare.com';

function CreateRecipe() {

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <div id="create-recipe-container">
                <TopPart />
                <form id="create-recipe" action="" name="createRecipe">
                    <div id="create-recipe-left-side-features">
                        <button>
                            <i><FaCamera /></i>
                            <p id="add-photo">Add a photo</p>
                            <p>(no smaller than 960 X 960)</p>
                        </button><br />
                        <div className="create-recipe-left-side-features-flex">
                            <label for="prep-time">Prep time</label><br />
                            <input name="preparationTime" id="prep-time"></input><br />
                            <label for="cook-time">Cook time</label><br />
                            <input name="cookTime" id="cook-time"></input><br />
                        </div>
                        <div className="create-recipe-left-side-features-flex">
                            <label for="total-time">Ready in</label><br />
                            <input name="totalTime" id="total-time"></input><br />
                            <label for="number-of-servings">Number of servings</label><br />
                            <input name="numberOfServings" id="number-of-servings"></input><br />
                        </div>
                        <div className="create-recipe-left-side-features-flex">
                            <label for="recipe-yield">Recipe yield</label><br />
                            <input placeholder="i.e. 2 rolls / 1 pie / 10 meatballs / etc." name="recipeYield" id="recipe-yield"></input><br />
                            <label for="world-cuisine">World Cuisine</label><br />
                            <select name="world cuisine" id="world-cuisine">
                                <option value="Chinese Recipe">Chinese Recipe</option>
                                <option value="German Recipe">German Recipe</option>
                                <option value="Indian Recipe">Indian Recipe</option>
                                <option value="Japanese Recipe">Japanese Recipe</option>
                                <option value="Russian Recipe">Russian Recipe</option>
                                <option value="Italian Recipe">Italian Recipe</option>
                                <option value="Spanish Recipe">Spanish Recipe</option>
                                <option value="Global Recipe" selected>Global Recipe</option>
                            </select><br />
                        </div>
                        <label for="type-of-recipe">Types of recipe</label><br />
                        <MultiSelectDropdown />
                    </div>
                    <div id="create-recipe-right-side-features">
                        <label for="recipe-name">Recipe name</label><br />
                        <input name="recipeName" id="recipe-name" required></input><br />
                        <label for="description">Description</label><br />
                        <textarea name="description" rows="3" cols="80" id="description" required></textarea><br />
                        <label for="ingredients">Ingredients</label><br />
                        <textarea name="ingredients" rows="5" cols="80" placeholder="Put each ingredient on its own line" id="ingredients" required></textarea><br />
                        <label for="directions">Directions</label><br />
                        <textarea name="directions" rows="5" cols="80" placeholder="Put each step on its own line" id="directions" required></textarea><br />
                        <input name="submitRecipe" value="Private recipe" id="private-recipe" type="radio" />
                        <label for="private-recipe" id="private-recipe-label">Private recipe</label>
                        <p>Only I can see this</p>
                        <input name="submitRecipe" value="Public recipe" id="public-recipe" type="radio" />
                        <label for="public-recipe" id="public-recipe-label">Public recipe</label>
                        <p>Anyone can see this</p>
                    </div>
                </form>
                <div id="create-recipe-bottom-buttons">
                    <button id="create-recipe-save-button" type="submit" form="create-recipe">Save</button>
                    <a href="/about-me"><button id="create-recipe-cancel-button">Cancel</button></a>
                </div>
            </div>
        </>
    );
};

export default CreateRecipe;