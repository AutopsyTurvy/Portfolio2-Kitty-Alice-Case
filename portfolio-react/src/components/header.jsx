


// src/components/header.jsx



import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <div className="header-background">
      <header className="header-container">
        <h1 className="header-text">Portfolio: Kitty Alice</h1>

        <nav className="header-nav-links">
        <a className="header-nav-link" as={Link} to="/">Home</a>
        <a className="header-nav-link" as={Link} to="/about">About</a>
          <a href="https://github.com/AutopsyTurvy" className="header-nav-link">Github Profile</a>
        </nav>

        <button className="hamburger" aria-label="To open the navigation menu!">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    </div>
  );
}

export default Header;