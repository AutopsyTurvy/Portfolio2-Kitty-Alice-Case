


// src/components/header.jsx



import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-background">
      <header className="header-container">
        <h1 className="header-text">Portfolio: Kitty Alice</h1>

      
        <nav className={`header-nav-links ${menuOpen ? "active" : ""}`}>
          <Link className="header-nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link className="header-nav-link" to="/aboutme" onClick={() => setMenuOpen(false)}>About</Link>
          <a href="https://github.com/AutopsyTurvy" className="header-nav-link" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
            Github Profile
          </a>
        </nav>

       
        <button className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu} aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    </div>
  );
}

export default Header;

