import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import components
import SignIn from "./components/sign-in";
import Authentication from "./components/authentication";
import SignUp from "./components/sign-up";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route path="/" component={Home} exact /> */}
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Authentication" component={Authentication} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
