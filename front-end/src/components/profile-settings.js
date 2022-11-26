import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile-settings.css";
import { Helmet } from 'react-helmet'

import TopPart from "./top-part";
import { FaRegEye } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";

const TITLE = 'Profile Settings - FoodShare.com';

class PersonalUrl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };

        this.createUrl = this.createUrl.bind(this);
    };

    createUrl(event) {
        this.setState({
            input: event.target.value
        });
    };

    render() {
        return (
            <>
                <p id="personal-URL">FoodShare.com/cook/{this.state.input}</p>
                <input name="createURL" placeholder="i.e. Doremon1380" className="edit-profile-input" value={this.state.input} onChange={this.createUrl}></input>
            </>
        );
    }
};

function ProfileSettings() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <div id="profile-settings-container">
                <TopPart />
                <div id="edit-profile">
                    <div id="left-side-group-buttons">
                        <a href="/edit-profile" className="left-button-link">
                            <button className="left-side-button" id="left-side-selected-button">
                                <i className="bi bi-pencil-square" id="edit-profile-icon"></i>
                                <p className="left-side-button-title" id="edit-profile-title">Edit profile</p>
                            </button>
                        </a>
                        <a href="/public-profile-favorite-recipes" className="left-button-link">
                            <button className="left-side-button">
                                <i><FaRegEye /></i>
                                <p className="left-side-button-title">See public profile</p>
                            </button>
                        </a>
                        <a href="/notification-settings" className="left-button-link">
                            <button className="left-side-button">
                                <i><FaRegEnvelope /></i>
                                <p className="left-side-button-title">Notification settings</p>
                            </button>
                        </a>
                        <a href="/account-settings" className="left-button-link">
                            <button className="left-side-button">
                                <i><FaUserCog /></i>
                                <p className="left-side-button-title">Account settings</p>
                            </button>
                        </a>
                    </div>
                    <div>
                        <form id="edit-profile-features" action="" name="editProfile">
                            <div id="edit-photo-buttons">
                                <button id="edit-profile-photo"><i className="bi bi-camera camera-icon"></i><p>Edit profile photo</p></button><br />
                                <button id="edit-cover-photo"><i className="bi bi-camera camera-icon"></i><p>Edit cover photo</p></button>
                            </div>
                            <label className="edit-profile-label">First name</label><br />
                            <input name="firstName" placeholder="First name" className="edit-profile-input"></input><br />
                            <label className="edit-profile-label">Last name</label><br />
                            <input name="lastName" placeholder="Last name" className="edit-profile-input"></input><br />
                            <label className="edit-profile-label">Display name</label><br />
                            <input name="displayName" placeholder="Display name" className="edit-profile-input"></input><br />
                            <label className="edit-profile-label">Profile URL</label><br />
                            <p className="message1">Share your FoodShare profile with a personal URL!</p>
                            <PersonalUrl />
                            <p className="header">Location</p>
                            <label className="edit-profile-label" for="select-country">Country</label><br />
                            <select name="country" id="select-country">
                                <option value="none" selected>[None Selected]</option>
                                <optgroup label="A">
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antarctica">Antarctica</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                </optgroup>
                                <optgroup label="B">
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                </optgroup>
                                <optgroup label="C">
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                                    <option value="Republic of the Congo">Republic of the Congo</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Côte D'ivoire">Côte D'ivoire</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                </optgroup>
                                <optgroup label="D">
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                </optgroup>
                                <optgroup label="E">
                                    <option value="East Timor ">East Timor </option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                </optgroup>
                                <optgroup label="F">
                                    <option value="Falkland Islands">Falkland Islands</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Guiana">French Guiana</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="French Southern Territories">French Southern Territories</option>
                                </optgroup>
                                <optgroup label="G">
                                    <option value="Gabon">Gabon</option>
                                    <option value="The Gambia">The Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option value="Guyana">Guyana</option>
                                </optgroup>
                                <optgroup label="H">
                                    <option value="Haiti">Haiti</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                </optgroup>
                                <optgroup label="I">
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Ivory Coast">Ivory Coast</option>
                                </optgroup>
                                <optgroup label="J">
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                </optgroup>
                                <optgroup label="K">
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="North Korea">North Korea</option>
                                    <option value="South Korea">South Korea</option>
                                    <option value="Kosovo">Kosovo</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                </optgroup>
                                <optgroup label="L">
                                    <option value="Laos">Laos</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libya">Libya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                </optgroup>
                                <optgroup label="M">
                                    <option value="Macau">Macau</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia ">Micronesia</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia">Micronesia</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Myanmar">Myanmar </option>
                                </optgroup>
                                <optgroup label="N">
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                    <option value="Norway">Norway</option>
                                </optgroup>
                                <optgroup label="O">
                                    <option value="Oman">Oman</option>
                                </optgroup>
                                <optgroup label="P">
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Palestinian territories">Palestinian territories</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Pitcairn Island">Pitcairn Island</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                </optgroup>
                                <optgroup label="Q">
                                    <option value="Qatar">Qatar</option>
                                </optgroup>
                                <optgroup label="R">
                                    <option value="Reunion Island">Reunion Island</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russian Federation">Russian Federation</option>
                                    <option value="Rwanda">Rwanda</option>
                                </optgroup>
                                <optgroup label="S">
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint Lucia">Saint Lucia</option>
                                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Sudan">South Sudan</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Swaziland (Eswatini)">Swaziland (Eswatini)</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syria">Syria</option>
                                </optgroup>
                                <optgroup label="T">
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Timor-Leste">Timor-Leste</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                </optgroup>
                                <optgroup label="U">
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                </optgroup>
                                <optgroup label="V">
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Vatican City State">Vatican City State</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                    <option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>
                                </optgroup>
                                <optgroup label="W">
                                    <option value="Wallis and Futuna Islands">Wallis and Futuna Islands</option>
                                    <option value="Western Sahara">Western Sahara</option>
                                </optgroup>
                                <optgroup label="Y">
                                    <option value="Yemen">Yemen</option>
                                </optgroup>
                                <optgroup label="Z">
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </optgroup>
                            </select><br />
                            <label className="edit-profile-label">City</label><br />
                            <input name="city" placeholder="City" className="edit-profile-input social-network"></input><br />
                            <label className="edit-profile-label">About you</label><br />
                            <input name="introduction yourself" placeholder="Tell us about yourself" className="edit-profile-input"></input>
                            <p className="header">Promote yourself</p>
                            <p className="message2">Add links to your social networks</p>
                            <label className="edit-profile-label">Pinterest</label><br />
                            <input name="link to Pinterest" placeholder="Paste the link to your Pinterest" className="edit-profile-input"></input><br />
                            <label className="edit-profile-label">Facebook</label><br />
                            <input name="link to Facebook" placeholder="Paste the link to your Facebook" className="edit-profile-input"></input><br />
                            <label className="edit-profile-label">Instagram</label><br />
                            <input name="link to Instagram" placeholder="Paste the link to your Instagram" className="edit-profile-input"></input><br />
                            <label className="edit-profile-label">Twitter</label><br />
                            <input name="link to Twitter" placeholder="Paste the link to your Twitter" className="edit-profile-input"></input><br />
                            <label className="edit-profile-label">Personal blog</label><br />
                            <input name="link to Personal blog" placeholder="Paste the link to your Twitter" className="edit-profile-input"></input><br />
                        </form>
                        <div id="edit-profile-bottom-buttons">
                            <button id="edit-profile-save-button" type="submit" form="edit-profile-features">Save</button>
                            <a href="/about-me"><button id="edit-profile-cancel-button" type="reset">Cancel</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileSettings;