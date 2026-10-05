import React from 'react';

const WhatIDo = () => {
  return (
    <section className="section">
      <div className="container">
        <h3 className="section-title">What I Do</h3>
        <div className="do-grid">
          <div className="do-card">
            <h4>Full-Stack Development</h4>
            <p>Building scalable, responsive web applications and APIs using modern frameworks.</p>
          </div>
          <div className="do-card">
            <h4>AI / ML</h4>
            <p>Building machine learning solutions, data analytics pipelines, and intelligent applications.</p>
          </div>
          <div className="do-card">
            <h4>Generative AI</h4>
            <p>Developing LLM-powered applications, AI assistants, and sophisticated agentic workflows.</p>
          </div>
          <div className="do-card">
            <h4>Backend Development</h4>
            <p>Designing robust REST APIs, microservices, databases, and secure authentication systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
