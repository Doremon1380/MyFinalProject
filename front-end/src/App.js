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
import PublicProfileAboutMe from "./components/public-profile-about-me";
import PublicProfileCollectionRecipes from "./components/public-profile-collection-recipes";
import PublicProfileMadeRecipes from "./components/public-profile-made-recipes";
import PublicProfileEvaluatedRecipes from "./components/public-profile-evaluated-recipes";
import PublicProfilePersonalRecipes from "./components/public-profile-personal-recipes";
import PublicProfileFollowingAccounts from "./components/public-profile-following-accounts";
import PublicProfileFollowerAccounts from "./components/public-profile-follower-accounts";
import OtherProfileCollectionDetails from "./components/other-profile-collection-details";
import CollectionDetails from "./components/collection-details";
import ShoppingLists from "./components/shopping-lists";
import RecipeResults from "./components/recipe-results";
import AskTheCommunity from "./components/ask-the-community";
import WorldCuisine from "./components/world-cuisine";
import CountryRecipes from "./components/country-recipes";
import TypesOfRecipes from "./components/types-of-recipes";
import SpecificTypeOfRecipes from "./components/specific-type-of-recipes";
import SpecificTypeOfCountryRecipes from "./components/specific-type-of-country-recipes";
import FilterRecipes from "./components/filter-recipes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
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
          <Route path="/" component={Home} exact />
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
          <Route path="/public-profile-about-me" component={PublicProfileAboutMe}/>
          <Route path="/public-profile-collection-recipes" component={PublicProfileCollectionRecipes}/>
          <Route path="/public-profile-made-recipes" component={PublicProfileMadeRecipes}/>
          <Route path="/public-profile-evaluated-recipes" component={PublicProfileEvaluatedRecipes}/>
          <Route path="/public-profile-personal-recipes" component={PublicProfilePersonalRecipes}/>
          <Route path="/public-profile-following-accounts" component={PublicProfileFollowingAccounts}/>
          <Route path="/public-profile-follower-accounts" component={PublicProfileFollowerAccounts}/>
          <Route path="/other-profile-collection-details" component={OtherProfileCollectionDetails}/>
          <Route path="/collection-details" component={CollectionDetails}/>
          <Route path="/shopping-lists" component={ShoppingLists}/>
          <Route path="/recipe-results" component={RecipeResults}/>
          <Route path="/ask-the-community" component={AskTheCommunity}/>
          <Route path="/world-cuisine" component={WorldCuisine}/>
          <Route path="/country-recipes" component={CountryRecipes}/> 
          <Route path="/types-of-recipes" component={TypesOfRecipes}/>
          <Route path="/specific-type-of-recipes" component={SpecificTypeOfRecipes}/>
          <Route path="/specific-type-of-country-recipes" component={SpecificTypeOfCountryRecipes}/>
          <Route path="/filter-recipes" component={FilterRecipes}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
