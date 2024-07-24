import React, { useState } from "react";
import Header from "../Navbar/Navbar";
import ContactForm from "../Contact/ContactForm";
import Footer from "../Footer/Footer";
import "./virtual.css";
import pic1 from "../../Assets/finance.jpg";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <p className="accordion-title">{title}</p>
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
                No Contract &amp; Instant Activation. Starting at{" "}
                <span className="color-orange2">$9.95.</span>
              </p>
            </div>
          </div>

          <div className="row34">
            <div className="col-sm-12">
              <a href="vpbx-signup.html" className="btn2 btn-start-trial mb-5">
                Start 30-day free trial
              </a>
              <p>
                An affordable system built for small businesses. Callture offers
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
            <div className="col-lg-7 top-text">
              <h2>Modern VoIP Service for Business</h2>
            </div>
          </div>

          <div className="row34">
            <div className="col-sm-12">
              <p>
                Getting a business phone number is one of the great marketing
                decisions and adding a phone number that clients can remember is
                the cherry on top, they can dial straight up your number and
                talk business. Frequent connection and clear communication with
                clients add additional value to your business's authenticity and
                operation.
              </p>
              <p>
                Choose the best business phone system for your business. The
                Callture's Virtual telephone system narrow34s down the hassle of
                handling phone calls, faxes, voice mails, video conferences, and
                texts all within one system. Whether you are a one-man business,
                a medium-sized business or a corporate business Callture has got
                your back.
              </p>
              <a href="https://www.callture.com/pricing.html" className="btn2">
                See plans &gt;&gt;
              </a>
            </div>
          </div>
        </div>

        <div className="fullwidth-section section-virtualphone section-virtualphone-form">
          <div className="container">
            <div className="row34">
              <div className="col-lg-12">
                <h2>Find a number your clients can remember</h2>
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
                    A virtual toll-free number offers a big-company image to
                    clients who want to contact you free of charge from
                    anywhere.
                  </li>
                  <li>
                    We offer a variety of toll-free number types, from 800, 844,
                    855, 866, 877, and 888 prefixes to vanity numbers.
                  </li>
                  <li>
                    A vanity number is a phone number that spells a name such as
                    1-800-FLOWERS or 1-855-COMPANY.
                  </li>
                </ul>
                <p className="font-weight-medium">02. Local Number</p>
                <ul className="plus">
                  <li>
                    A local number can drive sales by providing a local presence
                    in any target city.
                  </li>
                  <li>
                    Clients use local numbers as a key part of geographically
                    targeted advertising.
                  </li>
                  <li>
                    We provide numbers for all major cities, which can be
                    forwarded to any number.
                  </li>
                </ul>
                <p className="font-weight-medium">
                  03. Never Miss a Call - Quick and Easy Programming
                </p>
                <ul className="plus">
                  <li>
                    Forward calls from your business phone system to your
                    mobile, landline, or VoIP.
                  </li>
                  <li>
                    Our Call forwarding feature allows you to forward calls to
                    all your phone numbers simultaneously or sequentially.
                  </li>
                  <li>
                    Calls can ring your mobile phone for 2 rings, and then ring
                    your landline for 3 rings, etc.
                  </li>
                  <li>
                    Calls can ring all your numbers simultaneously — you can
                    answer using any phone.
                  </li>
                  <li>
                    If you miss a call, it’s sent to a professional voicemail
                    system and then emailed to you.
                  </li>
                  <li>
                    Callture virtual telephone system sends you a text message
                    if your receptionist misses a call and doesn't call back
                    within 15 minutes.
                  </li>
                </ul>
                <p className="font-weight-medium">
                  04. Customized Main Greeting
                </p>
                <ul className="plus">
                  <li>
                    To add a big company feel, you can use a custom main
                    greeting to inform callers of their options, such as
                    accessing information or reaching a specific department. It
                    can say "Welcome to ABC company. Please press 1 for sales, 2
                    for support", etc and portray as a virtual receptionist.
                  </li>
                </ul>
                <p className="font-weight-medium">05. Internet Fax</p>
                <ul className="plus">
                  <li>
                    You will be given a separate fax number. Your clients can
                    send faxes to this number the same way they do. However,
                    when a fax is received by our system, it will be converted
                    to a PDF and emailed to you.
                  </li>
                  <li>
                    You can send faxes from our site to any number from
                    anywhere. You will have access to your faxes from anywhere.
                    You don't need to pay extra for a separate fax line, fax
                    machine, and toners.
                  </li>
                </ul>
                <p className="font-weight-medium">06. Unified Communication</p>
                <ul className="plus">
                  <li>
                    Callture Unified Communication includes video conferencing,
                    chat, text, and presence.
                  </li>
                  <li>
                    Our UC has the latest WebRtc tech — no need for software
                    downloads or to create users.
                  </li>
                  <li>
                    Your prospects or clients simply click a button to start a
                    video conference with you.
                  </li>
                  <li>
                    Quick and easy, you can effortlessly share your screen to do
                    sales or product demos.
                  </li>
                </ul>
                <p className="font-weight-medium">
                  08. Send and Receive Texts with Your Callture Business Number
                </p>
                <ul className="plus">
                  <li>
                    Send texts from your mobile phone to your business clients
                    with your business Caller ID rather than your personal cell
                    phone.
                  </li>
                  <li>
                    When a customer sends a text to your Callture business
                    number, it is forwarded to your cell phone.
                  </li>
                  <li>
                    You can have multiple numbers for texting while using the
                    same mobile phone.
                  </li>
                </ul>
                <p className="font-weight-medium">
                  09. Listen or Read Voicemail on Your Mobile Phone
                </p>
                <ul className="plus">
                  <li>
                    Voicemails are transcribed and sent as a text or email.
                    Voicemails are emailed as a voice file as well, that can be
                    played on your mobile phone.
                  </li>
                </ul>
                <p className="font-weight-medium">10. Conference Calling</p>
                <ul className="plus">
                  <li>
                    Set up a conference call with up to 10 people at any time.
                    You can use this to train your clients or conduct a sales
                    meeting.
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
              title="Unlimited Inbound and Outbound Calls Anywhere in Canada &raquo;"
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
          {/* <div className="row34">
            <div className="col-lg-7 accordion-wrapper">
              <div id="accordion">
                <div className="card">
                  <div
                    className="card-header"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <p className="font-weight-medium">
                      How to set up a virtual phone system?
                    </p>
                  </div>
                  <div className="collapse" data-parent="#accordion">
                    <div className="card-body">
                      <p>
                        In order to set up a virtual phone system, do the
                        following:
                      </p>
                      <ul className="plus">
                        <li>
                          Choose a Business Phone plan for your organization
                        </li>
                        <li>Assign extensions to various departments</li>
                        <li>
                          Record your Phone Greetings Message that plays at the
                          beginning of the call
                        </li>
                        <li>Start Placing and Answering Calls</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div
                    className="card-header"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <p className="font-weight-medium">
                      Is the conference calling feature available?
                    </p>
                  </div>
                  <div className="collapse" data-parent="#accordion">
                    <div className="card-body">
                      Yes, this package supports the conference calling feature.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div
                    className="card-header"
                    data-toggle="collapse"
                    aria-expanded="false"
                  >
                    <p className="font-weight-medium">
                      Can a virtual business phone system be used at home?
                    </p>
                  </div>
                  <div className="collapse" data-parent="#accordion">
                    <div className="card-body">
                      The virtual business phone system can be used at home and
                      office without the tension of hardware and wire setup.
                      User can get benefits of the virtual phone system from any
                      device that has access to internet.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VirtualPage;
