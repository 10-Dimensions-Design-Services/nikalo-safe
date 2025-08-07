import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
<<<<<<< HEAD
import SolutionPage from './pages/SolutionPage';
=======
import AboutUs from './pages/AboutUs';
>>>>>>> c4a612bc18f576ce45ab2c00050b2153a00ad3fa

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/solution" element={<SolutionPage />} />
=======
          <Route path="/about" element={<AboutUs />} />
>>>>>>> c4a612bc18f576ce45ab2c00050b2153a00ad3fa
        </Routes>
      </div>
    </Router>
  );
}

export default App; 