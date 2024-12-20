import React from 'react';
import '../styles/Main.css';
import marketingIcon from '../assets/cart.svg';
import startupIcon from '../assets/group.svg';
import corporateIcon from '../assets/respect.svg';
import financeIcon from '../assets/heart.svg';
import foodIcon from '../assets/cart.svg';
import travelIcon from '../assets/group.svg';

const Main = () => {
  const services = [
    {
      id: 1,
      title: "Marketing & SEO Agency",
      description: "Esteem spirit temper too say adieus who direct esteem.",
      icon: marketingIcon
    },
    {
      id: 2,
      title: "Startup Agency",
      description: "Esteem spirit temper too say adieus who direct esteem.",
      icon: startupIcon
    },
    {
      id: 3,
      title: "Corporate Business",
      description: "Esteem spirit temper too say adieus who direct esteem.",
      icon: corporateIcon
    },
    {
      id: 4,
      title: "Finance Solution",
      description: "Esteem spirit temper too say adieus who direct esteem.",
      icon: financeIcon
    },
    {
      id: 5,
      title: "Food & Restaurant",
      description: "Esteem spirit temper too say adieus who direct esteem.",
      icon: foodIcon
    },
    {
      id: 6,
      title: "Travel Agency",
      description: "Esteem spirit temper too say adieus who direct esteem.",
      icon: travelIcon
    }
  ];

  return (
    <section className="what-we-do">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What we Do?</h2>
        </div>
      </div>
      <div className="container">
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="learn-more">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main; 