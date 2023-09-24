import React from 'react';
import './UserPage.css';
import './MainPage';
//import MailPage from './MailPage'; // Import the MailPage component

function UserPage() {
return (
<div className="user-page-container">
    <div className="navbar">
    <ul>
        <li><a href="/">ID</a></li>
        <li><a href="#barHorizontal">Information</a></li>
        <li><a href="#green-container">Certificate</a></li>
        <li><a href="./MailPage.js">Email</a></li>
    </ul>
    </div>
    <div className="main-content">
    <div id="barHorizontal"className="horizontal-bar">
        <div className="label"></div>
        <div className="label"></div>
    </div>
    <div id="green-container"className="green-container">
        {/* Content of the green container goes here */}
        {/* Include the MailPage component */}
    </div>
    </div>
</div>
);
}

export default UserPage;
