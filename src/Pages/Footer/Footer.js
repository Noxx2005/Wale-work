import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section address">
          <h4>Address</h4>
          <p>2800 Skymark Ave, Suite 402</p>
          <p>Mississauga, Ontario, L4W 5A6</p>
          <p>Canada</p>
        </div>
        <div className="footer-section phone-numbers">
          <h4>Phone numbers</h4>
          <p>Toll Free<br/>  <span> 1888-606-0028</span></p>
          <p>Platform Services<br/>  <span>905-606-0028</span></p>
        </div>
        <div className="footer-section about">
          <h4>About</h4>
          <p>We are proud of the fact that our entire business was a bootstrapped startup that has evolved into an A+ rated multinational enterprise.</p>
        </div>
        {/* <div className="footer-section links">
          <a href="#" id='first-link'>Vendors & Devices →</a>
          <a href="#">Privacy Policy →</a>
          <a href="#">Fax →</a>
          <a href="#">Transfer Instructions →</a>
          <a href="#">Toll Free / Virtual PBX →</a>
          <a href="#">Tollfree SMS verification →</a>
          <a href="#">Sitemap →</a>
          <a href="#">Terms & Conditions →</a>
          <a href="#">Contact Us →</a>
        </div> */}
        <div className="footer-section social-media">
          <a href="#" className="social-icon facebook" id='facebook'>Facebook</a>
          <a href="#" className="social-icon twitter">Twitter</a>
          <a href="#" className="social-icon linkedin">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2024 Emparex</p>
      </div>
    </footer>
  );
};

export default Footer;
