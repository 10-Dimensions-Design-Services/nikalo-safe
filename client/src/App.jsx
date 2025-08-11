import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SolutionPage from './pages/SolutionPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ScrollToHashElement from './components/ScrollToHashElement';
import TermsOfUse from "./components/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToHashElement /> {/* Handles smooth scrolling */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<SolutionPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 