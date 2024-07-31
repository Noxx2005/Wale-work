import React, { useState } from "react";
import Header from "../Navbar/Navbar";
import ContactForm from "../Contact/ContactForm";
import Footer from "../Footer/Footer";
import "./features.css";
import pic1 from "../../Assets/gettyimages-1316372350-612x612.jpg";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <p className="accordion-title">{title}</p>
        <FontAwesomeIcon
          icon={isOpen ? faCaretUp : faCaretDown}
          color="orange"
        />{" "}
        {/* Use icon based on isOpen state */}
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
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
              <img src={pic1} alt="Features" className="pic1" />
            </div>
            <div className="col-lg-7 col-sm-12 col-xl-6 top-text">
              <h1 className="subpage-title">
                Comprehensive Business Solutions and Features
              </h1>
              <h4>
                Emparex provides a range of business solutions including advanced VoIP features, software development, and IT solutions. Our offerings ensure that your communication is seamless, your software needs are met, and your IT infrastructure is robust. Stay ahead of the competition with our state-of-the-art technology and services.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-container">
        <Accordion
          title="High-Quality Voice Calls"
          content="Enjoy crystal-clear voice calls with our advanced VoIP technology, ensuring that every conversation is crisp and clear, no matter where you are."
        />
        <Accordion
          title="Scalable Solutions for Any Business Size"
          content="Our VoIP solutions are scalable to fit the needs of any business, from small startups to large enterprises. Easily add or remove lines as your business grows."
        />
        <Accordion
          title="Advanced Call Management"
          content="Take advantage of advanced call management features like call forwarding, call waiting, and voicemail-to-email to ensure you never miss an important call."
        />
        <Accordion
          title="Cost-Effective Communication"
          content="Reduce your communication costs with our affordable VoIP plans, which include unlimited local and long-distance calling, and competitive international rates."
        />
        <Accordion
          title="Unified Communication Platform"
          content="Integrate all your communication channels, including voice, video, and messaging, into one unified platform for seamless collaboration and improved productivity."
        />
        <Accordion
          title="Mobile and Remote Access"
          content="Stay connected from anywhere with our mobile and remote access features. Use your business phone number on your mobile device or from any internet-connected device."
        />
        <Accordion
          title="Robust Security and Reliability"
          content="Benefit from our robust security measures that protect your communication from eavesdropping and ensure reliable service with minimal downtime."
        />
        <Accordion
          title="Customizable Auto-Attendant"
          content="Impress your callers with a professional auto-attendant that can be customized to route calls to the appropriate department or individual based on their needs."
        />
        <Accordion
          title="Voicemail Transcription"
          content="Receive voicemails as text messages or emails with our voicemail transcription feature, making it easier to manage and respond to messages promptly."
        />
        <Accordion
          title="Software Development Solutions"
          content="Our software development services include custom software design, development, and integration to meet your specific business needs. From building applications to system integrations, we provide tailored solutions to drive your business forward."
        />
        <Accordion
          title="Comprehensive IT Solutions"
          content="We offer a full range of IT solutions including infrastructure management, cybersecurity, and cloud services. Our expert team ensures that your IT environment is secure, efficient, and aligned with your business objectives."
        />
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default FeaturePage;
