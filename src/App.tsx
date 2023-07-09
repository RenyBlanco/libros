import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Home, Libros, Libro, Reinos } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';
import Formulario from './pages/Formulario';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/libro/:id" element={<Libro />} />
          <Route path="/reinos" element={<Reinos />} />
          <Route path="/registro" element={<Formulario />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
