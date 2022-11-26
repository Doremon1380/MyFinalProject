import React from "react";
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

            <div id="filter-recipes-page">
                <form id="filter-recipes" action="" name="filterRecipes">
                    <p className="titles-in-filter-recipes-page">Advanced search</p>
                    <ul id="search-by-alphabet-in-filter-recipes-page">
                        <li><a href="#">A</a></li>
                        <li><a href="#">B</a></li>
                        <li><a href="#">C</a></li>
                        <li><a href="#">D</a></li>
                        <li><a href="#">E</a></li>
                        <li><a href="#">F</a></li>
                        <li><a href="#">G</a></li>
                        <li><a href="#">H</a></li>
                        <li><a href="#">I</a></li>
                        <li><a href="#">J</a></li>
                        <li><a href="#">K</a></li>
                        <li><a href="#">L</a></li>
                        <li><a href="#">M</a></li>
                        <li><a href="#">N</a></li>
                        <li><a href="#">O</a></li>
                        <li><a href="#">P</a></li>
                        <li><a href="#">Q</a></li>
                        <li><a href="#">R</a></li>
                        <li><a href="#">S</a></li>
                        <li><a href="#">T</a></li>
                        <li><a href="#">U</a></li>
                        <li><a href="#">V</a></li>
                        <li><a href="#">W</a></li>
                        <li><a href="#">X</a></li>
                        <li><a href="#">Y</a></li>
                        <li><a href="#">Z</a></li>
                    </ul>
                    <div id="search-by-keyword-in-filter-recipes-page" name="srcByKeyword">
                        <p className="titles-in-filter-recipes-page">Search by keyword:</p>
                        <input type="text" name="keyword"></input>
                    </div>
                    <div id="search-by-categories-in-filter-recipes-page">
                        <p className="titles-in-filter-recipes-page">Search by categories:</p>
                        <hr></hr>
                        <div id="categories-of-recipes-in-filter-recipes-page" name="srcByCategoriesOfRecipes">
                            <div>
                                <p>World Cuisine:</p>
                                <label for="chinese-recipes-in-filter-recipes-page"><input id="chinese-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="worldCuisine" value="chinese-recipes"></input>Chinese Recipes</label>
                                <label for="german-recipes-in-filter-recipes-page"><input id="german-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="worldCuisine" value="german-recipes"></input>German Recipes</label>
                                <label for="indian-recipes-in-filter-recipes-page"><input id="indian-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="worldCuisine" value="indian-recipes"></input>Indian Recipes</label>
                                <label for="japanese-recipes-in-filter-recipes-page"><input id="japanese-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="worldCuisine" value="japanese-recipes"></input>Japanese Recipes</label>
                                <label for="russian-recipes-in-filter-recipes-page"><input id="russian-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="worldCuisine" value="russian-recipes"></input>Russian Recipes</label>
                                <label for="italian-recipes-in-filter-recipes-page"><input id="italian-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="worldCuisine" value="italian-recipes"></input>Italian Recipes</label>
                                <label for="mexican-recipes-in-filter-recipes-page"><input id="mexican-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="worldCuisine" value="mexican-recipes"></input>Mexican Recipes</label>
                                <label for="spanish-recipes-in-filter-recipes-page"><input id="spanish-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="worldCuisine" value="spanish-recipes"></input>Spanish Recipes</label>
                                <label for="global-recipes-in-filter-recipes-page"><input id="global-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="worldCuisine" value="global-recipes"></input>Global Recipes</label>
                            </div>
                            <div>
                                <p>Types of recipes:</p>
                                <label for="breakfast-recipes-in-filter-recipes-page"><input id="breakfast-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="categoryOfRecipes" value="breakfast-recipes"></input>Breakfast Recipes</label>
                                <label for="lunch-recipes-in-filter-recipes-page"><input id="lunch-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="categoryOfRecipes" value="lunch-recipes"></input>Lunch Recipes</label>
                                <label for="dinner-recipes-in-filter-recipes-page"><input id="dinner-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="categoryOfRecipes" value="dinner-recipes"></input>Dinner Recipes</label>
                                <label for="appetizer-and-snack-recipes-in-filter-recipes-page"><input id="appetizer-and-snack-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="categoryOfRecipes" value="appetizer-and-snack-recipes"></input>Appetizer & Snack Recipes</label>
                                <label for="dessert-recipes-in-filter-recipes-page"><input id="dessert-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="categoryOfRecipes" value="dessert-recipes"></input>Breakfast Recipes</label>
                                <label for="main-dish-recipes-in-filter-recipes-page"><input id="main-dish-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="categoryOfRecipes" value="main-dish-recipes"></input>Main Dish Recipes</label>
                                <label for="side-dish-recipes-in-filter-recipes-page"><input id="side-dish-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="categoryOfRecipes" value="side-dish-recipes"></input>Side Dish Recipes</label>
                                <label for="drink-recipes-in-filter-recipes-page"><input id="drink-recipes-in-filter-recipes-page" className="category-of-recipes-in-filter-recipes-page" type="checkbox" name="categoryOfRecipes" value="drink-recipes"></input>Drink Recipes</label>
                            </div>
                        </div>
                    </div >
                </form>
                <button type="submit" form="filter-recipes">Search</button>
                <hr></hr>
                <p className="titles-in-filter-recipes-page">Search results</p>
            </div>
        </>
    );
};

export default FilterRecipes;