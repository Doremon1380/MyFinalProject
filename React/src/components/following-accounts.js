import React from "react";
import TopPart from "./top-part";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import "./following-accounts.css";

const TITLE = 'Private Profile - FoodShare.com';

class FollowingButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayFollowingButton: true
        };

        this.toggleDisplayFollowingButton = this.toggleDisplayFollowingButton.bind(this);
    };

    toggleDisplayFollowingButton() {
        this.setState(state => ({
            displayFollowingButton: !state.displayFollowingButton
        }));
    };

    render() {
        if (this.state.displayFollowingButton == true) {
            return (
                <button onClick={this.toggleDisplayFollowingButton}>
                    <i class="bi bi-person-check-fill"></i>
                    <p>Following</p>
                </button>
            );
        }
        else {
            return (
                <button onClick={this.toggleDisplayFollowingButton}>
                    <i class="bi bi-person-plus-fill"></i>
                    <p>Follow</p>
                </button>
            );
        };
    };
};

function FollowingAccounts() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="top-part-container-in-following-accounts-page">
                <TopPart />
                <nav id="group-buttons">
                    <a href="/about-me"><button className="group-button">About Me</button></a>
                    <a href="/favorite-recipes"><button className="group-button">My Favorites</button></a>
                    <a href="/follower-accounts"><button className="group-button selected-button">My Friends</button></a>
                    <a href="/made-recipes"><button className="group-button">I Made It</button></a>
                    <a href="/photos"><button className="group-button ">My Photos</button></a>
                    <a href="/evaluated-recipes"><button className="group-button">My Reviews</button></a>
                    <a href="/personal-recipes"><button className="group-button last-button"> Personal Recipes</button></a>
                </nav>
            </div>
            <div id="following-accounts-page">
                <div id="following-and-follower-in-following-accounts-page">
                    <a href="/following-accounts">
                        <button id="following-button-in-following-accouts-page">Following (number)</button>
                    </a>
                    <a href="/follower-accounts">
                        <button>Follower (number)</button>
                    </a>
                </div>
                <div id="following-accounts-in-following-accounts-page">
                    <div id="following-account-in-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowingButton />
                        </div>
                    </div>
                    <div id="following-account-in-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowingButton />
                        </div>
                    </div>
                    <div id="following-account-in-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowingButton />
                        </div>
                    </div>
                    <div id="following-account-in-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowingButton />
                        </div>
                    </div>
                    <div id="following-account-in-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowingButton />
                        </div>
                    </div>
                    <div id="following-account-in-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowingButton />
                        </div>
                    </div>
                    <div id="following-account-in-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowingButton />
                        </div>
                    </div>
                    <div id="following-account-in-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowingButton />
                        </div>
                    </div>
                    <div id="following-account-in-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowingButton />
                        </div>
                    </div>
                    <div id="following-account-in-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowingButton />
                        </div>
                    </div>
                </div>
                <button id="load-more-following-accounts-button-in-following-accounts-page">SHOW MORE</button>
            </div>
        </>
    );
};

export default FollowingAccounts;
