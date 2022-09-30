const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// connect to mongoose
mongoose.connect("mongodb+srv://doremon1380:SKTT1.FAKER@doremon1380cluster.io4rp.mongodb.net/?retryWrites=true&w=majority");

// require route
app.use("/", require("./routes/recipeRoute"));

app.listen(5000, function() {
  console.log("express server is running on port 5000!");
})