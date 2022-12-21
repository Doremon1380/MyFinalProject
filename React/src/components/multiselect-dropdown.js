import React from 'react';
import Select from 'react-select';
import "./multiselect-dropdown.css";

function MultiSelectDropdown() {
    var TypeOfRecipe = [ 
        { value: 1, label: "Breakfast Recipe" },
        { value: 2, label: "Lunch Recipe" },
        { value: 3, label: "Dinner Recipe" },
        { value: 4, label: "Appetizer & Snack Recipe" },
        { value: 5, label: "Dessert Recipe" },
        { value: 6, label: "Main Dish Recipe" },
        { value: 7, label: "Side Dish Recipe" },
        { value: 8, label: "Drink Recipe" },
    ];

    const style = {
        control: base => ({
          ...base,
          border: 0,
          // This line disable the blue border
          boxShadow: "none"
          
        })
    };

    return (
        <>
            <Select styles={style} id="type-of-recipe" name="type of recipe" isMulti placeholder="Choose one or more suitable types for your recipe." options={TypeOfRecipe} components={{ IndicatorSeparator:() => null }}></Select>
        </>
    );
};

export default MultiSelectDropdown;