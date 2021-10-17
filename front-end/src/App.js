import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import components
import SignIn from "./components/sign-in";
import Authentication from "./components/authentication";
import SignUp from "./components/sign-up";
import PrivateProfile from "./components/private-profile";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route path="/" component={Home} exact /> */}
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Authentication" component={Authentication} />
          <Route path="/Join" component={SignUp} />
          <Route path="/Private Profile" component={PrivateProfile}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
