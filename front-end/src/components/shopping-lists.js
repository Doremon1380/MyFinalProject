import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import "./shopping-lists.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaChevronDown } from "react-icons/fa";

const TITLE = 'Shopping Lists - FoodShare.com';

function ShoppingLists() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <div id="shopping-lists-page">
                <div id="top-section-of-shopping-lists-page">
                    <div id="shopping-lists-title-in-shopping-lists-page">
                        <DropdownButton id="shopping-lists-in-shopping-lists-page" variant="" title="(Shopping list name)">
                            <Dropdown.Item className="shopping-list-in-shopping-lists-page">My shopping list</Dropdown.Item>
                            <Dropdown.Item className="shopping-list-in-shopping-lists-page">My shopping list</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-shopping-lists-in-shopping-lists-page" variant="" title={<i id="dropdown-icon-in-shopping-lists-page"><FaChevronDown /></i>}>
                            <Dropdown.Item className="shopping-list-in-shopping-lists-page">My shopping list</Dropdown.Item>
                            <Dropdown.Item className="shopping-list-in-shopping-lists-page">My shopping list</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div id="delete-button-and-create-button-in-shopping-lists-page">
                        <button><i id="delete-button-in-shopping-lists-page" class="bi bi-trash" title="Delete shopping list"></i></button>
                        <button><i id="create-button-in-shopping-lists-page" class="bi bi-plus-lg" title="Create new shopping list"></i></button>
                    </div>
                </div>
                <hr></hr>
                <div id="ingredients-in-shopping-lists-page">
                    <div id="add-ingredient-bar-in-shopping-lists-page">
                        <form>
                            <input name="addIngredient" type="text" placeholder="Add your own ingredient" aria-label="Add your own ingredient" />
                            <button id="add-ingredient-button-in-shopping-lists-page" type="button"><i className="bi bi-plus-lg"></i></button>
                        </form>
                    </div>
                    <div>
                        <div>
                            <p>Ingredients in list</p>
                            <div>
                                <button><i class="bi bi-arrow-clockwise" title="Undo"></i></button>
                                <button><i class="bi bi-pencil" title="Edit"></i></button>
                            </div>
                        </div>
                        <div>
                            <div className="ingredient-in-shopping-lists-page">
                                <input value="(ingredient)" name="ingredient" id="ingredient1" className="ingredient-checkbox-in-shopping-lists-page" type="checkbox"></input>
                                <label for="ingredient1" className="ingredient-checkbox-label-in-shopping-lists-page">(ingredient 1)</label>
                            </div>
                            <div className="ingredient-in-shopping-lists-page">
                                <input value="(ingredient)" name="ingredient" id="ingredient2" className="ingredient-checkbox-in-shopping-lists-page" type="checkbox"></input>
                                <label for="ingredient2" className="ingredient-checkbox-label-in-shopping-lists-page">(ingredient 2)</label>
                            </div>
                            <div className="ingredient-in-shopping-lists-page">
                                <input value="(ingredient)" name="ingredient" id="ingredient3" className="ingredient-checkbox-in-shopping-lists-page" type="checkbox"></input>
                                <label for="ingredient3" className="ingredient-checkbox-label-in-shopping-lists-page">(ingredient 3)</label>
                            </div>
                            <div className="ingredient-in-shopping-lists-page">
                                <input value="(ingredient)" name="ingredient" id="ingredient4" className="ingredient-checkbox-in-shopping-lists-page" type="checkbox"></input>
                                <label for="ingredient4" className="ingredient-checkbox-label-in-shopping-lists-page">(ingredient 4)</label>
                            </div>
                            <div className="ingredient-in-shopping-lists-page">
                                <input value="(ingredient)" name="ingredient" id="ingredient5" className="ingredient-checkbox-in-shopping-lists-page" type="checkbox"></input>
                                <label for="ingredient5" className="ingredient-checkbox-label-in-shopping-lists-page">(ingredient 5)</label>
                            </div>
                            <div className="ingredient-in-shopping-lists-page">
                                <input value="(ingredient)" name="ingredient" id="ingredient6" className="ingredient-checkbox-in-shopping-lists-page" type="checkbox"></input>
                                <label for="ingredient6" className="ingredient-checkbox-label-in-shopping-lists-page">(ingredient 6)</label>
                            </div>
                            <div className="ingredient-in-shopping-lists-page">
                                <input value="(ingredient)" name="ingredient" id="ingredient7" className="ingredient-checkbox-in-shopping-lists-page" type="checkbox"></input>
                                <label for="ingredient7" className="ingredient-checkbox-label-in-shopping-lists-page">(ingredient 7)</label>
                            </div>
                            <div className="ingredient-in-shopping-lists-page">
                                <input value="(ingredient)" name="ingredient" id="ingredient8" className="ingredient-checkbox-in-shopping-lists-page" type="checkbox"></input>
                                <label for="ingredient8" className="ingredient-checkbox-label-in-shopping-lists-page">(ingredient 8)</label>
                            </div>
                            <div className="ingredient-in-shopping-lists-page">
                                <input value="(ingredient)" name="ingredient" id="ingredient9" className="ingredient-checkbox-in-shopping-lists-page" type="checkbox"></input>
                                <label for="ingredient9" className="ingredient-checkbox-label-in-shopping-lists-page">(ingredient 9)</label>
                            </div>
                            <div className="ingredient-in-shopping-lists-page">
                                <input value="(ingredient)" name="ingredient" id="ingredient10" className="ingredient-checkbox-in-shopping-lists-page" type="checkbox"></input>
                                <label for="ingredient10" className="ingredient-checkbox-label-in-shopping-lists-page">(ingredient 10)</label>
                            </div>
                            <div className="ingredient-in-shopping-lists-page">
                                <input value="(ingredient)" name="ingredient" id="ingredient11" className="ingredient-checkbox-in-shopping-lists-page" type="checkbox"></input>
                                <label for="ingredient11" className="ingredient-checkbox-label-in-shopping-lists-page">(ingredient 11)</label>
                            </div>
                            <div className="ingredient-in-shopping-lists-page">
                                <input value="(ingredient)" name="ingredient" id="ingredient12" className="ingredient-checkbox-in-shopping-lists-page" type="checkbox"></input>
                                <label for="ingredient12" className="ingredient-checkbox-label-in-shopping-lists-page">(ingredient 12)</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingLists;