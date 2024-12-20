import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <a href="/">Logo</a>
          </div>
          <ul className="nav-links">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#pages">Pages</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#case-study">Case Study</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="get-quote-btn">Get a Quote</button>
        </div>
      </nav>

      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Big Opportunity<br />For Your Business</h1>
            <button className="our-services-btn">Our Services</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 