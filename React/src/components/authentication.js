import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet'

import "./authentication.css";
import Google from "./Google.png";

const TITLE = 'Authentication - FoodShare.com';

function Authentication() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="authentication-container">
                <h1>Join with us</h1>
                <p>FoodShare uses the recipes you save and cooks you follow to suggest great content for you. Join for free!</p>
                <div id="flex-box-in-authentication-page">
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
                <a href="/signup"><button id="sign-up-with-email">Sign up with email</button></a>
                <p>Already a member? <a href="/signin" id="sign-in">Sign in</a>.</p>
            </div>
        </>
    );
};

export default Authentication;