import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SolutionPage from './pages/SolutionPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solution" element={<SolutionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 