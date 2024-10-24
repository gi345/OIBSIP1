// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import SecuredPage from './components/SecuredPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/secured" element={<SecuredPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
