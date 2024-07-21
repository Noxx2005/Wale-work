import React, { useState, useEffect } from 'react';
import "./Navbar.css"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-content">
        <a href="/" className={`logo ${isScrolled ? 'logo-scrolled' : ''}`}>Your Logo</a>
        <nav className="nav">
          <a href="/pricing.html" className={`nav-link ${isScrolled ? 'nav-link-scrolled' : ''}`}>Plans & Pricing</a>
          <a href="/features.html" className={`nav-link ${isScrolled ? 'nav-link-scrolled' : ''}`}>Features</a>
          <a href="/industries.html" className={`nav-link ${isScrolled ? 'nav-link-scrolled' : ''}`}>Industries</a>
        </nav>
        <div className="menu-icon">

        </div>
      </div>
    </header>
  );

};

export default Header;
