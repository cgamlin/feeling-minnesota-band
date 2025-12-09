import '../styles/Contact.css';
import { useState } from 'react';
import Logo from './Logo';

export default function Contact() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const isFormValid = formState.name.trim() !== "" &&
    emailRegex.test(formState.email) &&
    formState.message.trim() !== "";

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formElement = e.target;
    const data = new FormData(formElement);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString()
    })
    .then(() => {
      alert('Thank you for your message!');
      formElement.reset();
      setFormState({ name: '', email: '', message: '' });
    })
    .catch(err => alert('We apologize, but there was an error submitting your email. Please try again later.'))
    .finally(() => setSubmitting(false));
};

  return (
    <div className="contact">
      <Logo />
      <h2>Contact Us</h2>
      <div className="contact-columns">
        <div className="contact-description">
          <p>If you are looking for entertainment for a party, BBQ, or any other type of event, then contact us here!</p>
          <p>We are available for private events, corporate gatherings, and more. Let us bring the music to your special occasion!</p>
          <p>Email: <a className="contact-email" href="mailto:feelingminnesotaband@gmail.com">feelingminnesotaband@gmail.com</a></p>
        </div>
        <form
          name="contact"
          className="contact-form"
          method="POST"
          onSubmit={handleSubmit}
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="subject" value={"Contact Us request from " + formState.email} />
          <input type="hidden" name="bot-field" />

          <label>Name:
            <input type="text" name="name" value={formState.name} onChange={handleChange} required />
          </label>
          <label>Email:
            <input type="email" name="email" value={formState.email} onChange={handleChange} required />
          </label>
          <label>Message:
            <textarea name="message" value={formState.message} onChange={handleChange} required />
          </label>
          <button type="submit" disabled={!isFormValid || submitting}>
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}