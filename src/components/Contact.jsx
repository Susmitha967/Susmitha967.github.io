import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid-2col">
        <div className="contact-intro">
          <h3>Let's build something together.</h3>
          <p>I am open to internship opportunities, collaborative research, and meaningful conversations about AI, Full-Stack, and software engineering. Feel free to reach out.</p>
          <div className="contact-links">
            <a href="mailto:jillellasusmitha24@gmail.com" className="btn-outline-sm">Email Me</a>
            <a href="https://www.linkedin.com/in/jillella-susmitha-5104b7337/" target="_blank" rel="noopener noreferrer" className="btn-outline-sm">LinkedIn</a>
            <a href="https://github.com/Susmitha967" target="_blank" rel="noopener noreferrer" className="btn-outline-sm">GitHub</a>
          </div>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" action="#" method="POST">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" rows="4" placeholder="Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
