import React, { useState } from 'react';
import Header from "../Navbar/Navbar";
import ContactForm from "../Contact/ContactForm";
import Footer from "../Footer/Footer";
import "./features.css";
import pic1 from "../../Assets/finance.jpg";
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <p className="accordion-title">{title}</p>
        <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} /> {/* Use icon based on isOpen state */}
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <ul className="accordion-list">
          <li>{content}</li>
        </ul>
      </div>
    </div>
  );
};

const FeaturePage = () => {
  return (
    <div>
      <Header />
      <div className="main2">
        <div className="containerr page-top-box page-top-features">
          <div className="roww">
            <div className="col-lg-3 col-sm-12 no-padding">
              <img src={pic1} alt="Features" className='pic1' />
            </div>
            <div className="col-lg-7 col-sm-12 col-xl-6 top-text">
              <h1 className="subpage-title">
                Robust VOIP Business Phone System Features
              </h1>
              <h4>
                Emparex business phone service is fully loaded with the latest
                features to ensure your business has the complete flexibility it
                needs to ensure you stay ahead of competitors in your industry.
                Importantly, never miss another important call with the{" "}
                <a href="https://www.Emparex.com/products/2-line-business-phones.html">
                  multi line phone system
                </a>{" "}
                setup in your office.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-container">
        <Accordion
          title="Unlimited Inbound and Outbound Calls Anywhere in Canada"
          content="Make and receive unlimited calls to and from any number in Canada."
        />
        <Accordion
          title="Cloud-Based Enterprise Phone System"
          content="Experience the flexibility and power of a cloud-based phone system."
        />
        <Accordion
          title="Never Miss a Call — Quick and Easy Programming"
          content="Program your system easily to never miss an important call."
        />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default FeaturePage;
