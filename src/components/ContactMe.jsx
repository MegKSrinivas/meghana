import { useState } from 'react';

import '../styles/ContactMe.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzdaqwyq';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Name is required';
    if (!formData.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) next.message = 'Message is required';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    setErrors({});

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Submission failed');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
      setErrors({ submit: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <section id="contact" className="contactme">
      <h3 className="contactme_heading">Contact Me</h3>

      <form className="contactme_form" onSubmit={handleSubmit} noValidate>
        <div className="contactme_row">
          <div className="contactme_field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={
                errors.name ? 'contactme_input is-invalid' : 'contactme_input'
              }
              autoComplete="name"
            />
            {errors.name && (
              <span className="contactme_error">{errors.name}</span>
            )}
          </div>
          <div className="contactme_field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Your@email.com"
              value={formData.email}
              onChange={handleChange}
              className={
                errors.email ? 'contactme_input is-invalid' : 'contactme_input'
              }
              autoComplete="email"
            />
            {errors.email && (
              <span className="contactme_error">{errors.email}</span>
            )}
          </div>
        </div>

        <div className="contactme_field">
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={
              errors.message
                ? 'contactme_textarea is-invalid'
                : 'contactme_textarea'
            }
          />
          {errors.message && (
            <span className="contactme_error">{errors.message}</span>
          )}
        </div>

        {errors.submit && (
          <p className="contactme_error contactme_error--block">
            {errors.submit}
          </p>
        )}
        {status === 'success' && (
          <p className="contactme_success">
            Thanks! Your message has been sent.
          </p>
        )}

        <button
          type="submit"
          className="contactme_submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
      </form>
    </section>
  );
}
