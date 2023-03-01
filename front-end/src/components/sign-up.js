import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet'
import "./sign-up.css";
import HidePassword from "./HidePassword.png";
import ShowPassword from "./ShowPassword.png";
import { addDoc, collection } from "firebase/firestore";
import { db, auth, storage } from "../firebase-config";

const TITLE = 'Sign Up - FoodShare.com';

const imagesPath = {
    HidePassword: HidePassword,
    ShowPassword: ShowPassword
};

const userAccountsCollectionRef = collection(db, "user_accounts");

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPasswordShown: false,
            open: true,
            profile_name: "",
            email: "",
            password: "",
        };
        this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
        this.toggleImage = this.toggleImage.bind(this);
        this.getProfile_name = this.getProfile_name.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.getImageName = this.getImageName.bind(this);
    }

    togglePasswordVisibility = () => {
        this.setState({ isPasswordShown: !this.state.isPasswordShown })
    };

    toggleImage = () => {
        this.setState({ open: !this.state.open })
    };

    getProfile_name = (e) => {
        this.setState({profile_name: e.target.value});
    }

    getEmail = (e) => {
        this.setState({email: e.target.value});
    }

    getPassword = (e) => {
        this.setState({password: e.target.value});
    }

    getImageName = () => this.state.open ? "HidePassword" : "ShowPassword"

    render = () => {
        const { isPasswordShown, profile_name, email, password } = this.state;
        const imageName = this.getImageName();

        const uploadUserAccount = () => {
            /* For upload user account infomations */
            addDoc(userAccountsCollectionRef, {
               profileName: profile_name,
               email,
               password,
            });
        };

        return (
            <>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>

                <div id="sign-up-container">
                    <div id="flex-box-in-sign-up-page">
                        <h1>Sign up with email</h1>
                        <p id="for-member">Already a member?<a href="/signin"> Sign in</a>.</p>
                    </div>
                    <form id="sign-up-form-in-sign-up-page" name="signUpForm">
                        <div id="flex-box-2-in-sign-up-page">
                            <input name="accountName" value={profile_name} placeholder="Account name" type="text" id="account-name-input" onChange={this.getProfile_name} required></input>
                            <input name="email" value={email} placeholder="Email" type="email" id="email-input" onChange={this.getEmail} required></input>
                            <input name="password" value={password} placeholder="Password" type={(isPasswordShown) ? "text" : "password"} id="password-input" onChange={this.getPassword} required></input>
                            <img src={imagesPath[imageName]} id="sign-up-password-icon" onClick={() => { this.toggleImage(); this.togglePasswordVisibility() }}></img>
                        </div>
                        <p id="password-rule">Please provide a password with at least 6 characters. Your password must include at least 1 uppercase letter or special character.</p>
                        <input name="agree" value="agreeToTheTermsOfServiceAndPrivacyPolicy" id="agree" type="checkbox" required/>
                        <label for="agree" id="agree-label"><p>I agree to the <a href="#" id="terms-of-service">Terms of Service</a> and <a href="#" id="privacy-policy">Privacy Policy</a>.</p></label>
                        <button type="submit" id="create-account-button" form="sign-up-form-in-sign-up-page" onClick={() => uploadUserAccount()}>Create my account</button>
                    </form>
                </div>
            </>
        );
    };
};

export default SignUp;