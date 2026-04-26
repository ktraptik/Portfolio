import React, { useState } from 'react';

const CaseStudies = ({ caseStudies }) => {
  const [activeStudyId, setActiveStudyId] = useState(null);

  const toggleExpand = (studyId) => {
    setActiveStudyId((currentStudyId) => (
      currentStudyId === studyId ? null : studyId
    ));
  };

  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <h2 className="section-title"><i className="fas fa-star-of-david"></i> Selected Work & Case Studies</h2>
        <div className="case-studies-grid">
          {caseStudies.map((study, index) => {
            const panelId = `case-study-panel-${study.id ?? index}`;
            const isOpen = activeStudyId === study.id;

            return (
              <div key={study.id ?? index} className="case-study-card">
                <button
                  type="button"
                  className="case-header"
                  onClick={() => toggleExpand(study.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <h3><i className="fas fa-project-diagram"></i> {study.title}</h3>
                  <span className={`expand-icon ${isOpen ? 'expanded' : ''}`}>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </button>

                <div
                  id={panelId}
                  className="case-details"
                  hidden={!isOpen}
                >
                  <div className="case-section">
                    <h4><i className="fas fa-exclamation-triangle"></i> Challenge</h4>
                    <p>{study.challenge}</p>
                  </div>

                  <div className="case-section">
                    <h4><i className="fas fa-lightbulb"></i> Approach</h4>
                    <ul>
                      {study.approach.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="case-section">
                    <h4><i className="fas fa-trophy"></i> Result</h4>
                    <ul className="results-list">
                      {study.result.map((item, idx) => (
                        <li key={idx}>
                          <span className="result-icon">âœ“</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
