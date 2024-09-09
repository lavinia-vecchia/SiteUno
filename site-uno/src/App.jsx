import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Regras from './pages/Regras';
import ComoJogar from './pages/ComoJogar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/regras">Regras</Link></li>
            <li><Link to="/como-jogar">Como Jogar</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/regras" element={<Regras />} />
          <Route path="/como-jogar" element={<ComoJogar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;