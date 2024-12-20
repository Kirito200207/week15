import React from 'react';
import '../styles/Footer.css';
import aboutImage from '../assets/about.png';

const Footer = () => {
  return (
    <section className="why-consulting">
      <div className="container">
        <div className="consulting-content">
          <div className="consulting-text">
            <h2>Why our Consulting?</h2>
            <p>
              Esteem spirit temper too say adieus who direct esteem. It esteems
              luckily or picture placing drawing. Apartments frequently or motionless
              on reasonable.
            </p>
            <button className="about-btn">About Us</button>
          </div>
          <div className="consulting-image">
            <img src={aboutImage} alt="Consulting Team" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer; 