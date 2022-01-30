import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import "./ask-the-community.css";

const TITLE = 'Ask the Community - FoodShare.com';

class UserQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayQuestion: false
        };

        this.toggleDisplayQuestion = this.toggleDisplayQuestion.bind(this);
    };

    toggleDisplayQuestion() {
        this.setState((state) => ({
            displayQuestion: !state.displayQuestion
        }));
    };

    render() {
        if (this.state.displayQuestion == true) {
            return (
                <div id="your-question-in-ask-the-question-page">
                    <button onClick={this.toggleDisplayQuestion}>Your question</button>
                    <p>Need cooking advice, or something else? Tell us.</p>
                    <form action="#">
                        <input placeholder="Subject" name="questionSubject"></input>
                        <textarea placeholder="Enter your question" name="question" rows="3" cols="80"></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            );
        }
        else {
            return (
                <div id="your-question-in-ask-the-question-page">
                    <button onClick={this.toggleDisplayQuestion}>Your question</button>
                </div>
            );
        };
    };
};

class UserReply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayReply: false,
        };

        this.toggleDisplayReply = this.toggleDisplayReply.bind(this);
    };

    toggleDisplayReply() {
        this.setState((state) => ({
            displayReply: !state.displayReply
        }));
    };

    render() {
        if (this.state.displayReply == true) {
            return (
                <div id="your-reply-in-ask-the-question-page">
                    <button onClick={this.toggleDisplayReply}>Cancel</button>
                    <form action="#">
                        <textarea placeholder="Enter your question" name="question" rows="3" cols="80"></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            );
        }
        else {
            return (
                <div id="your-reply-in-ask-the-question-page">
                    <button onClick={this.toggleDisplayReply}>Reply</button>
                </div>
            );
        };
    };
};

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayComment: false,
        };

        this.toggleDisplayComments = this.toggleDisplayComments.bind(this);
    };

    toggleDisplayComments() {
        this.setState((state) => ({
            displayComment: !state.displayComment
        }));
    };

    render() {
        if (this.state.displayComment == true) {
            return (
                <div id="user-comments-in-ask-the-question-page">
                    <p onClick={this.toggleDisplayComments} id="number-of-comments-in-ask-the-question-page">(num) Comment</p>
                    <div>
                        <div className="user-comment-in-ask-the-question-page">
                            <div>
                                <a href="/public-profile-about-me"><p>(Account name)</p></a>
                                <p>(DateTime)</p>
                            </div>
                            <p>(Comment)</p>
                        </div>
                        <div className="user-comment-in-ask-the-question-page">
                            <div>
                                <a href="/public-profile-about-me"><p>(Account name)</p></a>
                                <p>(DateTime)</p>
                            </div>
                            <p>(Comment)</p>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div id="user-comments-in-ask-the-question-page">
                    <p onClick={this.toggleDisplayComments} id="number-of-comments-in-ask-the-question-page">(num) Comment</p>
                </div>
            );
        };
    };
};

