import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="about-content">
          <h3 className="section-title" style={{ textAlign: 'left' }}>About Me</h3>
          <p className="project-note" style={{ textAlign: 'left', marginBottom: '16px' }}>
            I am a Computer Science student with a strong passion for data analytics, machine learning, and full-stack development. Throughout my academic journey and personal projects, I have enjoyed turning theoretical concepts into practical applications—from building responsive web apps with Flask to training predictive ML models.
          </p>
          <p className="project-note" style={{ textAlign: 'left' }}>
            As an aspiring software engineer, I love exploring datasets to uncover trends and building intelligent solutions that solve everyday problems. I am a highly motivated and continuous learner, eager to pick up new technologies, write clean code, and collaborate on impactful projects as I begin my professional career.
          </p>
        </div>
        <div className="about-highlights">
          <div className="highlight-item">
            <i className="devicon-python-plain"></i>
            <h4>AI/ML</h4>
            <p>Predictive modeling and analytics</p>
          </div>
          <div className="highlight-item">
            <i className="devicon-react-original"></i>
            <h4>Full-Stack</h4>
            <p>End-to-end web applications</p>
          </div>
          <div className="highlight-item">
            <i className="devicon-nodejs-plain"></i>
            <h4>Backend</h4>
            <p>Scalable APIs and databases</p>
          </div>
          <div className="highlight-item">
            <i className="devicon-tensorflow-original"></i>
            <h4>Generative AI</h4>
            <p>LLMs, RAG, and AI agents</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
