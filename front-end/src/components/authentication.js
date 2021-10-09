import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./nav-bar";

import "./authentication.css";
import Google from "./Google.png";

function Authentication() {
    return (
        <>
            <NavBar />
            <div id="authentication-container">
                <h1>Join with us</h1>
                <p>FoodShare uses the recipes you save and cooks you follow to suggest great content for you. Join for free!</p>
                <div id="flex-box">
                    <button id="facebook-sign-in">
                        <i className="bi bi-facebook"></i>
                        <div id="facebook-text">Facebook</div>
                    </button>
                    <button id="google-sign-in">
                        <img className="google-icon" src={Google}></img>
                        <div id="google-text">Google</div>
                    </button>
                </div>
                <p id="or"><span>OR</span></p>
                <button id="sign-up-with-email"><a herf="#">Sign up with email</a></button>
                <p>Already a member? <a href="#" id="sign-in">Sign in</a>.</p>
            </div>
        </>
    );
}

export default Authentication;