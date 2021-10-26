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
        </>
    );
};

export default AccountSettings;