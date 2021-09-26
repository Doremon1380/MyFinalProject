import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import components
import NavBar from "./components/nav-bar";
import SignIn from "./components/sign-in";

function App() {
  return (
    <NavBar/>
  );
}

export default App;
