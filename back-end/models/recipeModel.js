/* const { Double } = require("mongodb");
const mongoose = require("mongoose");

const recipesSchema = {
    _id: Number,
    recipe_name: String,
    rating: Double,
    number_of_ratings: Number,
    number_of_reviews: Number,
    number_of_photos: Number,
    description: String,
    author: Object,
    image: String, //
    ingredients: Array,
    directions: Array,
    reviews: Array,
    related_information: Object,
    is_private: Boolean,
    number_of_people_who_love_this_recipe: Number,
    images_of_recipe: Array //
}

const Recipe = mongoose.model("Recipe", recipesSchema);

module.exports = Recipe; */