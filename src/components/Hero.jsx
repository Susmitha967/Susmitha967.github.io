import React from 'react';

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-label">B.Tech CSE | AI/ML</span>
          <h2 className="hero-name">Jillella Susmitha</h2>
          <h3 className="hero-title">AI/ML & Full-Stack Developer</h3>
          <p className="lead">
            Computer Science student and software engineer focused on Full-stack development, AI/ML, Generative AI, and Backend systems. Passionate about building scalable, intelligent solutions and data-driven applications.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-secondary" href="assets/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        <aside className="profile-frame">
          <div className="profile-ring">
            <img src="assets/susmitha-me.png" alt="Jillella Susmitha" />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
