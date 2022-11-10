import React from "react";
import GoogleLogin from "react-google-login"
import NavBar from "./nav-bar";
import { GoogleLogout } from 'react-google-login';
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet'
import axios from "axios";

import "./sign-in.css";
import Google from "./Google.png";
import HidePassword from "./HidePassword.png";
import ShowPassword from "./ShowPassword.png";

import Cookies from "universal-cookie";
const cookies = new Cookies();

/* Tìm hiểu về state và các hàm ở dưới (đến hàm render) để hiểu kỹ về chúng */
const imagesPath = {
  HidePassword: HidePassword,
  ShowPassword: ShowPassword
};

const TITLE = 'Sign In - FoodShare.com';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaswordShown: false,
      open: true,
      email: "",
      password: "", 
      login: false
    };
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
    this.toggleImage = this.toggleImage.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.getImageName = this.getImageName.bind(this);
  };

  togglePasswordVisibility = () => {
    const { isPaswordShown } = this.state;
    this.setState({ isPaswordShown: !isPaswordShown })
  };

  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
  };

  getEmail = (e) => {
    this.setState({email: e.target.value});
  }

  getPassword = (e) => {
    this.setState({password: e.target.value});
  }

  getImageName = () => this.state.open ? "HidePassword" : "ShowPassword"

  responseGoogle = (handleLogin) => {
    // var profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    console.log('Email: ' + "1"); // This is null if the 'email' scope is not present.
  };
 
  render = () => {
    const { isPaswordShown, email, password } = this.state;
    const imageName = this.getImageName();

    const handleSubmit = (e) => {
      // prevent the form from refreshing the whole page
      e.preventDefault();
      // make a popup alert showing the "submitted" text
      const configuration = {
        method: "post",
        url: "http://localhost:5000/user/signin",
        data: {
          email,
          password
        },
      };
      // make the API call
      axios(configuration).then((result) => {
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        //redirect user to the auth page
        window.location.href = "/"
      }).catch((err) => {
        err = new Error();
      });
    };

    return (
      <>
        <GoogleLogin
          clientId="709159068773-a2lepf8vpf8nv3bq5k86fn4ujut03o6i.apps.googleusercontent.com"          
          buttonText="Login"        
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <GoogleLogout
          clientId="709159068773-a2lepf8vpf8nv3bq5k86fn4ujut03o6i.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={this.logout}
        >
        </GoogleLogout>
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
            <button id="google-sign-in">
              <img className="google-icon" src={Google}></img>
              <div id="google-text">Google</div>
            </button>
          </div>
          <h2>Sign in with email</h2>
          <p>For existing FoodShare users.</p>
          <form id="sign-in-form-in-sign-in-page" name="signInForm" onSubmit={(e) => handleSubmit(e)}>
            <div id="flex-box-2-in-sign-in-page">
              <input name="email" type="email" value={this.state.email} placeholder="Email" id="email-input" onChange={this.getEmail} required></input>
              <input name="password" type={(isPaswordShown) ? "text" : "password"} value={this.state.password} placeholder="Password" id="password-input" onChange={this.getPassword} required></input>
              <img src={imagesPath[imageName]} id="sign-in-password-icon" onClick={() => { this.toggleImage(); this.togglePasswordVisibility() }}></img>
            </div>
            <div id="flex-box-3-in-sign-in-page">
              <input name="rememberMe" value="rememberMe" id="remember-me" type="checkbox" />
              <label for="remember-me" id="remember-me-label">Remember me</label>
              <a href="#" id="forgot-password">Forgot password?</a>
            </div>
            {this.state.login ? (
              <p>You Are Logged in Successfully</p>
            ) : (
              <p>You Are Not Logged in</p>
            )}
          </form>
          <button id="login-button" type="submit" form="sign-in-form-in-sign-in-page" onClick={(e) => handleSubmit(e)}>LOG IN</button>
          <div id="for-new-users"><p>You are new?<a href="/signup"> Join for free!</a></p></div>
          <p>By signing in, you are agreeing to our <a href="#" id="terms-of-service">Terms of Service</a> and our <a href="#" id="privacy-policy">Privacy Policy</a>.</p>
        </div>
      </>
    );
  };
};

export default SignIn;