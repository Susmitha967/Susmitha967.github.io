import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h3 className="section-title">Experience</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-meta">Jun 2025 - Jul 2025</div>
            <div className="timeline-content">
              <h4>Intern - Artificial Intelligence & Machine Learning</h4>
              <span className="timeline-company">IBM SkillsBuild + AICTE</span>
              <p>6-week intensive internship focused on practical AI/ML workflows and real-world model development.</p>
              <div className="timeline-tech">
                <span>Python</span><span>NumPy</span><span>Pandas</span><span>Scikit-learn</span>
              </div>
              <ul className="timeline-bullets">
                <li>Developed an Employee Salary Prediction System using Python and Scikit-learn, applying Random Forest Regression to predict salaries from employee attributes such as experience and education.</li>
                <li>Built an end-to-end machine learning pipeline covering data preprocessing, categorical feature encoding, feature selection, model training, hyperparameter tuning, and cross-validation.</li>
                <li>Optimized the Random Forest model to achieve an R² score of 0.91, explaining approximately 91% of the variance in salary predictions.</li>
                <li>Applied feature selection and ensemble learning techniques to improve model stability and reduce prediction variance by approximately 20%.</li>
              </ul>
              <a className="btn-outline-sm" href="assets/INTERNSHIPS/ibm_intern_page-0001.jpg" target="_blank" rel="noopener noreferrer">Certificate</a>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-meta">Apr 2025 - Jun 2025</div>
            <div className="timeline-content">
              <h4>Intern - High Performance Computing (HPC)</h4>
              <span className="timeline-company">CDAC, Pune</span>
              <p>Developed telecom simulation models and performed VoIP traffic analysis.</p>
              <div className="timeline-tech">
                <span>Fortran</span><span>G.711</span><span>HPC</span>
              </div>
              <ul className="timeline-bullets">
                <li>Developed a graph-based mathematical model to represent and analyze telecom communication traffic between cities using population, activity levels, geographical distance, language affinity, and time-zone factors.</li>
                <li>Implemented a modular Fortran-based simulation to estimate intercity call traffic and calculate traffic density between city pairs.</li>
                <li>Developed and integrated Codec and Calls-to-VoIP modules using the G.711 codec (64 kbps, 20 ms packetization interval) to convert estimated calls into packet-level network traffic.</li>
                <li>Calculated VoIP packet size, packets/sec, bytes/sec, and bandwidth (Mbps) while accounting for voice payload and network overhead, and integrated and tested the modules for telecom traffic modeling and network capacity estimation.</li>
              </ul>
              <a className="btn-outline-sm" href="assets/INTERNSHIPS/CDAC_Certificate_page-0001.jpg" target="_blank" rel="noopener noreferrer">Certificate</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
