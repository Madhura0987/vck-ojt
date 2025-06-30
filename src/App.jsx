// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./styles/Pages.css";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";

import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AdmissionPage from "./pages/AdmissionPage";
import { useState } from "react";
import DeveloperInfoPopup from "./components/Developerinfo/DeveloperInfoPopup";



function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  return (
    <>
    <div>
     {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Madhura Prakash Repe"
          studentPhotoUrl="/images/madhura.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <Router>
      
      <div className="main-layout">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/admissions" element={<AdmissionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ChatbotComponent />
        </div>
        <Footer />
      </div>
    </Router>
    </>
  );
}
export default App;