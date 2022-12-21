import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./public-profile-following-accounts.css";
import { Helmet } from 'react-helmet'

import PublicProfileTopPart from "./public-profile-top-part";

const TITLE = 'Public Profile - FoodShare.com';

class FollowButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayFollowButton: true
        };

        this.toggleDisplayFollowButton = this.toggleDisplayFollowButton.bind(this);
    };

    toggleDisplayFollowButton() {
        this.setState((state) => ({
            displayFollowButton: !state.displayFollowButton
        }));
    };

    render() {
        if (this.state.displayFollowButton == true) {
            return (
                <button onClick={this.toggleDisplayFollowButton}>
                    <i class="bi bi-person-plus-fill"></i>
                    <p>Follow</p>
                </button>
            );
        }
        else {
            return (
                <button onClick={this.toggleDisplayFollowButton}>
                    <i class="bi bi-person-check-fill"></i>
                    <p>Following</p>
                </button>
            );
        };
    };
};

function PublicProfileFollowingAccounts() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="top-part-container-in-public-profile-following-accounts-page">
                <PublicProfileTopPart />
                <nav id="group-buttons-in-public-profile-following-accounts-page">
                    <a href="/public-profile-about-me"><button className="group-button-in-public-profile-following-accounts-page">About Me</button></a>
                    <a href="/public-profile-favorite-recipes"><button className="group-button-in-public-profile-following-accounts-page">Favorites</button></a>
                    <a href="/public-profile-made-recipes"><button className="group-button-in-public-profile-following-accounts-page">I Made It</button></a>
                    <a href="/public-profile-evaluated-recipes"><button className="group-button-in-public-profile-following-accounts-page">Reviews</button></a>
                    <a href="/public-profile-personal-recipes"><button className="group-button-in-public-profile-following-accounts-page">Personal Recipes</button></a>
                    <a href="/public-profile-follower-accounts"><button className="group-button-in-public-profile-following-accounts-page">Followers</button></a>
                    <a href="/public-profile-following-accounts"><button className="group-button-in-public-profile-following-accounts-page last-button-of-group-buttons-in-public-profile-following-accounts-page selected-button-in-public-profile-following-accounts-page">Following</button></a>
                </nav>
            </div>
            <div id="public-profile-following-accounts-page">
                <div id="following-and-follower-in-public-profile-following-accounts-page">
                    <a href="/public-profile-following-accounts">
                        <button id="following-button-in-public-profile-following-accounts-page">Following (number)</button>
                    </a>
                    <a href="/public-profile-follower-accounts">
                        <button>Follower (number)</button>
                    </a>
                </div>
                <div id="following-accounts-in-public-profile-following-accounts-page">
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowButton />
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowButton />
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowButton />
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowButton />
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowButton />
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowButton />
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowButton />
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowButton />
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowButton />
                        </div>
                    </div>
                    <div id="following-account-in-public-profile-following-accounts-page">
                        <a href="/public-profile-about-me">
                            <img alt="avatar"></img>
                        </a>
                        <div>
                            <a href="/public-profile-about-me">
                                Account name
                            </a>
                            <FollowButton />
                        </div>
                    </div>
                </div>
                <button id="load-more-following-accounts-button-in-public-profile-following-accounts-page">SHOW MORE</button>
            </div>
        </>
    );
};

export default PublicProfileFollowingAccounts;