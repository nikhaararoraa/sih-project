import React from "react";
import { useNavigate } from "react-router-dom";
 // Import useNavigate
import "./MainPage.css";

function MainPage() {
const navigate = useNavigate(); // Use useNavigate instead of useHistory

const handleDivClick1 = () => {
// Store the selected div's value in the state

// Navigate to the login page
navigate("/Login1"); // Use navigate() instead of history.push()
};
const handleDivClick2 = () => {
    // Store the selected div's value in the state

    // Navigate to the login page
    navigate("/Login2"); // Use navigate() instead of history.push()
    };
    const handleDivClick3 = () => {
        // Store the selected div's value in the state

        // Navigate to the login page
        navigate("/Login3"); // Use navigate() instead of history.push()
        };

return (
<div className="main-page">
    <div className="div-1" onClick={() => handleDivClick1("Div-1")}>
        ORGANIZATION
    </div>
    <div className="div-2" onClick={() => handleDivClick2("Div-2")}>
        PUBLIC
    </div>
    <div className="div-3" onClick={() => handleDivClick3("Div-3")}>
        USER
    </div>
</div>
);
}

export default MainPage;
