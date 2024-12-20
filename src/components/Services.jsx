import React from 'react';
import '../styles/Services.css';
import teamIcon from '../assets/group.svg';
import successIcon from '../assets/respect.svg';
import clientIcon from '../assets/heart.svg';
import businessIcon from '../assets/cart.svg';

const Services = () => {
  const stats = [
    {
      id: 1,
      number: "200+",
      label: "Team Members",
      icon: teamIcon
    },
    {
      id: 2,
      number: "97%",
      label: "Business Success",
      icon: successIcon
    },
    {
      id: 3,
      number: "5628",
      label: "Happy Client",
      icon: clientIcon
    },
    {
      id: 4,
      number: "5637",
      label: "Business Done",
      icon: businessIcon
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map(stat => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon">
                <img src={stat.icon} alt={stat.label} />
              </div>
              <div className="stat-info">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 