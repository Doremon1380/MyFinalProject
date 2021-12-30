import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./photo-id.css";

import { Helmet } from 'react-helmet';
import { IoPersonAddSharp } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Pizza from "./pizza.jpg";

const TITLE = '{UserName} Photos - FoodShare.com';

function PhotoId() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <div id="photo-id-container">
                <a href="/photos">
                    <div id="back-to-photos-page">
                        <i className="bi bi-arrow-left"></i>
                        <p>Back to my photos</p>
                    </div>
                </a>
                <nav id="group-photos-in-photo-id-page">
                    <button className="photo-in-group-of-photo-id-page"><a href="/photo-id"><img alt="photo1"></img></a></button>
                    <button className="photo-in-group-of-photo-id-page"><a href="/photo-id"><img alt="photo2"></img></a></button>
                    <button className="photo-in-group-of-photo-id-page"><a href="/photo-id"><img alt="photo3"></img></a></button>
                </nav>
                <div id="for-user-account-photo-id-page">
                    <div id="avatar-and-username-photo-id-page">
                        <button id="avatar-photo-id-page"><a href="#/"><img alt="avatar" id="avatar-image-photo-id-page"></img></a></button>
                        <a href="#"><p id="username-photo-id-page">Username</p></a>
                    </div>
                    <button id="follow-button-photo-id-page">
                        <i><IoPersonAddSharp /></i>
                        <p>Follow</p>
                    </button>
                </div>
                <hr></hr>
                <div id="transfer-buttons-with-photo-and-other-features-in-photo-id-page">
                    <button id="back-to-previous-photo-button-in-photo-id-page"><i><FaChevronLeft /></i></button>
                    <div id="photo-with-description-and-other-features-in-photo-id-page">
                        <img alt="Photo" src={Pizza} id="photo-in-photo-id-page"></img>
                        <div id="description-and-other-features-in-photo-id-page">
                            <p id="photo-description-in-photo-id-page">Description</p>
                            <DropdownButton id="chevrondown-box-photo-id-page" variant="" title={<i id="chevrondown-icon-photo-id-page"><FaChevronDown /></i>}>
                                <Dropdown.Item className="chevrondown-box-photo-id-page-item" href="#/">Delete photo</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className="chevrondown-box-photo-id-page-item" href="#/">Edit description</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className="chevrondown-box-photo-id-page-item" href="#/">Make profile photo</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                    <button id="go-to-next-photo-button-in-photo-id-page"><i><FaChevronRight /></i></button>
                </div>
                <div id="photo-id-page-bottom-buttons">
                    <button id="back-button-photo-id-page">Back</button>
                    <button id="next-button-photo-id-page">Next</button>
                </div>
            </div>
        </>
    );
};

export default PhotoId;
