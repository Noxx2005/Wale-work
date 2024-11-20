import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo2-removebg-preview.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const solutionsColumns = [
    [
      "Animation & Graphic Design",
      "Artificial Intelligence",
      "Asset Tracking (RFID & Barcode)",
      "AR / VR",
      "Autodesk",
      "Biometrics",
      "Blockchain",
      "Business Intelligence & Analytics",
      "CMS",
      "CRM",
      "Database",
    ],
    [
      "Digital Asset Management",
      "Digital Marketing",
      "Digital Signage",
      "Document Management",
      "Embedded Software",
      "ERP",
      "Facilities Management",
      "Field Service Management",
      "Firmware",
      "Franchise Management",
    ],
    [
      "Fraud Protection",
      "GIS",
      "IoT & M2M",
      "IT Service Management",
      "Kiosk",
      "Legacy",
      "Location Based Services",
      "Middleware",
      "Mobile & Tablet",
      "Netsuite",
    ],
    [
      "Open Source",
      "Oracle",
      "POS / Payment Processing",
      "Salesforce",
      "Sales Management",
      "SAP",
      "Telephony",
      "Ticketing",
      "UI / UX",
      "UiPath",
    ],
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check for mobile

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
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
          <div
            className={`nav-link solutions-link ${isScrolled ? "nav-link-scrolled" : ""}`}
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
            onClick={isMobile ? toggleDropdown : () => setDropdownVisible(true)}
          >
            Solutions
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <div className="inner-box-border">
                  {solutionsColumns.map((column, columnIndex) => (
                    <div key={columnIndex} className="column">
                      <ul>
                        {column.map((solution, index) => (
                          <li key={index}>
                           {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
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
  );
};

export default Header;
