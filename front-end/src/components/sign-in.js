import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet'

import "./sign-in.css";
import Google from "./Google.png";
import HidePassword from "./HidePassword.png";
import ShowPassword from "./ShowPassword.png";
import {auth, provider} from "../firebase-config";
import {signInWithPopup, signInWithEmailAndPassword} from "firebase/auth";

/* Tìm hiểu về state và các hàm ở dưới (đến hàm render) để hiểu kỹ về chúng */
const TITLE = 'Sign In - FoodShare.com';

function SignIn() {
    const [isPaswordShown, setIsPasswordShown] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then(() => {
        localStorage.setItem("isAuth", true);
        window.location.pathname = "/";
      }).catch((error) => {
        console.log(error);
      }); 
    };

    const logInWithEmailAndPassword = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        localStorage.setItem("isAuth", true);
        window.location.pathname = "/";
      }).catch((error) => {
        console.log(error);
      });
    };

    function togglePasswordVisibility() {
      setIsPasswordShown(!isPaswordShown)
    };
  
    function toggleImage() {
      setIsOpen(!isOpen);
    };
  
    function getImageName() {
      if(isOpen) {
        return "ShowPassword";
      }
      else {
        return "HidePassword";
      }
    }
    
    const imagesPath = {
      HidePassword: HidePassword,
      ShowPassword: ShowPassword
    };

    const imageName = getImageName();

    return(
      <>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>

        <div id="sign-in-container">
          <h1>Sign in with social</h1>
          <p>For new and existing FoodShare users.</p>
          <div id="flex-box-in-sign-in-page">
            <button id="facebook-sign-in">
              <i className="bi bi-facebook"></i>
              <div id="facebook-text">Facebook</div>
            </button>
            <button id="google-sign-in" onClick={signInWithGoogle}>
              <img className="google-icon" src={Google}></img>
              <div id="google-text">Google</div>
            </button>
          </div>
          <h2>Sign in with email</h2>
          <p>For existing FoodShare users.</p>
          <form id="sign-in-form-in-sign-in-page" name="signInForm">
            <div id="flex-box-2-in-sign-in-page">
              <input name="email" type="email" value={email} placeholder="Email" id="email-input" onChange={event=> setEmail(event.target.value)} required></input>
              <input name="password" type={(isPaswordShown) ? "text" : "password"} value={password} placeholder="Password" id="password-input" onChange={event=> setPassword(event.target.value)} required></input>
              <img src={imagesPath[imageName]} id="sign-in-password-icon" onClick={() => {toggleImage(); togglePasswordVisibility() }}></img>
            </div>
            <div id="flex-box-3-in-sign-in-page">
              <input name="rememberMe" value="rememberMe" id="remember-me" type="checkbox" />
              <label for="remember-me" id="remember-me-label">Remember me</label>
              <a href="#" id="forgot-password">Forgot password?</a>
            </div>
          </form>
          <button id="login-button" type="submit" form="sign-in-form-in-sign-in-page" onClick={logInWithEmailAndPassword}>LOG IN</button>
          <div id="for-new-users"><p>You are new?<a href="/signup"> Join for free!</a></p></div>
          <p>By signing in, you are agreeing to our <a href="#" id="terms-of-service">Terms of Service</a> and our <a href="#" id="privacy-policy">Privacy Policy</a>.</p>
        </div>
      </>
    );
};

export default SignIn;
