import React, { useState } from 'react';

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px', verticalAlign: '-2px' }}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Projects = () => {
  const [openDetails, setOpenDetails] = useState({});

  const toggleDetails = (id) => {
    setOpenDetails(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h3 className="section-title">Projects</h3>
        <p className="project-note">Selected projects showcasing my experience in Full-Stack Development, AI/ML, Generative AI, and Data Analytics.</p>

        {/* FEATURED PROJECT */}
        <div className="featured-project">
          <div className="featured-content">
            <span className="project-category">GENERATIVE AI • FEATURED</span>
            <h4 className="featured-title">RepoSage</h4>
            <p className="project-tagline">An AI-powered GitHub assistant that automates repo health audits, generates documentation, and features an interactive &ldquo;chat with your codebase&rdquo; interface using RAG for instant code understanding.</p>

            <div className="project-details" style={{ marginBottom: openDetails['reposage'] ? '12px' : '16px' }}>
              <p className="detail-block" style={{ lineHeight: 1.4 }}>
                Developers waste time manually auditing GitHub repos for missing best practices, secrets, and documentation, and face a steep learning curve when understanding new codebases. RepoSage is an AI-powered GitHub assistant that automates repo health audits, generates documentation, and features a &ldquo;chat with your codebase&rdquo; interface for instant code understanding.
              </p>
            </div>

            {openDetails['reposage'] && (
              <div className="project-expanded-panel" id="details-reposage">
                <div className="project-detail-section">
                  <span className="project-detail-label">Problem</span>
                  <p className="project-detail-text">
                    Developers waste time manually auditing GitHub repos for missing best practices, secrets, and documentation, and face a steep learning curve when understanding new codebases.
                  </p>
                </div>

                <div className="project-detail-section">
                  <span className="project-detail-label">Solution</span>
                  <p className="project-detail-text">
                    RepoSage is an AI-powered GitHub assistant that automates repo health audits, generates documentation, and features a &ldquo;chat with your codebase&rdquo; interface for instant code understanding.
                  </p>
                </div>

                <div className="project-detail-section">
                  <span className="project-detail-label">Technologies Used</span>
                  <div className="project-tech-detail-box">
                    <div className="project-tech-row">
                      <span className="tech-category">Frontend:</span> Next.js, React, Tailwind CSS, Framer Motion
                    </div>
                    <div className="project-tech-row">
                      <span className="tech-category">Backend &amp; AI:</span> FastAPI, Groq API (LLMs), Sentence Transformers
                    </div>
                    <div className="project-tech-row">
                      <span className="tech-category">Data &amp; Integrations:</span> ChromaDB (Vector DB for RAG), GitHub GraphQL API
                    </div>
                  </div>
                </div>

                <div className="project-detail-section">
                  <span className="project-detail-label">Key Features</span>
                  <ul className="project-features-list">
                    <li><strong>Profile &amp; Repository Audits:</strong> Automatically scans GitHub profiles and repositories to detect missing best practices, configuration issues, and accidentally exposed secrets.</li>
                    <li><strong>AI-Powered Recommendations:</strong> Translates raw audit findings into prioritized, actionable, and friendly recommendations using LLMs.</li>
                    <li><strong>Interactive Codebase Chat (RAG):</strong> Ingests repository code into a local vector database, allowing users to ask natural language questions and get instant, context-aware answers about the codebase.</li>
                    <li><strong>Automated README Generation:</strong> Analyzes the repository&apos;s context, structure, and code to generate clean, well-structured README files.</li>
                    <li><strong>Deep Dive Analytics:</strong> Provides visual insights and statistics into repository languages, structures, and overall health metrics.</li>
                  </ul>
                </div>
              </div>
            )}

            <div className="featured-tech">
              <span>Next.js</span><span>FastAPI</span><span>Groq API</span><span>ChromaDB</span><span>RAG</span><span>Tailwind</span>
            </div>

            <div className="featured-actions">
              <a href="https://github.com/Susmitha967/RepoSage" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '6px 16px', fontSize: '0.85rem' }}>
                  <GithubIcon /> GitHub
                </a>
              <button
                onClick={() => toggleDetails('reposage')}
                className="btn btn-primary"
                style={{ cursor: 'pointer', padding: '6px 16px', fontSize: '0.85rem' }}
                aria-expanded={!!openDetails['reposage']}
              >
                {openDetails['reposage'] ? 'Hide Details ▲' : 'View Details ▼'}
              </button>
            </div>
          </div>
        </div>

        {/* OTHER PROJECTS */}
        <div className="project-grid mt-top">

          {/* Project 1: Customer Churn Prediction */}
          <article className="project-card">
            <div className="project-card-content">
              <span className="project-category">AI / ML</span>
              <h4>Customer Churn Prediction</h4>
              <p className="project-description" style={{ marginBottom: '12px' }}>
                Developed an end-to-end machine learning pipeline that analyzes customer data, identifies important churn-related patterns, and predicts whether a customer is likely to churn. Evaluated multiple classification models with data preprocessing, feature engineering, and SMOTE class-imbalance handling to improve predictive reliability.
              </p>

              {openDetails['churn'] && (
                <div className="project-expanded-panel" id="details-churn">
                  <div className="project-detail-section">
                    <span className="project-detail-label">Problem</span>
                    <p className="project-detail-text">
                      Businesses lose significant revenue when customers discontinue their services. However, identifying customers who are likely to churn is difficult when analyzing large volumes of customer data manually. The project addresses this challenge by predicting customers who are at high risk of leaving based on their usage, service, contract, and account-related information.
                    </p>
                  </div>

                  <div className="project-detail-section">
                    <span className="project-detail-label">Solution</span>
                    <p className="project-detail-text">
                      Developed an end-to-end machine learning solution that analyzes customer data, identifies important churn-related patterns, and predicts whether a customer is likely to churn. Multiple classification models were trained and evaluated to identify the most effective approach, with data preprocessing, feature engineering, class-imbalance handling, and cross-validation used to improve model reliability.
                    </p>
                  </div>

                  <div className="project-detail-section">
                    <span className="project-detail-label">Technologies Used</span>
                    <div className="project-tech-detail-box">
                      <strong>Python</strong> • Pandas • NumPy • Scikit-learn • XGBoost • Matplotlib • Seaborn • Jupyter Notebook • SMOTE
                    </div>
                  </div>

                  <div className="project-detail-section">
                    <span className="project-detail-label">Key Features</span>
                    <ul className="project-features-list">
                      <li><strong>Customer Churn Prediction</strong> — Predicts whether a customer is likely to leave the service.</li>
                      <li><strong>Data Preprocessing</strong> — Handles missing values, categorical variables, and inconsistent data.</li>
                      <li><strong>Exploratory Data Analysis</strong> — Identifies customer behavior and patterns associated with churn.</li>
                      <li><strong>Feature Engineering</strong> — Extracts meaningful features to improve model performance.</li>
                      <li><strong>Class Imbalance Handling</strong> — Uses SMOTE to improve the identification of churn customers.</li>
                      <li><strong>Multiple ML Models</strong> — Compares Decision Tree, Random Forest, and XGBoost models.</li>
                      <li><strong>Model Evaluation</strong> — Uses accuracy, precision, recall, F1-score, confusion matrix, and cross-validation.</li>
                      <li><strong>Feature Analysis</strong> — Identifies the factors that have the greatest influence on customer churn.</li>
                      <li><strong>Business Insights</strong> — Helps businesses identify high-risk customers and develop targeted retention strategies.</li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="project-tech">
                <span>Python</span><span>Scikit-Learn</span><span>XGBoost</span><span>Pandas</span><span>SMOTE</span><span>Jupyter</span>
              </div>
              <div className="project-links" style={{ gap: '12px', border: 'none', paddingTop: '8px' }}>
                <a href="https://github.com/Susmitha967/Customer-Churn-Prediction_ML" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '0.85rem' }}>
                  <GithubIcon /> GitHub
                </a>
                <button
                  onClick={() => toggleDetails('churn')}
                  className="btn btn-primary"
                  style={{ padding: '6px 16px', fontSize: '0.85rem', cursor: 'pointer' }}
                  aria-expanded={!!openDetails['churn']}
                >
                  {openDetails['churn'] ? 'Hide Details ▲' : 'View Details ▼'}
                </button>
              </div>
            </div>
          </article>

          {/* Project 4: Netflix Data Analysis */}
          <article className="project-card">
            <div className="project-card-content">
              <span className="project-category">DATA ANALYTICS</span>
              <h4>Netflix Data Analysis</h4>
              <p className="project-description" style={{ marginBottom: '12px' }}>
                Executed comprehensive exploratory data analysis on Netflix's content library utilizing Python, Pandas, and Seaborn. Designed intuitive visualizations to track global production trends, shifting genre popularities, and evolving content ratings over time, delivering clear data-driven recommendations for media strategy.
              </p>

              {openDetails['netflix'] && (
                <div className="project-expanded-panel" id="details-netflix">
                  <div className="project-detail-section">
                    <span className="project-detail-label">Problem</span>
                    <p className="project-detail-text">
                      Netflix has a large catalog of movies and TV shows, making it difficult to manually identify content trends, genre patterns, country-wise production, and changes over time.
                    </p>
                  </div>

                  <div className="project-detail-section">
                    <span className="project-detail-label">Solution</span>
                    <p className="project-detail-text">
                      Analyzed the Netflix content dataset using Python-based EDA and visualization to uncover trends by genre, country, release year, content type, duration, and ratings, supporting data-driven content strategy decisions.
                    </p>
                  </div>

                  <div className="project-detail-section">
                    <span className="project-detail-label">Technologies Used</span>
                    <div className="project-tech-detail-box">
                      Python | Pandas | NumPy | Matplotlib | Seaborn | Jupyter Notebook
                    </div>
                  </div>

                  <div className="project-detail-section">
                    <span className="project-detail-label">Key Features</span>
                    <ul className="project-features-list">
                      <li><strong>Exploratory Data Analysis (EDA):</strong> Deep dive EDA of Netflix movies and TV shows.</li>
                      <li><strong>Genre Analysis:</strong> Identifies content distribution and trends.</li>
                      <li><strong>Country-wise Analysis:</strong> Evaluates regional content production and distribution.</li>
                      <li><strong>Year-wise Trend Analysis:</strong> Tracks content growth and library evolution over time.</li>
                      <li><strong>Movie vs TV Show Analysis:</strong> Compares distribution and preferences between formats.</li>
                      <li><strong>Rating &amp; Duration Analysis:</strong> Evaluates content maturity ratings and runtime patterns.</li>
                      <li><strong>Data Visualization:</strong> Interprets patterns using clear charts and graphs.</li>
                      <li><strong>Strategic Recommendations:</strong> Guides content acquisition based on discovered patterns.</li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="project-tech">
                <span>Python</span><span>Pandas</span><span>NumPy</span><span>Matplotlib</span><span>Seaborn</span>
              </div>
              <div className="project-links" style={{ gap: '12px', border: 'none', paddingTop: '8px' }}>
                <a href="https://github.com/Susmitha967/netflix-data-analytics" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '0.85rem' }}>
                  <GithubIcon /> GitHub
                </a>
                <button
                  onClick={() => toggleDetails('netflix')}
                  className="btn btn-primary"
                  style={{ padding: '6px 16px', fontSize: '0.85rem', cursor: 'pointer' }}
                  aria-expanded={!!openDetails['netflix']}
                >
                  {openDetails['netflix'] ? 'Hide Details ▲' : 'View Details ▼'}
                </button>
              </div>
            </div>
          </article>

          {/* Project 2: Trade Hub */}
          <article className="project-card">
            <div className="project-card-content">
              <span className="project-category">FULL-STACK / FINTECH</span>
              <h4>Trade Hub</h4>
              <p className="project-description" style={{ marginBottom: '12px' }}>
                Engineered a paper-trading platform simulating real-world stock market dynamics with a $10,000 virtual portfolio. Users can actively buy and sell US stocks, track live portfolio performance, and manage custom watchlists. Features interactive Chart.js visualizations and secure JWT authentication for beginners.
              </p>

              {openDetails['tradehub'] && (
                <div className="project-expanded-panel" id="details-tradehub">
                  <div className="project-detail-section">
                    <span className="project-detail-label">Problem</span>
                    <p className="project-detail-text">
                      Real stock trading involves financial risk, making it difficult for beginners to practice buying, selling, and managing a portfolio safely.
                    </p>
                  </div>

                  <div className="project-detail-section">
                    <span className="project-detail-label">Solution</span>
                    <p className="project-detail-text">
                      Developed a paper-trading platform that simulates the stock market using virtual money, allowing users to buy and sell stocks, track portfolio performance, manage watchlists, and analyze stock prices without using real funds.
                    </p>
                  </div>

                  <div className="project-detail-section">
                    <span className="project-detail-label">Technologies Used</span>
                    <div className="project-tech-detail-box">
                      <div className="project-tech-row">
                        <span className="tech-category">Frontend:</span> React 18 | Redux Toolkit | React Router | Chart.js | Axios | React Toastify
                      </div>
                      <div className="project-tech-row">
                        <span className="tech-category">Backend:</span> Node.js | Express.js | REST APIs
                      </div>
                      <div className="project-tech-row">
                        <span className="tech-category">Database:</span> MongoDB | Mongoose
                      </div>
                      <div className="project-tech-row">
                        <span className="tech-category">Auth &amp; Security:</span> JWT | bcryptjs | Helmet | express-rate-limit | CORS
                      </div>
                    </div>
                  </div>

                  <div className="project-detail-section">
                    <span className="project-detail-label">Key Features</span>
                    <ul className="project-features-list">
                      <li><strong>User Authentication:</strong> JWT-based registration and login.</li>
                      <li><strong>Role-Based Access:</strong> Separate User and Admin capabilities.</li>
                      <li><strong>Virtual Trading:</strong> Every new user receives $10,000 virtual balance.</li>
                      <li><strong>Buy/Sell Stocks:</strong> Users can purchase and sell available US stocks with balance validation.</li>
                      <li><strong>Portfolio Management:</strong> Tracks holdings and calculates real-time profit/loss.</li>
                      <li><strong>Watchlist:</strong> Users can save and monitor up to 30 stocks.</li>
                      <li><strong>Interactive Charts:</strong> Stock price visualization across 1D, 1M, 3M, 6M, and 1Y periods.</li>
                      <li><strong>Admin Dashboard:</strong> User management, stock management, and platform-level analytics.</li>
                      <li><strong>Stock Database:</strong> 40 pre-seeded US stocks across 9 sectors.</li>
                      <li><strong>Responsive UI:</strong> Designed for desktop and mobile usage.</li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="project-tech">
                <span>React 18</span><span>Node.js</span><span>Express</span><span>MongoDB</span><span>Redux Toolkit</span><span>Chart.js</span>
              </div>
              <div className="project-links" style={{ gap: '12px', border: 'none', paddingTop: '8px' }}>
                <a href="https://github.com/Susmitha967/Trade-Hub" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '0.85rem' }}>
                  <GithubIcon /> GitHub
                </a>
                <button
                  onClick={() => toggleDetails('tradehub')}
                  className="btn btn-primary"
                  style={{ padding: '6px 16px', fontSize: '0.85rem', cursor: 'pointer' }}
                  aria-expanded={!!openDetails['tradehub']}
                >
                  {openDetails['tradehub'] ? 'Hide Details ▲' : 'View Details ▼'}
                </button>
              </div>
            </div>
          </article>

          {/* Project 3: Twitter Media Aggregator */}
          <article className="project-card">
            <div className="project-card-content">
              <span className="project-category">FULL-STACK / API INTEGRATION</span>
              <h4>Twitter Media Aggregator</h4>
              <p className="project-description" style={{ marginBottom: '12px' }}>
                Developed a Flask web application integrating with the X API v2 to seamlessly aggregate a user's recent posts. The backend intelligently handles API rate limits using automatic bearer token rotation and retry mechanisms, ensuring a smooth, uninterrupted viewing experience.
              </p>

              {openDetails['twitter'] && (
                <div className="project-expanded-panel" id="details-twitter">
                  <div className="project-detail-section">
                    <span className="project-detail-label">Problem</span>
                    <p className="project-detail-text">
                      Accessing a user&apos;s recent X (Twitter) posts through the API can be inconvenient because users have to work directly with API endpoints and handle authentication and API rate limits.
                    </p>
                  </div>

                  <div className="project-detail-section">
                    <span className="project-detail-label">Solution</span>
                    <p className="project-detail-text">
                      Built a Flask-based web application that allows users to enter an X/Twitter username and view their recent posts in a clean, responsive card-based feed, while automatically handling API rate limits through token rotation and retry logic.
                    </p>
                  </div>

                  <div className="project-detail-section">
                    <span className="project-detail-label">Technologies Used</span>
                    <div className="project-tech-detail-box">
                      Python | Flask | Requests | HTML | CSS | JavaScript | X (Twitter) API v2
                    </div>
                  </div>

                  <div className="project-detail-section">
                    <span className="project-detail-label">Key Features</span>
                    <ul className="project-features-list">
                      <li><strong>Username Lookup:</strong> Converts an X/Twitter username into its corresponding user ID.</li>
                      <li><strong>Recent Posts Feed:</strong> Retrieves and displays up to 35 recent posts with text and timestamps.</li>
                      <li><strong>Bearer Token Rotation:</strong> Automatically switches between multiple API tokens when one reaches its rate limit.</li>
                      <li><strong>Rate-Limit Handling:</strong> Handles HTTP 429 responses with retry and exponential backoff.</li>
                      <li><strong>Responsive UI:</strong> Displays posts using mobile-friendly Bootstrap cards.</li>
                      <li><strong>REST API Integration:</strong> Uses X API v2 endpoints to retrieve user and tweet data.</li>
                      <li><strong>JSON Data Processing:</strong> Flask converts API responses into simplified JSON for frontend rendering.</li>
                      <li><strong>Error Handling:</strong> Displays API and request errors directly in the interface.</li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="project-tech">
                <span>Python</span><span>Flask</span><span>X API v2</span><span>REST API</span><span>JavaScript</span>
              </div>
              <div className="project-links" style={{ gap: '12px', border: 'none', paddingTop: '8px' }}>
                <a href="https://github.com/Susmitha967/twitter-media-aggregator" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '6px 16px', fontSize: '0.85rem' }}>
                  <GithubIcon /> GitHub
                </a>
                <button
                  onClick={() => toggleDetails('twitter')}
                  className="btn btn-primary"
                  style={{ padding: '6px 16px', fontSize: '0.85rem', cursor: 'pointer' }}
                  aria-expanded={!!openDetails['twitter']}
                >
                  {openDetails['twitter'] ? 'Hide Details ▲' : 'View Details ▼'}
                </button>
              </div>
            </div>
          </article>


        </div>

        <div className="projects-cta">
          <a href="https://github.com/Susmitha967" target="_blank" rel="noopener noreferrer">View All Projects &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
