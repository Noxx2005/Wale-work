import React from 'react';
import './ContactForm.css'; // Import the CSS file

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2 className="titlew">Have a Emparex specialist contact you today!</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company name</label>
          <input type="text" id="company" name="company" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div className="form-group">
          {/* <div className="recaptcha">
            <input type="checkbox" id="recaptcha" name="recaptcha" />
            <label htmlFor="recaptcha">I'm not a robot</label>
            <img src="path-to-recaptcha-image" alt="reCAPTCHA" />
          </div> */}
        </div>
        <button type="submit" className="btnq btn-hvr-dark">Submit</button>
      </form>
      <p className="note">Note: The listed features may not be included in all packages and pricing options and are subject to availability.</p>
    </div>
  );
};

export default ContactForm;
