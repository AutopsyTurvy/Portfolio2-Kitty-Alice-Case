


// src/components/Header.jsx



import React from "react";
import "../styles/header.css";
import headerImage from "../assets/headertornpage2.png"; 

function Header() {
  return (
    <div className="header-background">
      <header className="header-container">
        <h1 className="header-text">Portfolio: Kitty Alice</h1>

        <nav className="nav-links">
          <a className="nav-link" href="index.html">Home</a>
          <a className="nav-link" href="pages/aboutMe.html">About</a>
          <a href="https://github.com/AutopsyTurvy" className="nav-link">Github Profile</a>
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

