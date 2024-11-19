import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent: ' + message);
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Please feel free to reach out with any questions.</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <textarea
          className="contact-textarea"
          placeholder="Write your message here..."
          value={message}
          onChange={handleMessageChange}
          required
        ></textarea>
        
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
