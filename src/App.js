import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import MainPage from "./components/MainPage";
import LoginPage1 from "./components/LoginPage1";
import LoginPage2 from "./components/LoginPage2";
import LoginPage3 from "./components/LoginPage3";
import Organization from "./components/organization";
import UserPage from "./components/UserPage";
import PublicPage from "./components/PublicPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login1" element={<LoginPage1 />} />
        <Route path="/login2" element={<LoginPage2 />} />
        <Route path="/login3" element={<LoginPage3 />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/PublicPage" element={<PublicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
