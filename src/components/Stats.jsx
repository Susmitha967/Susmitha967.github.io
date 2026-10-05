import React from 'react';

const Stats = () => {
  return (
    <section className="section stats-section">
      <div className="container stats-grid">
        <div className="stat-card">
          <span className="stat-label">CGPA</span>
          <span className="stat-value">9.28</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">INTERNSHIPS</span>
          <span className="stat-value">2+</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">PROJECTS</span>
          <span className="stat-value">5+</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">TECHNOLOGIES</span>
          <span className="stat-value">15+</span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
