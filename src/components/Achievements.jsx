import React, { useState } from 'react';

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpenModal = (e, url) => {
    e.preventDefault();
    setSelectedCert(url);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h3 className="section-title">Achievements & Certifications</h3>
        <div className="achievements-grid">
          {/* NPTEL - IIT Madras LLM Certification */}
          <div className="achievement-card">
            <div className="ach-content">
              <h4>Introduction to Large Language Models (LLMs)</h4>
              <span className="ach-org">NPTEL • IIT Madras (Elite)</span>
              <a href="#" onClick={(e) => handleOpenModal(e, 'assets/certifications/Introduction_to_Large_Language_Models_LLMs_NPTEL.pdf')}>View Certificate &rarr;</a>
            </div>
          </div>

          {/* Coursera - Python for Data Analysis */}
          <div className="achievement-card">
            <div className="ach-content">
              <h4>Python for Data Analysis</h4>
              <span className="ach-org">Coursera</span>
              <a href="#" onClick={(e) => handleOpenModal(e, 'assets/certifications/COURSERA/Coursera_python_project_dataanalysis_pandas_numpy_page-0001.jpg')}>View Certificate &rarr;</a>
            </div>
          </div>

          {/* Simplilearn - Prompt Engineering */}
          <div className="achievement-card">
            <div className="ach-content">
              <h4>Prompt Engineering</h4>
              <span className="ach-org">Simplilearn</span>
              <a href="#" onClick={(e) => handleOpenModal(e, 'assets/certifications/SIMPLE_LEARN(prompt engineering)_page-0001.jpg')}>View Certificate &rarr;</a>
            </div>
          </div>

          {/* Udemy - Data Science & ML */}
          <div className="achievement-card">
            <div className="ach-content">
              <h4>Data Science & ML</h4>
              <span className="ach-org">Udemy</span>
              <a href="#" onClick={(e) => handleOpenModal(e, 'assets/certifications/UDEMY/Data_Science_Machine_Learning_page-0001.jpg')}>View Certificate &rarr;</a>
            </div>
          </div>

          {/* Coursera - Data Analytics on AWS */}
          <div className="achievement-card">
            <div className="ach-content">
              <h4>Data Analytics on AWS</h4>
              <span className="ach-org">Coursera</span>
              <a href="#" onClick={(e) => handleOpenModal(e, 'assets/certifications/COURSERA/Course dataa_analytics_on_AWS_page-0001.jpg')}>View Certificate &rarr;</a>
            </div>
          </div>

          {/* Udemy - Complete MS Office and Web Design Development */}
          <div className="achievement-card">
            <div className="ach-content">
              <h4>Complete MS Office & Web Design Development</h4>
              <span className="ach-org">Udemy</span>
              <a href="#" onClick={(e) => handleOpenModal(e, 'assets/certifications/UDEMY/MS_Office_and_Web_Design_Development_Udemy.pdf')}>View Certificate &rarr;</a>
            </div>
          </div>

          {/* HackerRank - Java Certification */}
          <div className="achievement-card">
            <div className="ach-content">
              <h4>Java Certification</h4>
              <span className="ach-org">HackerRank</span>
              <a href="#" onClick={(e) => handleOpenModal(e, 'assets/certifications/Java_Hackerrank.png')}>View Certificate &rarr;</a>
            </div>
          </div>

          {/* Oracle - Foundations Associate */}
          <div className="achievement-card">
            <div className="ach-content">
              <h4>Foundations Associate</h4>
              <span className="ach-org">Oracle</span>
              <a href="#" onClick={(e) => handleOpenModal(e, 'assets/certifications/ORACLE(Foundations_associate)_page-0001.jpg')}>View Certificate &rarr;</a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="cert-modal">
          <div className="cert-modal-backdrop" onClick={handleCloseModal}></div>
          <div className="cert-modal-dialog">
            <button className="cert-modal-close" onClick={handleCloseModal}>&times;</button>
            {selectedCert.endsWith('.pdf') ? (
              <iframe src={selectedCert} style={{ width: '100%', minWidth: '60vw', height: '80vh', border: 'none', borderRadius: '4px' }} title="Certificate" />
            ) : (
              <img src={selectedCert} alt="Certificate" />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
