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
          <p>Toll Free <span>1-888-683-5226</span></p>
          <p>Platform Services <span>1-647-258-4100</span></p>
          <p>International Callers <span>1-416-847-9111</span></p>
          <p>Fax <span>1-905-804-9888</span></p>
        </div>
        <div className="footer-section about">
          <h4>About</h4>
          <p>We are proud of the fact that our entire business was a bootstrapped startup that has evolved into an A+ rated multinational enterprise.</p>
        </div>
        <div className="footer-section links">
          <a href="#">Vendors & Devices →</a>
          <a href="#">Privacy Policy →</a>
          <a href="#">Fax →</a>
          <a href="#">Transfer Instructions →</a>
          <a href="#">Toll Free / Virtual PBX →</a>
          <a href="#">Tollfree SMS verification →</a>
          <a href="#">Sitemap →</a>
          <a href="#">Terms & Conditions →</a>
          <a href="#">Contact Us →</a>
        </div>
        <div className="footer-section social-media">
          <a href="#" className="social-icon facebook">Facebook</a>
          <a href="#" className="social-icon twitter">Twitter</a>
          <a href="#" className="social-icon linkedin">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 1997-2024 Callture™ Communications Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
