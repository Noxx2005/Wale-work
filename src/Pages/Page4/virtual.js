import React, { useState } from "react";
import Header from "../Navbar/Navbar";
import ContactForm from "../Contact/ContactForm";
import Footer from "../Footer/Footer";
import "./virtual.css";
import pic1 from "../../Assets/happy-businesswoman-reading-something-internet-while-using-computer-office.jpg";
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
        />
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <ul className="accordion-list">
          <li>{content}</li>
        </ul>
      </div>
    </div>
  );
};

const VirtualPage = () => {
  return (
    <div>
      <Header />
      <main role="main">
        <div className="container page-top-virtualphone">
          <div className="row34">
            <div className="col-xl-12 mt-5">
              <h1 className="color-orange">
                Best Virtual Business Phone Systems &amp; Services
              </h1>
              <h2>Packed with Services and Features You Can Use</h2>
              <p>
                {/* No Contract &amp; Instant Activation. Starting at{" "}
                <span className="color-orange2">$9.95.</span> */}
              </p>
            </div>
          </div>

          <div className="row34">
            <div className="col-sm-12">
              {/* <a href="vpbx-signup.html" className="btn2 btn-start-trial mb-5">
                Start 30-day free trial
              </a> */}
              <p>
                An affordable system built for small businesses. Emparex offers
                a special Virtual phone system package that will cater to all
                your communication needs. If you want a custom package, call our
                representatives today and they will set you up with the
                appropriate virtual call system package.
              </p>
            </div>
          </div>

          <div className="row34 mt-5 mb-5" style={{ alignItems: "center" }}>
            <div className="col-lg-5 no-padding">
              <img
                src={pic1}
                alt="Virtual phone system"
                width="445"
                height="296"
              />
            </div>
            <div>
              <h2 className="col23">Modern VoIP Service for Business</h2>
            </div>
          </div>

          <div className="row34">
            <div className="col-sm-12">
              <p>
                A reliable business phone number is crucial for effective
                communication and can significantly enhance your company's
                professional image. With a memorable phone number, clients can
                easily reach out, fostering frequent and clear communication
                that adds value to your business's credibility and operations.
              </p>
              <p>
                Choose the best VoIP phone system for your business with
                Emparex. Our virtual telephone system streamlines your
                communication needs by integrating phone calls, faxes,
                voicemails, video conferences, and texts into one unified
                system. Whether you are a small startup, a growing medium-sized
                business, or a large corporation, Emparex provides the tools and
                support to keep your communications seamless and efficient.
              </p>

              <a href="/features" className="btn2">
                Learn More &gt;&gt;
              </a>
            </div>
          </div>
        </div>

        <div className="fullwidth-section section-virtualphone section-virtualphone-form">
          <div className="container">
            <div className="row34">
              <div className="col-lg-12">
                {/* <h2>Find a number your clients can remember</h2> */}
              </div>
            </div>
          </div>
        </div>

        <div className="fullwidth-section section-virtualphone section-virtualphone-accordion">
          <div className="container">
            <div className="row34">
              <div className="col-xl-12">
                <h2 className="color-orange mb-4">
                  Virtual Business Phone System Features &amp; Benefits
                </h2>
              </div>
            </div>

            <div className="row34">
              <div className="col-xl-12">
                <p className="font-weight-medium">01. Toll-Free Number</p>
                <ul className="plus">
                  <li>
                    Enhance your business image with a virtual toll-free number,
                    allowing clients to contact you free of charge from
                    anywhere.
                  </li>
                  <li>
                    Choose from a variety of toll-free prefixes: 800, 844, 855,
                    866, 877, and 888, or opt for a memorable vanity number like
                    1-800-FLOWERS.
                  </li>
                </ul>
                <p className="font-weight-medium">02. Local Number</p>
                <ul className="plus">
                  <li>
                    Establish a local presence in any target city with a local
                    number, driving sales through geographically targeted
                    advertising.
                  </li>
                  <li>
                    Obtain numbers for all major cities, which can be forwarded
                    to any preferred number.
                  </li>
                </ul>
                <p className="font-weight-medium">03. Never Miss a Call</p>
                <ul className="plus">
                  <li>
                    Forward calls from your business phone system to your
                    mobile, landline, or VoIP seamlessly.
                  </li>
                  <li>
                    Customize call forwarding to ring all your devices
                    simultaneously or sequentially, ensuring you never miss a
                    call.
                  </li>
                  <li>
                    Missed calls are sent to a professional voicemail system and
                    emailed to you for easy access.
                  </li>
                  <li>
                    Receive text alerts if a call is missed and not returned
                    within 15 minutes.
                  </li>
                </ul>
                <p className="font-weight-medium">
                  04. Customized Main Greeting
                </p>
                <ul className="plus">
                  <li>
                    Use a custom main greeting to inform callers of their
                    options, such as accessing information or reaching specific
                    departments, giving a professional image of a virtual
                    receptionist.
                  </li>
                </ul>
                <p className="font-weight-medium">05. Internet Fax</p>
                <ul className="plus">
                  <li>
                    Receive faxes directly to your email as PDF files without
                    the need for a fax machine, saving costs on separate fax
                    lines and equipment.
                  </li>
                  <li>
                    Send faxes from our site to any number from anywhere,
                    ensuring you have access to your faxes from any location.
                  </li>
                </ul>
                <p className="font-weight-medium">06. Unified Communication</p>
                <ul className="plus">
                  <li>
                    Benefit from video conferencing, chat, text, and presence
                    with our Unified Communication platform.
                  </li>
                  <li>
                    Utilize the latest WebRTC technology for seamless
                    communication without software downloads or user creation.
                  </li>
                  <li>
                    Initiate video conferences with a simple click, share your
                    screen effortlessly for sales or product demos.
                  </li>
                </ul>
                <p className="font-weight-medium">
                  07. Text Messaging with Business Number
                </p>
                <ul className="plus">
                  <li>
                    Send texts from your mobile phone using your business Caller
                    ID, maintaining a professional communication line.
                  </li>
                  <li>
                    Receive customer texts sent to your business number directly
                    to your mobile phone.
                  </li>
                  <li>
                    Use multiple numbers for texting on a single mobile device.
                  </li>
                </ul>
                <p className="font-weight-medium">
                  08. Voicemail Transcription
                </p>
                <ul className="plus">
                  <li>
                    Receive transcribed voicemails as text or email, with the
                    option to listen to voice files on your mobile phone.
                  </li>
                </ul>
                <p className="font-weight-medium">09. Conference Calling</p>
                <ul className="plus">
                  <li>
                    Set up conference calls with up to 10 participants, ideal
                    for client training or sales meetings.
                  </li>
                </ul>
              </div>
            </div>

            <div className="row34">
              <div className="col-sm-12">
                <a href="features.html" className="btn btn-white">
                  Load more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container section-fax-3">
          <div className="row34">
            <div className="col-xl-6">
              <h2 className="color-orange">FAQs</h2>
            </div>
          </div>
          <div className="row3">
            <Accordion
              title="What is a VoIP Phone System?"
              content="A VoIP phone system uses the internet to make and receive calls, providing greater flexibility and often lower costs compared to traditional phone systems."
            />
            <Accordion
              title="How does call forwarding work?"
              content="Call forwarding allows you to redirect incoming calls to another phone number, such as your mobile or another office line, ensuring you never miss an important call."
            />
            <Accordion
              title="Can I keep my existing phone number?"
              content="Yes, most VoIP providers allow you to port your existing phone number to your new VoIP service, so you don't have to change your contact information."
            />
            <Accordion
              title="What equipment do I need for VoIP?"
              content="You'll need a reliable internet connection and VoIP-enabled phones. Many VoIP providers offer compatible hardware or software options to get you started."
            />
            <Accordion
              title="Are VoIP calls secure?"
              content="VoIP calls can be secure, especially when using encryption and other security measures. Make sure your provider offers these protections."
            />
            <Accordion
              title="Can I use VoIP for international calls?"
              content="Yes, VoIP often provides cheaper rates for international calls compared to traditional phone services. Check with your provider for specific rates and plans."
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VirtualPage;
