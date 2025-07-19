import React from 'react';
import Navbar from './components/Navbar';  
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './components/Landing';
import './App.css';
function App() {
  return (
     <div className="static-gradient min-h-screen text-gray-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<div className="pt-20"><Landing /></div>} />
        <Route path="/home" element={<div className="pt-20"><Home /></div>} />
        <Route path="/about" element={<div className="pt-20"><About /></div>} />
      </Routes>

      <footer className="bg-gray-800 text-white py-4 mt-10">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Mahlathini Tebatso. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
