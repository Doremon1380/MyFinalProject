import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet'
import "./filter-recipes.css"

const TITLE = '"Recipe name" - FoodShare.com';

function FilterRecipes() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <div id="filter-recipes-page">
                <p className="titles-in-filter-recipes-page">Advanced search</p>
                <div id="search-by-alphabet-in-filter-recipes-page">
                    <button>A</button>
                    <button>B</button>
                    <button>C</button>
                    <button>D</button>
                    <button>E</button>
                    <button>F</button>
                    <button>G</button>
                    <button>H</button>
                    <button>I</button>
                    <button>J</button>
                    <button>K</button>
                    <button>L</button>
                    <button>M</button>
                    <button>N</button>
                    <button>O</button>
                    <button>P</button>
                    <button>Q</button>
                    <button>R</button>
                    <button>S</button>
                    <button>T</button>
                    <button>U</button>
                    <button>V</button>
                    <button>W</button>
                    <button>X</button>
                    <button>Y</button>
                    <button>Z</button>
                </div>
                <div id="search-by-keyword-in-filter-recipes-page">
                    <p className="titles-in-filter-recipes-page">Search by keyword:</p>
                    <input type="text"></input>
                </div>
                <div id="search-by-categories-in-filter-recipes-page">
                    <p className="titles-in-filter-recipes-page">Search by categories:</p>
                    <hr></hr>
                    <div id="categories-of-recipes-in-filter-recipes-page">
                        <label for="chinese-recipes-in-filter-recipes-page"><input id="chinese-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="chinese-recipes"></input>Chinese Recipes</label>
                        <label for="german-recipes-in-filter-recipes-page"><input id="german-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="german-recipes"></input>German Recipes</label>
                        <label for="indian-recipes-in-filter-recipes-page"><input id="indian-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="indian-recipes"></input>Indian Recipes</label>
                        <label for="japanese-recipes-in-filter-recipes-page"><input id="japanese-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="japanese-recipes"></input>Japanese Recipes</label>
                        <label for="russian-recipes-in-filter-recipes-page"><input id="russian-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="russian-recipes"></input>Russian Recipes</label>
                        <label for="italian-recipes-in-filter-recipes-page"><input id="italian-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="italian-recipes"></input>Italian Recipes</label>
                        <label for="mexican-recipes-in-filter-recipes-page"><input id="mexican-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="mexican-recipes"></input>Mexican Recipes</label>
                        <label for="spanish-recipes-in-filter-recipes-page"><input id="spanish-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="spanish-recipes"></input>Spanish Recipes</label>
                        <label for="breakfast-recipes-in-filter-recipes-page"><input id="breakfast-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="breakfast-recipes"></input>Breakfast Recipes</label>
                        <label for="lunch-recipes-in-filter-recipes-page"><input id="lunch-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="lunch-recipes"></input>Lunch Recipes</label>
                        <label for="dinner-recipes-in-filter-recipes-page"><input id="dinner-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="dinner-recipes"></input>Dinner Recipes</label>
                        <label for="appetizer-and-snack-recipes-in-filter-recipes-page"><input id="appetizer-and-snack-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="appetizer-and-snack-recipes"></input>Appetizer & Snack Recipes</label>
                        <label for="dessert-recipes-in-filter-recipes-page"><input id="dessert-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="dessert-recipes"></input>Breakfast Recipes</label>
                        <label for="main-dish-recipes-in-filter-recipes-page"><input id="main-dish-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="main-dish-recipes"></input>Main Dish Recipes</label>
                        <label for="side-dish-recipes-in-filter-recipes-page"><input id="side-dish-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="side-dish-recipes"></input>Side Dish Recipes</label>
                        <label for="drink-recipes-in-filter-recipes-page"><input id="drink-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="drink-recipes"></input>Drink Recipes</label>
                        <label for="global-recipes-in-filter-recipes-page"><input id="global-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="category" value="global-recipes"></input>Global Recipes</label>
                    </div>
                </div>
                <button type="submit">Search</button>
                <hr></hr>
                <p className="titles-in-filter-recipes-page">Search results</p>
            </div>
        </>
    );
};

export default FilterRecipes;