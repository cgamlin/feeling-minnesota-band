import '../styles/Contact.css';
import { useState } from 'react';
import Logo from './Logo';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [error, setError] = useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check honeypot field
    if (honeypot) {
      console.log('Bot detected');
      return;
    }

    // Validate email
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    console.log('Form submitted successfully');

    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
    setHoneypot('');
  };

  const isFormValid = name.trim() && email.trim() && message.trim() && emailRegex.test(email);

  return (
    <div className="contact">
      <Logo />
      <h2>Contact Us</h2>
      <div className="contact-columns">
        <div className="contact-description">
          <p>If you are looking for entertainment for a party, BBQ, or any other type of event, then contact us here!</p>
          <p>We are available for private events, corporate gatherings, and more. Let us bring the music to your special occasion!</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          {/* Honeypot field */}
          <input
            type="text"
            id="honeypot"
            name="honeypot"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ display: 'none' }}
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" disabled={!isFormValid}>Submit</button>
        </form>
      </div>
    </div>
  );
}