import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo2-removebg-preview.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="">
        <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
          <div className="header-content">
            <a href="/" className={`logo ${isScrolled ? "logo-scrolled" : ""}`}>
              <img src={logo} className="logo" alt="Logo" />
            </a>
            <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
              <a href="/" className={`nav-link ${isScrolled ? "nav-link-scrolled" : ""}`}>
                Home
              </a>
              <a href="/Industries" className={`nav-link ${isScrolled ? "nav-link-scrolled" : ""}`}>
                Industries
              </a>
              <a href="/features" className={`nav-link ${isScrolled ? "nav-link-scrolled" : ""}`}>
               Our Service
              </a>
              <a href="/Virtual" className={`nav-link ${isScrolled ? "nav-link-scrolled" : ""}`}>
               About Us
              </a>
            </nav>
            <div className="menu-icon" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
