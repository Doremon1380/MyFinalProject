import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import components
import SignIn from "./components/sign-in";
import Authentication from "./components/authentication";
import SignUp from "./components/sign-up";
import PrivateProfile from "./components/private-profile";
import ProfileSettings from "./components/profile-settings";
import NotificationSettings from "./components/notification-settings";
import AccountSettings from "./components/account-settings";
import CreateRecipe from "./components/create-recipe";
import Photos from "./components/photos";
import PhotoId from "./components/photo-id";
import Home from "./components/home"
import RecipeDetails from "./components/recipe-details"
import AllReviews from "./components/all-reviews";
import FavoriteRecipes from "./components/favorite-recipes";
import FollowingAccounts from "./components/following-accounts";
import FollowerAccounts from "./components/follower-accounts";
import MadeRecipes from "./components/made-recipes";
import EvaluatedRecipes from "./components/evaluated-recipes";
import PersonalRecipes from "./components/personal-recipes";
import CollectionRecipes from "./components/collection-recipes";
import PublicProfileFavoriteRecipes from "./components/public-profile-favorite-recipes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route path="/" component={Home} exact /> */}
          <Route path="/signin" component={SignIn} />
          <Route path="/authentication" component={Authentication} />
          <Route path="/signup" component={SignUp} />
          <Route path="/about-me" component={PrivateProfile} />
          <Route path="/edit-profile" component={ProfileSettings} />
          <Route path="/notification-settings" component={NotificationSettings} />
          <Route path="/account-settings" component={AccountSettings} />
          <Route path="/create-recipe" component={CreateRecipe}/>
          <Route path="/photos" component={Photos}/>
          <Route path="/photo-id" component={PhotoId}/>
          <Route path="/foodshare.com" component={Home}/>
          <Route path="/recipe-details" component={RecipeDetails}/>
          <Route path="/all-reviews" component={AllReviews}/>
          <Route path="/favorite-recipes" component={FavoriteRecipes}/>
          <Route path="/following-accounts" component={FollowingAccounts}/>
          <Route path="/follower-accounts" component={FollowerAccounts}/>
          <Route path="/made-recipes" component={MadeRecipes}/>
          <Route path="/evaluated-recipes" component={EvaluatedRecipes}/>
          <Route path="/personal-recipes" component={PersonalRecipes}/>
          <Route path="/collection-recipes" component={CollectionRecipes}/>
          <Route path="/public-profile-favorite-recipes" component={PublicProfileFavoriteRecipes}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
