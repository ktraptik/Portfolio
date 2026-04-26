import React from 'react';

const Hero = ({ tagline, stats }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">{tagline}</h2>
        <div className="stats-container">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-icon">
                {idx === 0 && <i className="fas fa-film"></i>}
                {idx === 1 && <i className="fas fa-users"></i>}
                {idx === 2 && <i className="fas fa-target"></i>}
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
