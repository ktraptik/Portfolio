import React from 'react';

const Overview = ({ overview, highlights }) => {
  return (
    <section className="overview">
      <div className="container">
        <h2 className="section-title"><i className="fas fa-eye"></i> Overview</h2>
        <p className="overview-text">{overview}</p>
        
        <div className="highlights-section">
          <h3 className="subsection-title"><i className="fas fa-star"></i> Key Highlights</h3>
          <div className="highlights-grid">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="highlight-card">
                <span className="highlight-bullet" aria-hidden="true"></span>
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
