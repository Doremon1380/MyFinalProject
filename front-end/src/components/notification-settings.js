import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./notification-settings.css";

import Container from "react-bootstrap/Container";
import HalfTopPart from "./half-top-part";
import { FaRegEye } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";

function NotificationSettings() {
    return (
        <>
            <SecondNavBar />
            <Container id="notification-settings-container">
                <HalfTopPart />
            </Container>
            <div id="notification-settings">
                <div id="left-side-group-buttons1">
                    <a href="/Profile Settings" className="left-button-link1">
                        <button className="left-side-button1">
                            <i className="bi bi-pencil-square" id="edit-profile-icon1"></i>
                            <p className="left-side-button-title1" id="edit-profile-title1">Edit profile</p>
                        </button>
                    </a>
                    <a href="/#" className="left-button-link1">
                        <button className="left-side-button1">
                            <i><FaRegEye /></i>
                            <p className="left-side-button-title1">See public profile</p>
                        </button>
                    </a>
                    <a href="/Notification Settings" className="left-button-link1">
                        <button className="left-side-button1" id="left-side-selected-button1">
                            <i><FaRegEnvelope /></i>
                            <p className="left-side-button-title1">Notification settings</p>
                        </button>
                    </a>
                    <a href="/Account Settings" className="left-button-link1">
                        <button className="left-side-button1">
                            <i><FaUserCog /></i>
                            <p className="left-side-button-title1">Account settings</p>
                        </button>
                    </a>
                </div>
                <form id="notification-settings-options">
                    <h1 id="email-notifications-title">Email Notifications</h1>
                    <input id="new-photo-posted" className="notification-settings-checkbox" type="checkbox"></input>
                    <label for="new-photo-posted" className="notification-settings-checkbox-label">A new photo is posted to my recipe</label>
                    <input id="new-review-posted" className="notification-settings-checkbox" type="checkbox"></input>
                    <label for="new-review-posted" className="notification-settings-checkbox-label">A new review is posted to my recipe</label>
                    <input id="recipe-published" className="notification-settings-checkbox" type="checkbox"></input>
                    <label for="recipe-published" className="notification-settings-checkbox-label">A recipe is published</label>
                    <input id="someone-follows" className="notification-settings-checkbox" type="checkbox"></input>
                    <label for="someone-follows" className="notification-settings-checkbox-label">Someone follows me</label>
                    <p id="or1"><span>OR</span></p>
                    <input id="stop-receiving-all-notifications" className="notification-settings-checkbox" type="checkbox"></input>
                    <label for="stop-receiving-all-notifications" className="notification-settings-checkbox-label">Stop receiving ALL notifications</label>
                    <div id="notification-settings-bottom-buttons">
                        <button id="notification-settings-save-button">Save</button>
                        <button id="notification-settings-cancel-button">Cancel</button>
                    </div>
                </form>
            </div >
        </>
    );
};

export default NotificationSettings;