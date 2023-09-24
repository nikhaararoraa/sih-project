import React, { useState } from 'react';
import './MailPage.css';

const MailPage = () => {
const [to, setTo] = useState('');
const [subject, setSubject] = useState('');
const [content, setContent] = useState('');

const handleToChange = (event) => {
setTo(event.target.value);
};

const handleSubjectChange = (event) => {
setSubject(event.target.value);
};

const handleContentChange = (event) => {
setContent(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
// Do something with the submitted data
};

const handleMetamaskWallet = () => {
// Logic for handling Metamask Wallet button click
};

return (
<div className="MailPage">
    <form onSubmit={handleSubmit}>
    <div className="mailBox">
        <label>
        To:<br/>
        <input type="text" value={to} onChange={handleToChange} />
        </label>
        <label>
        Subject:
        <input type="text" value={subject} onChange={handleSubjectChange} />
        </label>
        <label>
        Content:
        <textarea className="contentInput" value={content} onChange={handleContentChange} />
        </label>
    </div>
    <div className="buttonContainer" >
        <button type="button" onClick={handleMetamaskWallet} className="Metamask">Metamask Wallet</button>
        <button type="submit" className="submitButton">Submit</button>
        <button type="button" className="attachmentButton">Attachment</button>
        <button type="button" className="deleteButton">Delete</button>
    </div>
    </form>
</div>
);
};

export default MailPage;
