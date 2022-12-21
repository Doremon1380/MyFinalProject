import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./notification-settings.css";
import { Helmet } from 'react-helmet'

import TopPart from "./top-part";
import { FaRegEye } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";

const TITLE = 'Notification Settings - FoodShare.com';

function NotificationSettings() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="notification-settings-container">
                <TopPart />
                <div id="notification-settings">
                    <div id="left-side-group-buttons1">
                        <a href="/edit-profile" className="left-button-link1">
                            <button className="left-side-button1">
                                <i className="bi bi-pencil-square" id="edit-profile-icon1"></i>
                                <p className="left-side-button-title1" id="edit-profile-title1">Edit profile</p>
                            </button>
                        </a>
                        <a href="/public-profile-favorite-recipes" className="left-button-link1">
                            <button className="left-side-button1">
                                <i><FaRegEye /></i>
                                <p className="left-side-button-title1">See public profile</p>
                            </button>
                        </a>
                        <a href="/notification-settings" className="left-button-link1">
                            <button className="left-side-button1" id="left-side-selected-button1">
                                <i><FaRegEnvelope /></i>
                                <p className="left-side-button-title1">Notification settings</p>
                            </button>
                        </a>
                        <a href="/account-settings" className="left-button-link1">
                            <button className="left-side-button1">
                                <i><FaUserCog /></i>
                                <p className="left-side-button-title1">Account settings</p>
                            </button>
                        </a>
                    </div>
                    <div>
                        <form id="notification-settings-options" name="notificationSettings" action="">
                            <h1 id="email-notifications-title">Email Notifications</h1>
                            <input name="newPhotoIsPosted" value="newPhotoIsPosted" id="new-photo-posted" className="notification-settings-checkbox" type="checkbox"></input>
                            <label for="new-photo-posted" className="notification-settings-checkbox-label">A new photo is posted to my recipe</label>
                            <input name="newReviewIsPosted" value="newReviewIsPosted" id="new-review-posted" className="notification-settings-checkbox" type="checkbox"></input>
                            <label for="new-review-posted" className="notification-settings-checkbox-label">A new review is posted to my recipe</label>
                            <input name="recipeIsPublished" value="recipeIsPublished" id="recipe-published" className="notification-settings-checkbox" type="checkbox"></input>
                            <label for="recipe-published" className="notification-settings-checkbox-label">A recipe is published</label>
                            <input name="SomeoneFollows" value="SomeoneFollows" id="someone-follows" className="notification-settings-checkbox" type="checkbox"></input>
                            <label for="someone-follows" className="notification-settings-checkbox-label">Someone follows me</label>
                        </form>
                        <div id="notification-settings-bottom-buttons">
                            <button id="notification-settings-save-button" type="submit" form="notification-settings-options">Save</button>
                            <a href="/about-me"><button id="notification-settings-cancel-button">Cancel</button></a>
                        </div>
                    </div>
                </div >
            </div>
        </>
    );
};

export default NotificationSettings;