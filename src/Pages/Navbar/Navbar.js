import React, { useState, useEffect } from "react";
import "./Navbar.css";

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="top-bar">
        <div className="contact-info">
          <span>SALES: 1-800-520-4903</span>
          <span className="divider">|</span>
          <span>SUPPORT: 1-888-683-5226</span>
        </div>
        <div className="actions">
          <button className="request-quote">REQUEST A QUOTE</button>
          {/* <button className="login">LOGIN</button> */}
        </div>
      </div>
      <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
        <div className="header-content">
          <a href="/" className={`logo ${isScrolled ? "logo-scrolled" : ""}`}>
            Your Logo
          </a>
          <nav className="nav">
            <a
              href="/pricing.html"
              className={`nav-link ${isScrolled ? "nav-link-scrolled" : ""}`}
            >
              Plans & Pricing
            </a>
            <a
              href="/features.html"
              className={`nav-link ${isScrolled ? "nav-link-scrolled" : ""}`}
            >
              Features
            </a>
            <a
              href="/industries.html"
              className={`nav-link ${isScrolled ? "nav-link-scrolled" : ""}`}
            >
              Industries
            </a>
          </nav>
          <div className="menu-icon"></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
