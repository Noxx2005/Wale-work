import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo2-removebg-preview.png";

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
      <div className="">
        <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
          <div className="header-content">
            <a href="/" className={`logo ${isScrolled ? "logo-scrolled" : ""}`}>
              <img src={logo} className="logo"></img>
            </a>
            <nav className="nav">
              <a
                href="/"
                className={`nav-link ${isScrolled ? "nav-link-scrolled" : ""}`}
              >
               Home
              </a>
              <a
                href="/virtual"
                className={`nav-link ${isScrolled ? "nav-link-scrolled" : ""}`}
              >
                Virtual
              </a>
              <a
                href="/features"
                className={`nav-link ${isScrolled ? "nav-link-scrolled" : ""}`}
              >
                Features
              </a>
              <a
                href="/industries"
                className={`nav-link ${isScrolled ? "nav-link-scrolled" : ""}`}
              >
                Industries
              </a>
            </nav>
            <div className="menu-icon"></div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
