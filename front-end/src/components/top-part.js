import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./top-part.css";

import { FaHeart } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

function TopPart() {

    const [isDropDownButtonOpen, setIsDropDownButtonOpen] = useState(false);
    const ref = useRef();
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
             if(isDropDownButtonOpen && ref.current && !ref.current.contains(e.target)) {
                 setIsDropDownButtonOpen(false)
             }
        };
        document.addEventListener("click", checkIfClickedOutside);
        return () => {
            document.removeEventListener("click", checkIfClickedOutside)
        }
    }, [isDropDownButtonOpen])

    return (
        <>
            <div id="half-top-part-container">
                <div id="user-account">
                    <a href="/about-me" id="avatar-top"><img alt="Avatar"></img></a>
                    <div id="account-related">
                        <p id="account-name">Account Name</p>
                        <div id="icons-and-data">
                            <i className="bi bi-people-fill followers" title="My Followers"></i>
                            <i className="heart" title="My Favorites"><FaHeart /></i>
                            <i className="dishes" title="Recipes I've Made"><FaUtensils /></i>
                        </div>
                    </div>
                </div>
                <div id="dropdown-button-in-half-top-part" ref={ref}>
                    <i className="bi bi-gear-fill" onClick={() => setIsDropDownButtonOpen(!isDropDownButtonOpen)}></i>
                    {isDropDownButtonOpen && (
                        <div id="dropdown-button-content-in-half-top-part">
                            <a className="dropdown-item-of-dropdown-button-in-half-top-part" href="/edit-profile">Edit profile</a>
                            <a className="dropdown-item-of-dropdown-button-in-half-top-part" href="/public-profile-favorite-recipes">See public profile</a>
                            <a className="dropdown-item-of-dropdown-button-in-half-top-part" href="/notification-settings">Notification setting</a>
                            <a className="dropdown-item-of-dropdown-button-in-half-top-part" id="last-item-of-dropdown-button-in-half-top-part" href="/account-settings">Account setting</a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default TopPart;