const express = require("express"); 
const UserAccount = require('./models/userAccountModel');
const app = express();
const port = 5000;

//mongodb
const dbConnect = require('./db/db');
dbConnect();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

const UserAccountRouter = require('./routes/userAccountRoute'); 
const { db } = require('./models/userAccountModel');

// For accepting post form data
const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user', UserAccountRouter);

// app.get("/signup", function(req, res) {
//   res.sendFile(__dirname + "/sign-up.js");
// })

// app.post("/signup", function(req, res) {
//   let newUserAccount = new UserAccount({
//     profile_name: req.body.accountName,
//     email: req.body.email,
//     password: req.body.password
//   })
//   newUserAccount.save();
//   res.redirect("/signup")
// })

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
