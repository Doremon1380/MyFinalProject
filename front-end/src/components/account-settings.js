import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./account-settings.css";

import Container from "react-bootstrap/Container";
import HalfTopPart from "./half-top-part";
import { FaRegEye } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";

function AccountSettings() {
    return (
        <>
            <SecondNavBar />
            <Container id="account-settings-container">
                <HalfTopPart />
            </Container>
            <div id="account-settings">
                <div id="left-side-group-buttons2">
                    <button className="left-side-button2">
                        <a href="/Profile Settings" className="left-button-link2">
                            <i className="bi bi-pencil-square" id="edit-profile-icon2"></i>
                            <p className="left-side-button-title2" id="edit-profile-title2">Edit profile</p>
                        </a>
                    </button>
                    <button className="left-side-button2">
                        <a href="/#" className="left-button-link2">
                            <i><FaRegEye /></i>
                            <p className="left-side-button-title2">See public profile</p>
                        </a>
                    </button>
                    <button className="left-side-button2">
                        <a href="/Notification Settings" className="left-button-link2">
                            <i><FaRegEnvelope /></i>
                            <p className="left-side-button-title2">Notification settings</p>
                        </a>
                    </button>
                    <button className="left-side-button2">
                        <a href="/Account Settings" className="left-button-link2" id="left-side-selected-button2">
                            <i><FaUserCog /></i>
                            <p className="left-side-button-title2">Account settings</p>
                        </a>
                    </button>
                </div>
            </div>
            <form id="edit-account-features">
                <div>
                    <h1>Account Settings</h1>
                    <label>Email Address</label><br />
                    <input placeholder="Email address"></input>
                    <h2>Update your password</h2>
                    <p>Please provide a password with at least 6 characters. Your password must include at least 1 uppercase letter or special character.</p>
                    <label>Current Password</label><br />
                    <input placeholder="Password"></input><br />
                    <label>New Password</label><br />
                    <input placeholder="New Password"></input><br />
                    <label>Confirm  Password</label><br />
                    <input placeholder="Confirm Password"></input>
                </div>
                <div id="edit-account-bottom-buttons">
                    <button id="edit-account-save-button">Save</button>
                    <button id="edit-account-cancel-button">Cancel</button>
                </div>
            </form>
        </>
    );
};

export default AccountSettings;