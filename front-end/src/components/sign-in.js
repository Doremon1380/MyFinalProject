import React from "react";
import NavBar from "./nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./sign-in.css";
import Google from "./Google.png";
import HidePassword from "./HidePassword.png";
import ShowPassword from "./ShowPassword.png";

/* Tìm hiểu về state và các hàm ở dưới (đến hàm render) để hiểu kỹ về chúng */
const imagesPath = {
  HidePassword: HidePassword,
  ShowPassword: ShowPassword
}

class SignIn extends React.Component {

  state = {
    isPaswordShown: false,
    open: true
  }

  togglePasswordVisibility = () => {
    const {isPaswordShown} = this.state;
    this.setState({isPaswordShown : !isPaswordShown})
  }

  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
  }

  getImageName = () => this.state.open ? "HidePassword" : "ShowPassword"

  render = () => {
    const {isPaswordShown} = this.state;
    const imageName = this.getImageName();

    return (
      <>
        <NavBar />
        <div id="sign-in-container">
          <h1>Sign in with social</h1>
          <p>For new and existing FoodShare users.</p>
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
          <h2>Sign in with email</h2>
          <p>For existing FoodShare users.</p>
          <form>
            <div id="flex-box-2">
              <input type="email" placeholder="Email" id="email-input"></input>
              <input type={(isPaswordShown) ? "text" : "password"} placeholder="Password" id="password-input"></input>
              <img src={imagesPath[imageName]} id="sign-in-password-icon" onClick={() => {this.toggleImage(); this.togglePasswordVisibility()}}></img>
            </div>
            <div id="flex-box-3">
              <input id="remember-me" type="checkbox" />
              <label for="remember-me" id="remember-me-label">Remember me</label>
              <a href="#" id="forgot-password">Forgot password?</a>
            </div>
            <button id="sign-in-button">Sign in</button>
          </form>
          <button id="for-new-users-button">You are new?<a href="/Join"><span> Join for free!</span></a></button>
          <p>By signing in, you are agreeing to our <a href="#" id="terms-of-service">Terms of Service</a> and our <a href="#" id="privacy-policy">Privacy Policy</a>.</p>
        </div>
      </>
    );
  }
}
export default SignIn;