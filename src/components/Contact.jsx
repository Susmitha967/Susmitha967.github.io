import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('Sending...');

    try {
      const response = await fetch('https://formsubmit.co/ajax/jillellasusmitha24@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value
        })
      });

      if (response.ok) {
        setStatus('Success! Your message has been sent.');
        form.reset();
      } else {
        setStatus('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form.');
    }
  };

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
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" rows="4" placeholder="Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
            {status && (
              <p style={{ marginTop: '16px', color: status.startsWith('Success') ? '#4ade80' : 'var(--accent-gold)' }}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
