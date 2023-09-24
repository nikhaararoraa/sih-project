import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage3() {
const [currentView, setCurrentView] = useState('signUp');
const navigate = useNavigate();

const changeView = (view) => {
setCurrentView(view);
};

const handleFormSubmit = () => {
// Perform any necessary form handling logic here

// Use navigate to navigate to 'organization.js' when the submit button is clicked
navigate('/UserPage');
};
const renderCurrentView = () => {
switch (currentView) {
case 'signUp':
return (
    <form>
    <h2>Sign Up!</h2>
    <fieldset>
        <legend>Create Account</legend>
        <ul>
        <li>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" required />
        </li>
        <li>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
        </li>
        <li>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required />
        </li>
        </ul>
    </fieldset>
    <button type="button" onClick={handleFormSubmit}>
        Submit
    </button>
    <button type="button" onClick={() => changeView('logIn')}>
        Have an Account?
    </button>
    </form>
);
case 'logIn':
return (
    <form>
    <h2>Welcome Back!</h2>
    <fieldset>
        <legend>Log In</legend>
        <ul>
        <li>
            <label htmlFor="login-username">Username:</label>
            <input type="text" id="login-username" required />
        </li>
        <li>
            <label htmlFor="login-password">Password:</label>
            <input type="password" id="login-password" required />
        </li>
        <li>
            <i />
            <a onClick={() => changeView('PWReset')} href="/">
            Forgot Password?
            </a>
        </li>
        </ul>
    </fieldset>
    <button type="button" onClick={handleFormSubmit}>
        Login
    </button>
    <button type="button" onClick={() => changeView('signUp')}>
        Create an Account
    </button>
    </form>
);
case 'PWReset':
return (
    <form>
    <h2>Reset Password</h2>
    <fieldset>
        <legend>Password Reset</legend>
        <ul>
        <li>
            <em>A reset link will be sent to your inbox!</em>
        </li>
        <li>
            <label htmlFor="reset-email">Email:</label>
            <input type="email" id="reset-email" required />
        </li>
        </ul>
    </fieldset>
    <button>Send Reset Link</button>
    <button type="button" onClick={() => changeView('logIn')}>
        Go Back
    </button>
    </form>
);
default:
return null;
}
};

return <section id="entry-page">{renderCurrentView()}</section>;
}

export default LoginPage3;
