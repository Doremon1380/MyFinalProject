import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from 'react-helmet';
import "./ask-the-community.css";
import axios from 'axios';

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
                    <form action="#" id="create-question-in-ask-the-question-page" name="yourQuestion">
                        <input placeholder="Subject" name="questionSubject"></input>
                        <textarea placeholder="Enter your question" name="question" rows="3" cols="80"></textarea>
                        <button type="submit" form="create-question-in-ask-the-question-page">Submit</button>
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
                    <form action="#" id="create-reply-in-ask-the-question-page" name="userReply">
                        <textarea placeholder="Enter your answer" name="question" rows="3" cols="80"></textarea>
                        <button type="submit" form="create-reply-in-ask-the-question-page">Submit</button>
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
    const [questions, setQuestions] = useState([]);
    const [visibleOfQuestions, setVisibleOfQuestions] = useState(10);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setQuestions(res.data);
            setLoading(false);
        }
        fetchQuestions();
    }, []);

    const showMoreQuestions = () => {
        setVisibleOfQuestions((prevValue) => prevValue + 3);
    };

    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="ask-the-community-page">
                <h1>Ask the Community</h1>
                <p>Ask Allrecipes members questions about cooking and recipes to get responses from real home cooks!</p>
                <UserQuestion />
                {loading === true ? <h1 style={{ textAlign: "center", marginTop: "30vh", color: "orange" }}>Loading...</h1> :
                    <>
                        <div id="user-questions-in-ask-the-community-page">
                            {questions.slice(0, visibleOfQuestions).map(question => (
                                <div key={question.id} className="user-question-in-ask-the-community-page">
                                    <div className="user-account-and-datetime-of-user-question-in-ask-the-community-page">
                                        <div className="user-account-of-user-question-in-ask-the-community-page">
                                            <a href="/public-profile-about-me"><img alt="avatar"></img></a>
                                            <a href="/public-profile-about-me"><p>(Account name)</p></a>
                                        </div>
                                        <p className="datetime-of-user-question-in-ask-the-community-page">(DateTime)</p>
                                    </div>
                                    <div className="question-of-user-in-ask-the-community-page">
                                        <p>{question.title}</p>
                                        <p>{question.body}</p>
                                    </div>
                                    <div className="your-reply-and-user-comments-in-ask-the-community-page">
                                        <UserReply />
                                        <Comments />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button id="load-more-questions-in-ask-the-question-page" onClick={showMoreQuestions}>Show more questions</button>
                    </>
                }
            </div>
        </>
    );
};

export default AskTheCommunity;