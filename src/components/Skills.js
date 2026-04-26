import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title"><i className="fas fa-cube"></i> Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3><i className="fas fa-chess-pawn"></i> Strategy</h3>
            <div className="skill-tags">
              {skills.strategy.map((skill, idx) => (
                <span key={idx} className="skill-tag strategy">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-bolt"></i> Execution</h3>
            <div className="skill-tags">
              {skills.execution.map((skill, idx) => (
                <span key={idx} className="skill-tag execution">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-pen-fancy"></i> Copywriting & Content</h3>
            <div className="skill-tags">
              {skills.content.map((skill, idx) => (
                <span key={idx} className="skill-tag content">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-toolbox"></i> Tools & Platforms</h3>
            <div className="skill-tags">
              {skills.tools.map((skill, idx) => (
                <span key={idx} className="skill-tag tools">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
