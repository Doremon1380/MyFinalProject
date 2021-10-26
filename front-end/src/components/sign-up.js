import React from "react";
import NavBar from "./nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./sign-up.css";
import HidePassword from "./HidePassword.png";
import ShowPassword from "./ShowPassword.png";

const imagesPath = {
    HidePassword: HidePassword,
    ShowPassword: ShowPassword
}

class SignUp extends React.Component {
    state = {
        isPaswordShown: false,
        open: true
    }

    togglePasswordVisibility = () => {
        const { isPaswordShown } = this.state;
        this.setState({ isPaswordShown: !isPaswordShown })
    }

    toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
    }

    getImageName = () => this.state.open ? "HidePassword" : "ShowPassword"

    render = () => {
        const { isPaswordShown } = this.state;
        const imageName = this.getImageName();

        return (
            <>
                <NavBar />
                <div id="sign-up-container">
                    <div id="flex-box">
                        <h1>Sign up with email</h1>
                        <p id="for-member">Already a member?<a href="/SignIn"> Sign in</a>.</p>
                    </div>
                    <form>
                        <div id="flex-box-2">
                            <input placeholder="Account name" type="text" id="account-name-input"></input>
                            <input placeholder="Email" type="email" id="email-input"></input>
                            <input placeholder="Password" type={(isPaswordShown) ? "text" : "password"} id="password-input"></input>
                            <img src={imagesPath[imageName]} id="sign-up-password-icon" onClick={() => {this.toggleImage(); this.togglePasswordVisibility()}}></img>
                        </div>
                        <p id="password-rule">Please provide a password with at least 6 characters. Your password must include at least 1 uppercase letter or special character.</p>
                        <input id="agree" type="checkbox" />
                        <label for="agree" id="agree-label"><p>I agree to the <a href="#" id="terms-of-service">Terms of Service</a> and <a href="#" id="privacy-policy">Privacy Policy</a>.</p></label>
                        <button type="submit" id="create-account-button">Create my account</button>
                    </form>
                </div>
            </>
        );
    };
};

export default SignUp;