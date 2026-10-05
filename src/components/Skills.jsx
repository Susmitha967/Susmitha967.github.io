import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h3 className="section-title">Technical Skills</h3>
        <div className="skill-columns">
          <article className="skill-col">
            <h4>Programming Languages</h4>
            <ul>
              <li><i className="devicon-python-plain"></i> Python</li>
              <li><i className="devicon-azuresqldatabase-plain"></i> SQL</li>
              <li><i className="devicon-c-plain"></i> C</li>
              <li><i className="devicon-html5-plain"></i> HTML</li>
              <li><i className="devicon-css3-plain"></i> CSS</li>
              <li><i className="devicon-javascript-plain"></i> JavaScript</li>
            </ul>
          </article>

          <article className="skill-col">
            <h4>Libraries & Frameworks</h4>
            <ul>
              <li><img src="https://cdn.simpleicons.org/flask/e3e3e3" style={{ width: '1.2em', height: '1.2em' }} alt="Flask" /> Flask</li>
              <li><img src="https://cdn.simpleicons.org/pandas/e3e3e3" style={{ width: '1.2em', height: '1.2em' }} alt="Pandas" /> Pandas</li>
              <li><img src="https://cdn.simpleicons.org/numpy/e3e3e3" style={{ width: '1.2em', height: '1.2em' }} alt="NumPy" /> NumPy</li>
              <li><img src="https://cdn.simpleicons.org/scikitlearn/e3e3e3" style={{ width: '1.2em', height: '1.2em' }} alt="Scikit-learn" /> Scikit-learn</li>
              <li><img src="https://cdn.simpleicons.org/fastapi/e3e3e3" style={{ width: '1.2em', height: '1.2em' }} alt="FastAPI" /> FastAPI</li>
              <li><img src="https://cdn.simpleicons.org/sqlalchemy/e3e3e3" style={{ width: '1.2em', height: '1.2em' }} alt="SQLAlchemy" /> SQLAlchemy</li>
              <li><img src="https://cdn.simpleicons.org/langchain/e3e3e3" style={{ width: '1.2em', height: '1.2em' }} alt="Langchain" /> Langchain</li>
            </ul>
          </article>

          <article className="skill-col">
            <h4>Tools & Platforms</h4>
            <ul>
              <li><i className="devicon-git-plain"></i> Git</li>
              <li><i className="devicon-github-original"></i> GitHub</li>
              <li><i className="devicon-jupyter-plain"></i> Jupyter Notebook</li>
              <li><i className="devicon-vscode-plain"></i> VS Code</li>
              <li><i className="devicon-linux-plain"></i> Linux</li>
            </ul>
          </article>

          <article className="skill-col">
            <h4>Database Management</h4>
            <ul>
              <li><i className="devicon-mysql-plain"></i> MySQL</li>
              <li><i className="devicon-postgresql-plain"></i> PostgreSQL</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;
