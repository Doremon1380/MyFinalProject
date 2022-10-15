import React from "react";
import NavBar from "./nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet'

import "./sign-up.css";
import HidePassword from "./HidePassword.png";
import ShowPassword from "./ShowPassword.png";

const imagesPath = {
    HidePassword: HidePassword,
    ShowPassword: ShowPassword
};

const TITLE = 'Sign Up - FoodShare.com';

class SignUp extends React.Component {
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

    render = () => {
        const { isPaswordShown } = this.state;
        const imageName = this.getImageName();

        return (
            <>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>

                <NavBar />
                <div id="sign-up-container">
                    <div id="flex-box-in-sign-up-page">
                        <h1>Sign up with email</h1>
                        <p id="for-member">Already a member?<a href="/signin"> Sign in</a>.</p>
                    </div>
                    <form id="sign-up-form-in-sign-up-page" name="signUpForm" action="">
                        <div id="flex-box-2-in-sign-up-page">
                            <input name="accountName" placeholder="Account name" type="text" id="account-name-input" required></input>
                            <input name="email" placeholder="Email" type="email" id="email-input" required></input>
                            <input name="password" placeholder="Password" type={(isPaswordShown) ? "text" : "password"} id="password-input" required></input>
                            <img src={imagesPath[imageName]} id="sign-up-password-icon" onClick={() => { this.toggleImage(); this.togglePasswordVisibility() }}></img>
                        </div>
                        <p id="password-rule">Please provide a password with at least 6 characters. Your password must include at least 1 uppercase letter or special character.</p>
                        <input name="agree" value="agreeToTheTermsOfServiceAndPrivacyPolicy" id="agree" type="checkbox" required/>
                        <label for="agree" id="agree-label"><p>I agree to the <a href="#" id="terms-of-service">Terms of Service</a> and <a href="#" id="privacy-policy">Privacy Policy</a>.</p></label>
                        <button type="submit" id="create-account-button" form="sign-up-form-in-sign-up-page">Create my account</button>
                    </form>
                </div>
            </>
        );
    };
};

export default SignUp;