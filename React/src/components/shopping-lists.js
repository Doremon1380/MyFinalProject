import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import "./shopping-lists.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaChevronDown } from "react-icons/fa";

const TITLE = 'Shopping Lists - FoodShare.com';

class EditButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changeColor: false
        };
        this.toggleChangeColor = this.toggleChangeColor.bind(this);
    }

    toggleChangeColor() {
        this.setState((state) => ({
            changeColor: !state.changeColor
        }));
    }

    render() {
        let editButtonStyle = {
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid gray",
            backgroundColor: "white",
            marginRight: 10,
        };

        let editButtonIconStyle = {
            color: "normal"
        }

        if (this.state.changeColor == true) {
            editButtonStyle.backgroundColor = "rgb(251, 121, 31)"
            editButtonStyle.border = "none"
            editButtonIconStyle.color = "white"
        } else {
            editButtonIconStyle.color = "gray"
        }

        return (
            <button style={editButtonStyle} onClick={this.toggleChangeColor} title="Edit"><i style={editButtonIconStyle} class="bi bi-pencil"></i></button>
        );
    }
}

class ShoppingLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            checked: false,
        };

        this.checkboxChange = this.checkboxChange.bind(this);
    };

    checkboxChange() {
        this.setState({
            checked: !this.state.checked
        }); 
    };

    render() {
        let resetButtonStyle = {
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid gray",
            backgroundColor: "white",
            marginRight: 10
        }

        let resetButtonIconStyle = {
            color: "normal"
        }

        if (this.state.checked == true) {
            this.state.counter++;
        }
        else {
            this.state.counter--;
        };

        if (this.state.counter > 0) {
            resetButtonStyle.backgroundColor = "rgb(251, 121, 31)"
            resetButtonStyle.border = "none"
            resetButtonIconStyle.color = "white"
        }

        return (
            <>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>

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
                            <button title="Delete shopping list"><i id="delete-button-in-shopping-lists-page" class="bi bi-trash"></i></button>
                            <button title="Create new shopping list"><i id="create-button-in-shopping-lists-page" class="bi bi-plus-lg"></i></button>
                        </div>
                    </div>
                    <hr></hr>
                    <div id="ingredients-in-shopping-lists-page">
                        <div id="add-ingredient-bar-in-shopping-lists-page">
                            <form action="" name="ingredientAddedInShoppingList" id="add-ingredient-form-in-shopping-lists-page">
                                <input name="addIngredient" type="text" placeholder="Add your own ingredient" aria-label="Add your own ingredient" />
                                <button id="add-ingredient-button-in-shopping-lists-page" type="submit" form="add-ingredient-form-in-shopping-lists-page"><i className="bi bi-plus-lg"></i></button>
                            </form>
                        </div>
                        <div>
                            <div>
                                <p>Ingredients in list</p>
                                <div>
                                    <button type="reset" form="all-ingredients-in-shopping-lists-page" title="Reset" style={resetButtonStyle}><i class="bi bi-arrow-clockwise" style={resetButtonIconStyle}></i></button>
                                    <EditButton />
                                </div>
                            </div>
                            <form id="all-ingredients-in-shopping-lists-page" action="" name="ingredientsList">
                                <div className="ingredient-in-shopping-lists-page">
                                    <input value="(ingredient)" name="ingredient" id="ingredient1" className="ingredient-checkbox-in-shopping-lists-page" type="checkbox" onClick={this.checkboxChange}></input>
                                    <label for="ingredient1" className="ingredient-checkbox-label-in-shopping-lists-page" onClick={this.checkboxChange}>(ingredient 1)</label>
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
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

export default ShoppingLists;