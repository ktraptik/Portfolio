import React from 'react';

const Approach = ({ approach, philosophy }) => {
  return (
    <section className="approach">
      <div className="container">
        <h2 className="section-title"><i className="fas fa-stream"></i> How I Work</h2>
        <div className="approach-steps">
          {approach.map((item, idx) => (
            <div key={idx} className="approach-step">
              <div className="step-number">{item.step}</div>
              <div className="step-content">
                <h3>
                  {item.step === 1 && <i className="fas fa-glasses"></i>}
                  {item.step === 2 && <i className="fas fa-map"></i>}
                  {item.step === 3 && <i className="fas fa-cog"></i>}
                  {item.step === 4 && <i className="fas fa-chart-bar"></i>}
                  {item.name}
                </h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="philosophy-section">
          <h2 className="section-title"><i className="fas fa-lightbulb"></i> Approach & Philosophy</h2>
          <div className="philosophy-box">
            <p>{philosophy}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