function AskTheCommunity() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <SecondNavBar />
            <div id="ask-the-community-page">
                <h1>Ask the Community</h1>
                <p>Ask Allrecipes members questions about cooking and recipes to get responses from real home cooks!</p>
                <UserQuestion />
                <div id="user-questions-in-ask-the-community-page">
                    <div className="user-question-in-ask-the-community-page">
                        <div className="user-account-and-datetime-of-user-question-in-ask-the-community-page">
                            <div className="user-account-of-user-question-in-ask-the-community-page">
                                <a href="/public-profile-about-me"><img alt="avatar"></img></a>
                                <a href="/public-profile-about-me"><p>(Account name)</p></a>
                            </div>
                            <p className="datetime-of-user-question-in-ask-the-community-page">(DateTime)</p>
                        </div>
                        <div className="question-of-user-in-ask-the-community-page">
                            <p>(Subject)</p>
                            <p>(Question)</p>
                        </div>
                        <div className="your-reply-and-user-comments-in-ask-the-community-page">
                            <UserReply />
                            <Comments />
                        </div>
                    </div>
                    <div className="user-question-in-ask-the-community-page">
                        <div className="user-account-and-datetime-of-user-question-in-ask-the-community-page">
                            <div className="user-account-of-user-question-in-ask-the-community-page">
                                <a href="/public-profile-about-me"><img alt="avatar"></img></a>
                                <a href="/public-profile-about-me"><p>(Account name)</p></a>
                            </div>
                            <p className="datetime-of-user-question-in-ask-the-community-page">(DateTime)</p>
                        </div>
                        <div className="question-of-user-in-ask-the-community-page">
                            <p>(Subject)</p>
                            <p>(Question)</p>
                        </div>
                        <div className="your-reply-and-user-comments-in-ask-the-community-page">
                            <UserReply />
                            <Comments />
                        </div>
                    </div>
                    <div className="user-question-in-ask-the-community-page">
                        <div className="user-account-and-datetime-of-user-question-in-ask-the-community-page">
                            <div className="user-account-of-user-question-in-ask-the-community-page">
                                <a href="/public-profile-about-me"><img alt="avatar"></img></a>
                                <a href="/public-profile-about-me"><p>(Account name)</p></a>
                            </div>
                            <p className="datetime-of-user-question-in-ask-the-community-page">(DateTime)</p>
                        </div>
                        <div className="question-of-user-in-ask-the-community-page">
                            <p>(Subject)</p>
                            <p>(Question)</p>
                        </div>
                        <div className="your-reply-and-user-comments-in-ask-the-community-page">
                            <UserReply />
                            <Comments />
                        </div>
                    </div>
                    <div className="user-question-in-ask-the-community-page">
                        <div className="user-account-and-datetime-of-user-question-in-ask-the-community-page">
                            <div className="user-account-of-user-question-in-ask-the-community-page">
                                <a href="/public-profile-about-me"><img alt="avatar"></img></a>
                                <a href="/public-profile-about-me"><p>(Account name)</p></a>
                            </div>
                            <p className="datetime-of-user-question-in-ask-the-community-page">(DateTime)</p>
                        </div>
                        <div className="question-of-user-in-ask-the-community-page">
                            <p>(Subject)</p>
                            <p>(Question)</p>
                        </div>
                        <div className="your-reply-and-user-comments-in-ask-the-community-page">
                            <UserReply />
                            <Comments />
                        </div>
                    </div>
                    <div className="user-question-in-ask-the-community-page">
                        <div className="user-account-and-datetime-of-user-question-in-ask-the-community-page">
                            <div className="user-account-of-user-question-in-ask-the-community-page">
                                <a href="/public-profile-about-me"><img alt="avatar"></img></a>
                                <a href="/public-profile-about-me"><p>(Account name)</p></a>
                            </div>
                            <p className="datetime-of-user-question-in-ask-the-community-page">(DateTime)</p>
                        </div>
                        <div className="question-of-user-in-ask-the-community-page">
                            <p>(Subject)</p>
                            <p>(Question)</p>
                        </div>
                        <div className="your-reply-and-user-comments-in-ask-the-community-page">
                            <UserReply />
                            <Comments />
                        </div>
                    </div>
                    <div className="user-question-in-ask-the-community-page">
                        <div className="user-account-and-datetime-of-user-question-in-ask-the-community-page">
                            <div className="user-account-of-user-question-in-ask-the-community-page">
                                <a href="/public-profile-about-me"><img alt="avatar"></img></a>
                                <a href="/public-profile-about-me"><p>(Account name)</p></a>
                            </div>
                            <p className="datetime-of-user-question-in-ask-the-community-page">(DateTime)</p>
                        </div>
                        <div className="question-of-user-in-ask-the-community-page">
                            <p>(Subject)</p>
                            <p>(Question)</p>
                        </div>
                        <div className="your-reply-and-user-comments-in-ask-the-community-page">
                            <UserReply />
                            <Comments />
                        </div>
                    </div>
                    <div className="user-question-in-ask-the-community-page">
                        <div className="user-account-and-datetime-of-user-question-in-ask-the-community-page">
                            <div className="user-account-of-user-question-in-ask-the-community-page">
                                <a href="/public-profile-about-me"><img alt="avatar"></img></a>
                                <a href="/public-profile-about-me"><p>(Account name)</p></a>
                            </div>
                            <p className="datetime-of-user-question-in-ask-the-community-page">(DateTime)</p>
                        </div>
                        <div className="question-of-user-in-ask-the-community-page">
                            <p>(Subject)</p>
                            <p>(Question)</p>
                        </div>
                        <div className="your-reply-and-user-comments-in-ask-the-community-page">
                            <UserReply />
                            <Comments />
                        </div>
                    </div>
                    <div className="user-question-in-ask-the-community-page">
                        <div className="user-account-and-datetime-of-user-question-in-ask-the-community-page">
                            <div className="user-account-of-user-question-in-ask-the-community-page">
                                <a href="/public-profile-about-me"><img alt="avatar"></img></a>
                                <a href="/public-profile-about-me"><p>(Account name)</p></a>
                            </div>
                            <p className="datetime-of-user-question-in-ask-the-community-page">(DateTime)</p>
                        </div>
                        <div className="question-of-user-in-ask-the-community-page">
                            <p>(Subject)</p>
                            <p>(Question)</p>
                        </div>
                        <div className="your-reply-and-user-comments-in-ask-the-community-page">
                            <UserReply />
                            <Comments />
                        </div>
                    </div>
                    <div className="user-question-in-ask-the-community-page">
                        <div className="user-account-and-datetime-of-user-question-in-ask-the-community-page">
                            <div className="user-account-of-user-question-in-ask-the-community-page">
                                <a href="/public-profile-about-me"><img alt="avatar"></img></a>
                                <a href="/public-profile-about-me"><p>(Account name)</p></a>
                            </div>
                            <p className="datetime-of-user-question-in-ask-the-community-page">(DateTime)</p>
                        </div>
                        <div className="question-of-user-in-ask-the-community-page">
                            <p>(Subject)</p>
                            <p>(Question)</p>
                        </div>
                        <div className="your-reply-and-user-comments-in-ask-the-community-page">
                            <UserReply />
                            <Comments />
                        </div>
                    </div>
                    <div className="user-question-in-ask-the-community-page">
                        <div className="user-account-and-datetime-of-user-question-in-ask-the-community-page">
                            <div className="user-account-of-user-question-in-ask-the-community-page">
                                <a href="/public-profile-about-me"><img alt="avatar"></img></a>
                                <a href="/public-profile-about-me"><p>(Account name)</p></a>
                            </div>
                            <p className="datetime-of-user-question-in-ask-the-community-page">(DateTime)</p>
                        </div>
                        <div className="question-of-user-in-ask-the-community-page">
                            <p>(Subject)</p>
                            <p>(Question)</p>
                        </div>
                        <div className="your-reply-and-user-comments-in-ask-the-community-page">
                            <UserReply />
                            <Comments />
                        </div>
                    </div>
                </div>
                <button id="load-more-questions-in-ask-the-question-page">Show more questions</button>
            </div>
        </>
    );
};

export default AskTheCommunity;