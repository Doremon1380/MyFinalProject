import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./photo-id.css";

import { Helmet } from 'react-helmet';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Pizza from "./pizza.jpg";

const TITLE = '{UserName} Photos - FoodShare.com';

class EditDiscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayEditDiscriptionForm: false
        };

        this.toggleDisplayEditDiscriptionForm = this.toggleDisplayEditDiscriptionForm.bind(this);
    };

    toggleDisplayEditDiscriptionForm() {
        this.setState((state) => ({
            displayEditDiscriptionForm: !state.displayEditDiscriptionForm
        }));
    };

    render() {
        if (this.state.displayEditDiscriptionForm == false) {
            return (
                <>
                    <div id="description-and-other-features-in-photo-id-page">
                        <p id="photo-description-in-photo-id-page">Description</p>
                        <DropdownButton id="chevrondown-box-photo-id-page" variant="" title={<i id="chevrondown-icon-photo-id-page"><FaChevronDown /></i>}>
                            <Dropdown.Item className="chevrondown-box-photo-id-page-item" href="#/">Delete photo</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="chevrondown-box-photo-id-page-item" href="#edit-discription-form-in-photo-id-page" onClick={this.toggleDisplayEditDiscriptionForm}>Edit description</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="chevrondown-box-photo-id-page-item" href="#/">Make profile photo</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </>
            );
        }
        else {
            return (
                <>
                    <div id="features-and-edit-discription-form-in-photo-id-page">
                        <div id="description-and-other-features-in-photo-id-page">
                            <p id="photo-description-in-photo-id-page">Description</p>
                            <DropdownButton id="chevrondown-box-photo-id-page" variant="" title={<i id="chevrondown-icon-photo-id-page"><FaChevronDown /></i>}>
                                <Dropdown.Item className="chevrondown-box-photo-id-page-item" href="#/">Delete photo</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className="chevrondown-box-photo-id-page-item" href="#edit-discription-form-in-photo-id-page" onClick={this.toggleDisplayEditDiscriptionForm}>Edit description</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className="chevrondown-box-photo-id-page-item" href="#/">Make profile photo</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <form id="edit-discription-form-in-photo-id-page" action="" name="editDiscriptionForm">
                            <textarea placeholder="Add a discription (optional)" name="editDiscription" rows="5" cols="80"></textarea>
                            <div>
                                <button type="submit" form="edit-discription-form-in-photo-id-page" id="confirm-button-of-edit-discription-form-in-photo-id-page">Done editing</button>
                                <button id="cancel-button-of-edit-discription-form-in-photo-id-page" onClick={this.toggleDisplayEditDiscriptionForm}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </>
            );
        }
    };
}

class FollowButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayFollowButton: true
        };

        this.toggleDisplayFollowButton = this.toggleDisplayFollowButton.bind(this);
    };

    toggleDisplayFollowButton() {
        this.setState(state => ({
            displayFollowButton: !state.displayFollowButton
        }));
    };

    render() {
        if (this.state.displayFollowButton == true) {
            return (
                <button onClick={this.toggleDisplayFollowButton} id="follow-button-photo-id-page">
                    <i class="bi bi-person-plus-fill"></i>
                    <p>Follow</p>
                </button>
            );
        }
        else {
            return (
                <button onClick={this.toggleDisplayFollowButton} id="follow-button-photo-id-page">
                    <i class="bi bi-person-check-fill"></i>
                    <p>Following</p>
                </button>
            );
        };
    };
};

function PhotoId() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

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
                        <button id="avatar-photo-id-page"><a href="/public-profile-about-me"><img alt="avatar" id="avatar-image-photo-id-page"></img></a></button>
                        <a href="/public-profile-about-me"><p id="username-photo-id-page">Username</p></a>
                    </div>
                    <FollowButton />
                </div>
                <hr></hr>
                <div id="transfer-buttons-with-photo-in-photo-id-page">
                    <button id="back-to-previous-photo-button-in-photo-id-page"><i><FaChevronLeft /></i></button>
                    <div id="photo-with-description-and-other-features-in-photo-id-page">
                        <img alt="Photo" src={Pizza} id="photo-in-photo-id-page"></img>
                    </div>
                    <button id="go-to-next-photo-button-in-photo-id-page"><i><FaChevronRight /></i></button>
                </div>
                <EditDiscription />
                <div id="photo-id-page-bottom-buttons">
                    <button id="back-button-photo-id-page">Back</button>
                    <button id="next-button-photo-id-page">Next</button>
                </div>
            </div>
        </>
    );
};

export default PhotoId;
