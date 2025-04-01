// src/componentes/Menu.jsx
import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu" aria-label="Main Navigation">
      <ul className="menu-list">
        <li className="menu-item">
          <a href="#home" className="menu-link" aria-label="Ir a Inicio">Home</a>
        </li>
        <li className="menu-item">
          <a href="#about" className="menu-link" aria-label="Ir a Acerca de">About</a>
        </li>
        <li className="menu-item">
          <a href="#services" className="menu-link" aria-label="Ir a Servicios">Services</a>
        </li>
        <li className="menu-item">
          <a href="#contact" className="menu-link" aria-label="Ir a Contacto">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
