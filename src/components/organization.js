// Organization.js
import React from 'react';
import './organization.css'; // Make sure to use the correct filename for your CSS

const Organization = () => {
const handleSubmit = () => {
// Handle the form submission here
alert('Form submitted!');
};

const handleClear = () => {
// Clear the form or reset any input values
alert('Form cleared!');
};

return (
<>
    <div className="organization-background">
    <div className="div"></div>
    <h1>Name Organization</h1>
    </div>
    <div className="container">
    <div className="div-1">
        <div className="input-container">
        <input type="text" placeholder="Enter something" />
        </div>
        <div className="button-container">
        <button className="submit-button">View Documents</button>
        <button className="upload-button">Upload Documents</button>
        </div>
    </div>

    <div className="div-2">
        {/* Upload input */}
        <input type="file" accept=".pdf,.doc,.docx" />
        {/* You can add more elements or buttons for uploading */}
    </div>
    <div className="div-3">
        {/* Submit and Clear buttons */}
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleClear}>Clear</button>
    </div>
    </div>
</>
);
};

export default Organization;
