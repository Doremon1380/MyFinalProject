import {React, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {auth} from "./firebase-config";
import {signOut} from "firebase/auth";

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
import SecondNavBar from "./components/second-nav-bar";
import NavBar from "./components/nav-bar";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear(); 
      window.location.pathname = "/signin";
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <BrowserRouter>
      <div>
        {isAuth ? (
          <SecondNavBar signUserOut={signUserOut}></SecondNavBar>
        ) : (
          <NavBar></NavBar>
        )}
        <Routes>
          <Route path="/signin" element={<SignIn setIsAuth={setIsAuth} />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about-me" element={<PrivateProfile />} />
          <Route path="/edit-profile" element={<ProfileSettings />} />
          <Route path="/notification-settings" element={<NotificationSettings />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/photo-id" element={<PhotoId />} />
          <Route path="/" element={<Home />} exact />
          <Route path="/recipe-details" element={<RecipeDetails />} />
          <Route path="/all-reviews" element={<AllReviews />} />
          <Route path="/favorite-recipes" element={<FavoriteRecipes />} />
          <Route path="/following-accounts" element={<FollowingAccounts />} />
          <Route path="/follower-accounts" element={<FollowerAccounts />} />
          <Route path="/made-recipes" element={<MadeRecipes />} />
          <Route path="/evaluated-recipes" element={<EvaluatedRecipes />} />
          <Route path="/personal-recipes" element={<PersonalRecipes />} />
          <Route path="/collection-recipes" element={<CollectionRecipes />}/>
          <Route path="/public-profile-favorite-recipes" element={<PublicProfileFavoriteRecipes />} />
          <Route path="/public-profile-about-me" element={<PublicProfileAboutMe />} />
          <Route path="/public-profile-collection-recipes" element={<PublicProfileCollectionRecipes />} />
          <Route path="/public-profile-made-recipes" element={<PublicProfileMadeRecipes />} />
          <Route path="/public-profile-evaluated-recipes" element={<PublicProfileEvaluatedRecipes />} />
          <Route path="/public-profile-personal-recipes" element={<PublicProfilePersonalRecipes />} />
          <Route path="/public-profile-following-accounts" element={<PublicProfileFollowingAccounts />} />
          <Route path="/public-profile-follower-accounts" element={<PublicProfileFollowerAccounts />} />
          <Route path="/other-profile-collection-details" element={<OtherProfileCollectionDetails />} />
          <Route path="/collection-details" element={<CollectionDetails />} />
          <Route path="/shopping-lists" element={<ShoppingLists />} />
          <Route path="/recipe-results" element={<RecipeResults />} />
          <Route path="/ask-the-community" element={<AskTheCommunity />} />
          <Route path="/world-cuisine" element={<WorldCuisine />} />
          <Route path="/country-recipes" element={<CountryRecipes />} /> 
          <Route path="/types-of-recipes" element={<TypesOfRecipes />} />
          <Route path="/specific-type-of-recipes" element={<SpecificTypeOfRecipes />} />
          <Route path="/specific-type-of-country-recipes" element={<SpecificTypeOfCountryRecipes />} />
          <Route path="/filter-recipes" element={<FilterRecipes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
