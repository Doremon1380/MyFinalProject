//mongodb
require('./db/db');
 
const express = require("express"); 
const app = express();
const port = 5000;

const UserAccountRouter = require('./routes/UserAccountRoute'); 

// For accepting post form data
const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user', UserAccountRouter);

app.listen(port, function() {
  console.log(`express server is running on port ${port}!`);
})


/* const bodyParser = require('body-parser'); //middleware
app.use(bodyParser.urlencoded({extended: false})); */

/* // Route to Signin page
app.get("/signin", (req, res) => {
  res.sendFile(__dirname, "/front-end/components/sign-in.js")
})

app.post("/signin", (req, res) => {
  // Insert login code here
  let email = req.body.email;
  let password = req.body.password;
  res.send(`Email: ${email} Password: ${password}`);
}) */


/* const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// connect to mongoose
mongoose.connect("mongodb+srv://doremon1380:SKTT1.FAKER@doremon1380cluster.io4rp.mongodb.net/?retryWrites=true&w=majority");

// require route
app.use("/", require("./routes/recipeRoute")); */
