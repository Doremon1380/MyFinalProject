import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet'
import "./sign-up.css";
import HidePassword from "./HidePassword.png";
import ShowPassword from "./ShowPassword.png";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db, auth, storage } from "../firebase-config";
import {createUserWithEmailAndPassword} from "firebase/auth";

const TITLE = 'Sign Up - FoodShare.com';

function SignUp() {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const imagesPath = {
        HidePassword: HidePassword,
        ShowPassword: ShowPassword
    };
    
    const userAccountsCollectionRef = collection(db, "userAccounts");
    let navigate = useNavigate();


    const togglePasswordVisibility = () => {
        setIsPasswordShown(!isPasswordShown);
    };

    const toggleImage = () => {
        setIsOpen(!isOpen);
    };

    const getImageName = () => isOpen ? "HidePassword" : "ShowPassword";
    
    const imageName = getImageName();

    const signUpWithEmailAndPassword = (e) => {
        e.preventDefault();
        /* For upload user account infomations */
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        });
        addDoc(userAccountsCollectionRef, {
            displayName,
            email,
            password,
        });
        navigate('/signin');
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
                        <input name="accountName" value={displayName} placeholder="Account name" type="text" id="account-name-input" onChange={(event) => setDisplayName(event.target.value)} required></input>
                        <input name="email" value={email} placeholder="Email" type="email" id="email-input" onChange={(event) => setEmail(event.target.value)} required></input>
                        <input name="password" value={password} placeholder="Password" type={(isPasswordShown) ? "text" : "password"} id="password-input" onChange={(event) => setPassword(event.target.value)} required></input>
                        <img src={imagesPath[imageName]} id="sign-up-password-icon" onClick={() => { toggleImage(); togglePasswordVisibility() }}></img>
                    </div>
                    <p id="password-rule">Please provide a password with at least 6 characters. Your password must include at least 1 uppercase letter or special character.</p>
                    <input name="agree" value="agreeToTheTermsOfServiceAndPrivacyPolicy" id="agree" type="checkbox" required/>
                    <label for="agree" id="agree-label"><p>I agree to the <a href="#" id="terms-of-service">Terms of Service</a> and <a href="#" id="privacy-policy">Privacy Policy</a>.</p></label>
                </form>
                <button type="submit" id="create-account-button" form="sign-up-form-in-sign-up-page" onClick={signUpWithEmailAndPassword}>Create my account</button>
            </div>
        </>
    );
};

export default SignUp;