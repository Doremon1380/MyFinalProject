const express = require('express');
const app = express();
const router = express.Router();

// mongodb user account model
const UserAccount = require("../models/userAccountModel");

// Password handler
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const auth = require("../auth");

// Signup
router.post('/signup', (req, res) => {
    let {profile_name, email, password} = req.body;
    profile_name = profile_name.trim();
    email = email.trim();
    password = password.trim();

    if(profile_name == "" || email == "" || password == "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        })
    } else if (/^\w{1,}|^\S{1,}|^\d{1,}/.test(profile_name) == false) {
        res.json({
            status: "FAILED",
            message: "Invalid account name!"
        })
    } else if (/^(?!\.)(?!.*\.@)(?!.*\.\.)(?=[a-z0-9.]{6,30}@)([0-9.]{8,}[a-z]+[a-z0-9.]*|[0-9.]{6,7}|(?=.*[a-z].*@)[a-z0-9.]{6,}[a-z0-9.]*)@([a-z]+\.)+[a-z]{2,4}$/.test(email) == false) {
        res.json({
            status: "FAILED",
            message: "Invalid email entered!"
        })
    } else if (password.length < 6) {
        res.json({
            status: "FAILED",
            message: "Password is too short!"
        })
    } else if (/((?=.*[A-Z].*)|(?=.*[\W].*))([\w\W]{6,})/.test(password) == false) {
        res.json({
            status: "FAILED",
            message: "Invalid password entered!"
        })
    } else {
        // Checking if user account already exists
        UserAccount.find({email}).then(result => {
            if(result.length) {
                // A user already exists
                res.json({
                    status: "FAILED",
                    message: "User with the provied email already exists!"
                })
            } else {
                // Try to create new user account:
                //password handling
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashPassword => {
                    const newUser = new UserAccount({
                        profile_name,
                        email,
                        password: hashPassword
                    })
                    newUser.save().then(result => {
                        res.json({
                            status: "SUCCESS",
                            message: "Signup successful",
                            data: result,
                        })
                    })
                    .catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "An error occurred while saving user account!"
                        })
                    })
                })
                .catch(err => {
                    res.json({
                        status: "FAILED",
                        message: "An error occurred while hashing password!"
                    })
                })
            }
        }).catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "An error occurred while checking for existing user!"
            })
        })
    }
});

// Signin
router.post('/signin', (req, res) => {
    let { email, password} = req.body;
    email = email.trim();
    password = password.trim();

    if(email == "" || password == "") {
        res.json({
            status: "FAILED",
            message: "Empty credentials supplied!"
        })
    } else {
        // Check if user account exist
        UserAccount.find({email}).then(data => {
            if(data.length) {
                // User exists
                const hashedPassword = data[0].password;
                bcrypt.compare(password, hashedPassword).then(result => {
                    // create JWT token
                    const token = jwt.sign(
                        {
                            userAcountId: data._id,
                            UserAccountEmail: data.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "24h"}
                    );
                    
                    if(result) {
                        //Password match
                        res.json({
                            status: "SUCCESS",
                            message: "Signin successful",
                            data: data,
                            token
                        })
                    } else {
                        res.json({
                            status: "FAILED",
                            message: "Invalid password entered!" 
                        }) 
                    }
                })
                .catch(err => {
                    res.json({
                        status: "FAILED",
                        message: "An error occurred while comparing password!"
                    })
                })
            } else {
                res.json({
                    status: "FAILED",
                    message: "Invalid credential entered!"
                })
            }
        })
        .catch(err => {
            res.json({
                status: "FAILED",
                message: "An error occurred while checking for existing user!"
            })
        })
    }
});

// free endpoint
app.get("/free-endpoint", (req, res) => {
    res.json({ message: "You are free to access me anytime" });
});
      
// authentication endpoint
app.get("/auth-endpoint", auth, (req, res) => {
    res.json({ message: "You are authorized to access me" });
});

module.exports = router;