import React, { useState } from 'react';

const Experience = ({ experiences }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title"><i className="fas fa-briefcase-open"></i> Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header" onClick={() => toggleExpand(exp.id)}>
                <div className="experience-title-group">
                  <div className="company-header">
                    <i className="fas fa-building"></i>
                    <h3 className="company">{exp.company}</h3>
                  </div>
                  <p className="position"><i className="fas fa-user-tie"></i> {exp.position}</p>
                </div>
                <div className="experience-meta">
                  <span className="period">{exp.period}</span>
                  <span className={`expand-icon ${expandedId === exp.id ? 'expanded' : ''}`}>▼</span>
                </div>
              </div>
              
              {expandedId === exp.id && (
                <div className="experience-details">
                  <p className="overview">{exp.overview}</p>
                  
                  <div className="detail-section">
                    <h4><i className="fas fa-tasks"></i> Key Responsibilities</h4>
                    <ul>
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h4><i className="fas fa-chart-line"></i> Business Impact</h4>
                    <ul>
                      {exp.impact.map((imp, idx) => (
                        <li key={idx}>{imp}</li>
                      ))}
                    </ul>
                  </div>

                  {exp.strategic && (
                    <div className="detail-section">
                      <h4><i className="fas fa-chess-rook"></i> Strategic Contributions</h4>
                      <ul>
                        {exp.strategic.map((strat, idx) => (
                          <li key={idx}>{strat}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
