import React from "react";
import SecondNavBar from "./second-nav-bar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile-settings.css";

import Container from "react-bootstrap/Container";
import TopPart from "./top-part";

function ProfileSettings() {
    return (
        <>
            <SecondNavBar />
            <Container id="profile-settings-container">
                <TopPart />
            </Container>
        </>
    );
}

export default ProfileSettings;