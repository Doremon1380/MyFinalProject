import React from "react";
import NavBar from "./nav-bar"
import "bootstrap/dist/css/bootstrap.min.css"
import { Helmet } from 'react-helmet'
// TODO: will update late
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoogleLogout, GoogleLogin } from 'react-google-login'

import {
    toggleImage,
    changePasswordVisibility
} from "./features/singin/singinSlice"

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

function SignIn() {

    const dispatch = useDispatch();
    const singinState = useSelector(state => state.singin);

    const [email, onEmailChange] = useState("");
    const [password, onPasswordChange] = useState("");

    // for more information
    // https://stackoverflow.com/questions/14850553/javascript-regex-for-password-containing-at-least-8-characters-1-number-1-uppe
    ///^
    //    (?=.*\d)                      // should contain at least one digit
    //    (?=.* [a - z])                // should contain at least one lower case
    //    (?=.* [A - Z])                // should contain at least one upper case
    //    (?=.*[!@#\$%\^\&*\)\(+=._-])  // should contain at least one from these special character
    //    [a - zA - Z0 - 9]{ 8,}        // should contain at least 8 from the mentioned characters
    //$ /
    const regexString = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^\&*\)\(+=._-])[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$";

    const signInCallback = (authResult) => {
        var profile = authResult.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        console.log('Email: ' + "1"); // This is null if the 'email' scope is not present.
    }

    const logOut = () => {

    }

    const paswordTest = (pw) => {
        let re = new RegExp(regexString);
        if (re.test()) {
            // TODO: pass to next step
        } else {
            // TODO: show notification
        }
    }

    let isPaswordVisible = singinState.isPaswordVisible;
    let imageName = singinState.open ? "HidePassword" : "ShowPassword";
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
                    <GoogleLogin
                        clientId="233921336924-5aeen5b4nrsh915vmlapdka1gnjg8ghv.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={signInCallback}
                        cookiePolicy={'single_host_origin'}
                    />
                    <GoogleLogout
                        clientId="709159068773-a2lepf8vpf8nv3bq5k86fn4ujut03o6i.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={logOut}
                    />
                </div>
                <h2>Sign in with email</h2>
                <p>For existing FoodShare users.</p>
                <form id="sign-in-form-in-sign-in-page" name="signInForm" action="">
                    <div id="flex-box-2-in-sign-in-page">
                        <input name="email" type="email" placeholder="Email" id="email-input"
                            onChange={
                                (event) => { onEmailChange(event.target.value); }
                            } />
                        <input name="password" type={isPaswordVisible ? "text" : "password"} placeholder="Password" id="password-input"
                            onChange={
                                (event) => { onPasswordChange(event.target.value); }
                            } />
                        <img src={imagesPath[imageName]} id="sign-in-password-icon" onClick={
                            () => {
                                dispatch(toggleImage());
                                dispatch(changePasswordVisibility());
                            }} />
                    </div>
                    <div id="flex-box-3-in-sign-in-page">
                        <input name="rememberMe" value="rememberMe" id="remember-me" type="checkbox" />
                        <label for="remember-me" id="remember-me-label" aria-label="Remember me" />
                        <a href="#" id="forgot-password">Forgot password?</a>
                    </div>
                    {/* <button id="sign-in-button" type="submit" form="sign-in-form-in-sign-in-page">Sign in</button> */}
                    {/* <div class="g-signin2" data-onsuccess={this.onSignIn()}></div> */}
                </form>
                <button id="for-new-users-button">You are new?
                    <a href="/signup">
                        <span> Join for free!</span>
                    </a>
                </button>
                <p>By signing in, you are agreeing to our <a href="#" id="terms-of-service">Terms of Service</a> and our <a href="#" id="privacy-policy">Privacy Policy</a>.</p>
            </div>
        </>
    );
}

export default SignIn;