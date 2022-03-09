import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./private-profile.css";
import { Helmet } from 'react-helmet'

import { FaHeart } from "react-icons/fa";

const TITLE = 'FoodShare - Recipe Inspiration';

function Home1() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="address-container">
                <p> go to <a href="/home" id="home">Home</a>.</p>
                <p> go to <a href="/signin" id="sign-in">Sign in</a>.</p>
                <p> go to <a href="/authentication" id="authentication">authentication</a>.</p>
                <p> go to <a href="/signup" id="sign-up">Sign up</a>.</p>
            </div>
        </>
    );
}

export default Home1;
