import React from "react";
import GoogleLogin from "react-google-login"
import NavBar from "./nav-bar";
import { GoogleLogout } from 'react-google-login';
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet'

import "./sign-in.css";
//import "./client_secret.json";
import Google from "./Google.png";
import HidePassword from "./HidePassword.png";
import ShowPassword from "./ShowPassword.png";

/* Tìm hiểu về state và các hàm ở dưới (đến hàm render) để hiểu kỹ về chúng */
const imagesPath = {
    HidePassword: HidePassword,
    ShowPassword: ShowPassword
};

const TITLE = 'Sign In - FoodShare.com';
//const clientSecret = require("./client_secret.json");

class SignIn extends React.Component {

    state = {
        isPaswordShown: false,
        open: true
    };

    togglePasswordVisibility = () => {
        const { isPaswordShown } = this.state;
        this.setState({ isPaswordShown: !isPaswordShown })
    };

    toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
    };

    getImageName = () => this.state.open ? "HidePassword" : "ShowPassword"

    //responseGoogle = (handleLogin) => {
    //    var profile = handleLogin.getBasicProfile();
    //    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //    console.log('Name: ' + profile.getName());
    //    console.log('Image URL: ' + profile.getImageUrl());
    //    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    //    console.log('Email: ' + "1"); // This is null if the 'email' scope is not present.
    //};
    signInCallback = (authResult) => {
        var sr = 1;
        if (authResult['code']) {
            var storeAuthorCode = authResult['code'];

            //// Hide the sign-in button now that the user is authorized, for example:
            //('#signinButton').attr('style', 'display: none');

            // Send the code to the server
            var url = 'http://localhost:1102/create-user';

            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);

            //xhr.setRequestHeader("Authorization", "Bearer mt0dgHmLJMVQhvjpNXDyA83vA_PxH23Y");
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    console.log(xhr.responseText);
                }
            };

            var data = authResult['code'];

            xhr.send(data);
            xhr.response = function (res) {
                // Handle or verify the server response.
                var sr = res;
                //var profile = res.getBasicProfile();
                //console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
                //console.log('Name: ' + profile.getName());
                //console.log('Image URL: ' + profile.getImageUrl());
                //console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
                //console.log('Email: ' + "1"); // This is null if the 'email' scope is not present.
            };
            //$.ajax({
            //    type: 'POST',
            //    url: 'http://localhost:1102/create-user',
            //    // Always include an `X-Requested-With` header in every AJAX request,
            //    // to protect against CSRF attacks.
            //    headers: {
            //        'X-Requested-With': 'XMLHttpRequest'
            //    },
            //    contentType: 'application/octet-stream; charset=utf-8',
            //    success: function (result) {
            //        // Handle or verify the server response.
            //        var profile = handleLogin.getBasicProfile();
            //        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            //        console.log('Name: ' + profile.getName());
            //        console.log('Image URL: ' + profile.getImageUrl());
            //        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
            //        console.log('Email: ' + "1"); // This is null if the 'email' scope is not present.
            //    },
            //    processData: false,
            //    data: authResult['code']
            //});
        } else {
            // There was an error.
        }
    };

    render = () => {
        const { isPaswordShown } = this.state;
        const imageName = this.getImageName();

        return (
            <>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>

                <NavBar />
                <div id="sign-in-container">
                    <h1>Sign in with social</h1>
                    <p>For new and existing FoodShare users.</p>
                    <div id="flex-box-in-sign-in-page">
                        <button id="facebook-sign-in">
                            <i className="bi bi-facebook"></i>
                            <div id="facebook-text">Facebook</div>
                        </button>
                        {/*<button id="google-sign-in">*/}
                        {/*  <img className="google-icon" src={Google}></img>*/}
                        {/*  <div id="google-text">Google</div>*/}
                        {/*</button>*/}
                        <GoogleLogin
                            clientId="233921336924-5aeen5b4nrsh915vmlapdka1gnjg8ghv.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.signInCallback}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                    <h2>Sign in with email</h2>
                    <p>For existing FoodShare users.</p>
                    <form id="sign-in-form-in-sign-in-page" name="signInForm" action="">
                        <div id="flex-box-2-in-sign-in-page">
                            <input name="email" type="email" placeholder="Email" id="email-input"></input>
                            <input name="password" type={(isPaswordShown) ? "text" : "password"} placeholder="Password" id="password-input"></input>
                            <img src={imagesPath[imageName]} id="sign-in-password-icon" onClick={() => { this.toggleImage(); this.togglePasswordVisibility() }}></img>
                        </div>
                        <div id="flex-box-3-in-sign-in-page">
                            <input name="rememberMe" value="rememberMe" id="remember-me" type="checkbox" />
                            <label for="remember-me" id="remember-me-label">Remember me</label>
                            <a href="#" id="forgot-password">Forgot password?</a>
                        </div>
                        {/* <button id="sign-in-button" type="submit" form="sign-in-form-in-sign-in-page">Sign in</button> */}
                        {/* <div class="g-signin2" data-onsuccess={this.onSignIn()}></div> */}
                    </form>
                    <button id="for-new-users-button">You are new?<a href="/signup"><span> Join for free!</span></a></button>
                    <p>By signing in, you are agreeing to our <a href="#" id="terms-of-service">Terms of Service</a> and our <a href="#" id="privacy-policy">Privacy Policy</a>.</p>
                </div>
            </>
        );
    };
};

export default SignIn;