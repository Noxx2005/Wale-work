import React, { useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:Info@emparex.net?subject=${encodeURIComponent(question)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;

    window.location.href = mailtoLink;

    onSubmit(email, question);
    
    setEmail('');
    setQuestion('');
    setMessage('');
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-contentz">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h1 className='contact-text'>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="question">Subject:</label>
            <input
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button id='submit' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
