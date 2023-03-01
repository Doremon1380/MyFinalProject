import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./create-recipe.css";
import { Helmet } from 'react-helmet';
import { IoAddSharp } from "react-icons/io5";
import Select from 'react-select';
import { FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TopPart from "./top-part";
import { addDoc, collection } from "firebase/firestore";
import { db, auth, storage } from "../firebase-config";
import { v4 } from "uuid";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

const TITLE = 'Submit a recipe - FoodShare.com';

function CreateRecipe() {
    const [prepTime, setPrepTime] = useState("");
    const [cookTime, setCookTime] = useState("");
    const [totalTime, setTotalTime] = useState("");
    const [numberOfServings, setNumberOfServings] = useState("");
    const [recipeYield, setRecipeYield] = useState("");
    const [worldCuisine, setWorldCuisine] = useState("Global Recipe");
    const [typesOfRecipe, setTypesOfRecipe] = useState([]);
    const [recipeName, setRecipeName] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState([""]);
    const [directions, setDirections] = useState([""]);
    const [submitRecipe, setSubmitRecipe] = useState("");
    
    const recipesCollectionRef = collection(db, "recipes")
    let navigate = useNavigate();

    // const myRecipe = async () => {
    //     await addDoc(recipesCollectionRef, {
    //         prep: prepTime,
    //         cook: cookTime,
    //         total: totalTime,
    //         servings: numberOfServings,
    //         yield: recipeYield,
    //         worldCuisine,
    //         typesOfRecipe,
    //         recipeName,
    //         description,
    //         ingredients,
    //         directions,
    //         submitRecipe,
    //         // author: {}
    //     });
    //     navigate("/personal-recipes");
    // };

    const [recipeImageUpload, setRecipeImageUpload] = useState(null);
    const [url, setURL] = useState("");

    const handleImageChange = (event) => {
        if(event.target.files[0]) {
            setRecipeImageUpload(event.target.files[0]);
        };
        const url = URL.createObjectURL(event.target.files[0]);
        setURL(url);
    }

    const uploadRecipe = () => {
        /* For upload recipe image */
        if (recipeImageUpload == null) {
            return ;
        };
        const recipeImageRef = ref(storage, `images/recipes/${recipeImageUpload.name + v4()}`);
        uploadBytes(recipeImageRef, recipeImageUpload);
        /* For upload recipe infomations */
        addDoc(recipesCollectionRef, {
            recipeImage: url,
            prep: prepTime,
            cook: cookTime,
            total: totalTime,
            servings: numberOfServings,
            yield: recipeYield,
            worldCuisine,
            typesOfRecipe,
            recipeName,
            description,
            ingredients,
            directions,
            submitRecipe,
        });
        navigate("/personal-recipes");
        // uploadBytes(recipeImageRef, recipeImageUpload).then((snapshot) => {
        //     getDownloadURL(snapshot.ref).then((url) => {
        //         setURL(url);
        //     })
        // });
    };         

    var TypesOfRecipe = [ 
        { value: "Breakfast Recipe", label: "Breakfast Recipe" },
        { value: "Lunch Recipe", label: "Lunch Recipe" },
        { value: "Dinner Recipe", label: "Dinner Recipe" },
        { value: "Appetizer & Snack Recipe", label: "Appetizer & Snack Recipe" },
        { value: "Dessert Recipe", label: "Dessert Recipe" },
        { value: "Main Dish Recipe", label: "Main Dish Recipe" },
        { value: "Side Dish Recipe", label: "Side Dish Recipe" },
        { value: "Drink Recipe", label: "Drink Recipe" },
    ];

    const style = {
        control: base => ({
          ...base,
          border: 0,
          // This line disable the blue border
          boxShadow: "none"
        })
    };

    const handleIngredientsChange = (i, e) => {
        let newIngredients = [...ingredients];
        newIngredients[i] = e.target.value;
        setIngredients(newIngredients);
    };

    const addIngredientFields = () => {
        setIngredients([...ingredients, ""]);
    };

    const removeIngredientFields = (i) => {
        let newIngredients = [...ingredients];
        newIngredients.splice(i, 1);
        setIngredients(newIngredients);
    };

    const handleDirectionsChange = (i, e) => {
        let newDirections = [...directions];
        newDirections[i] = e.target.value;
        setDirections(newDirections);
    };

    const addDirectionFields = () => {
        setDirections([...directions, ""]);
    };

    const removeDirectionFields = (i) => {
        let newDirections = [...directions];
        newDirections.splice(i, 1);
        setDirections(newDirections);
    };

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="create-recipe-container">
                <TopPart />
                <form id="create-recipe" action="" name="createRecipe">
                    <div id="create-recipe-left-side-features">
                        {(() => {
                            if(recipeImageUpload == null) {
                                return (
                                    <div id="image-upload-button">
                                        <label for="file-upload" id="custom-file-upload">
                                            <i><FaCamera /></i>
                                            <p id="add-photo">Add a photo</p>
                                            <p>(no smaller than 960 X 960)</p>
                                            <input type="file" id="file-upload" onChange={handleImageChange}></input>
                                        </label>
                                    </div>
                                )
                            } else {
                                return  (                                
                                    <div id="image-upload-button">
                                        <label for="file-upload" id="custom-file-upload">
                                            <input type="file" id="file-upload" onChange={handleImageChange}></input>
                                            <img id="selected-image" src={url} alt="image"/>
                                        </label>
                                    </div>
                                )
                            }
                        }) ()}
                        <div className="create-recipe-left-side-features-flex">
                            <label for="prep-time">Prep time</label><br />
                            <input name="preparationTime" id="prep-time" onChange={(event) => {setPrepTime(event.target.value)}}></input><br />
                            <label for="cook-time">Cook time</label><br />
                            <input name="cookTime" id="cook-time" onChange={(event) => {setCookTime(event.target.value)}}></input><br />
                        </div>
                        <div className="create-recipe-left-side-features-flex">
                            <label for="total-time">Ready in</label><br />
                            <input name="totalTime" id="total-time" onChange={(event) => {setTotalTime(event.target.value)}}></input><br />
                            <label for="number-of-servings">Number of servings</label><br />
                            <input name="numberOfServings" id="number-of-servings" onChange={(event) => {setNumberOfServings(event.target.value)}}></input><br />
                        </div>
                        <div className="create-recipe-left-side-features-flex">
                            <label for="recipe-yield">Recipe yield</label><br />
                            <input placeholder="i.e. 2 rolls / 1 pie / 10 meatballs / etc." name="recipeYield" id="recipe-yield" onChange={(event) => {setRecipeYield(event.target.value)}}></input><br />
                            <label for="world-cuisine">World Cuisine</label><br />
                            <select name="world cuisine" id="world-cuisine" onChange={(event) => {setWorldCuisine(event.target.value)}}>
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
                        <label for="types-of-recipe">Types of recipe</label><br />
                        <Select styles={style} defaultValue={typesOfRecipe} id="types-of-recipe" name="typesOfRecipe" isMulti placeholder="Choose one or more suitable types for your recipe." options={TypesOfRecipe} components={{ IndicatorSeparator:() => null }} onChange={(item) => setTypesOfRecipe(item)}></Select>
                    </div>
                    <div id="create-recipe-right-side-features">
                        <label for="recipe-name">Recipe name</label><br />
                        <input name="recipeName" id="recipe-name" required onChange={(event) => {setRecipeName(event.target.value)}}></input><br />
                        <label for="description">Description</label><br />
                        <textarea name="description" rows="3" cols="80" id="description" required onChange={(event) => {setDescription(event.target.value)}}></textarea><br />
                        <div className="ingredients">
                            <label for="ingredients-field">Ingredients</label><br />
                            <div className="all-ingredients">
                                {ingredients.map((data, index) => {
                                    return (
                                        <div className="add-ingredient" key={index}>
                                            <input name="ingredients" id="ingredient-field" required value={data} onChange={(event) => {handleIngredientsChange(index, event)}}></input><br />
                                            {
                                                index ? 
                                                    <button id="remove-button-of-ingredient-field" onClick={() => removeIngredientFields(index)}>X</button>
                                                : null
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                            <button id="add-ingredient-button" onClick={() => addIngredientFields()}><i><IoAddSharp/></i>ADD INGREDIENT</button><br />
                        </div>
                        <div className="directions">
                            <label for="directions-field">Directions</label><br />
                            <div className="all-directions">
                                {directions.map((data, index) => {
                                    return (
                                        <div className="add-direction" key={index}>
                                            <p>Step {index + 1}</p>
                                            <div>
                                                <textarea name="directions" rows="3" cols="80" id="direction-field" required value={data} onChange={(event) => {handleDirectionsChange(index, event)}}></textarea><br />
                                                {
                                                    index ? 
                                                        <button id="remove-button-of-direction-field" onClick={() => removeDirectionFields(index)}>X</button>
                                                    : null
                                                }
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <button id="add-direction-button" onClick={() => addDirectionFields()}><i><IoAddSharp/></i>ADD STEP</button><br />
                        </div>
                        <div className="public-and-private-recipe">
                            <input name="submitRecipe" value="Private recipe" checked={submitRecipe === "Private recipe"} id="private-recipe" type="radio" onChange={(event) => {setSubmitRecipe(event.target.value)}} />
                            <label for="private-recipe" id="private-recipe-label">Private recipe</label>
                            <p>Only I can see this</p>
                            <input name="submitRecipe" value="Public recipe" checked={submitRecipe === "Public recipe"} id="public-recipe" type="radio" onChange={(event) => {setSubmitRecipe(event.target.value)}} />
                            <label for="public-recipe" id="public-recipe-label">Public recipe</label>
                            <p>Anyone can see this</p>
                        </div>
                    </div>
                </form>
                <div id="create-recipe-bottom-buttons">
                    <button id="create-recipe-save-button" type="submit" form="create-recipe" onClick={() => {uploadRecipe()}}>Save</button>
                    <a href="/about-me"><button id="create-recipe-cancel-button">Cancel</button></a>
                </div>
            </div>
        </>
    );
};

export default CreateRecipe;