import React, { useState } from "react";
import Header from "../Navbar/Navbar";
import ContactForm from "../Contact/ContactForm";
import Footer from "../Footer/Footer";
import Modal from "react-modal";
import "./industries.css";
import pic02 from "../../Assets/pexels-olly-3760067.jpg";
import pic04 from "../../Assets/pexels-zeleboba-4211136.jpg";
import pic05 from "../../Assets/pexels-tiger-lily-4484155.jpg";
import pic06 from "../../Assets/pexels-divinetechygirl-1181271.jpg";

const industriesData = [
  {
    id: 1,
    name: "Shipping/Logistics",
    image: pic05,
    info: "For the Shipping and Logistics industry, our VoIP solutions offer streamlined communication channels, including real-time tracking updates and efficient call management. Enhance your operational efficiency with features like automated call routing, instant voice and video communication, and integrated shipment notifications.",
  },
  {
    id: 2,
    name: "Information Technology",
    image: pic06,
    info: "In the Information Technology sector, our VoIP services provide robust and scalable communication tools. Benefit from high-quality voice and video calls, secure data transmission, and seamless integration with your existing IT infrastructure. Our solutions support remote work and collaboration with advanced features such as cloud-based conferencing and unified messaging.",
  },
];

const industriesData2 = [
  {
    id: 5,
    name: "Manufacturing",
    image: pic02,
    info: "Our VoIP solutions are ideal for the Manufacturing industry, offering reliable and scalable communication systems. Ensure smooth coordination between production lines and supply chains with features like real-time communication, call analytics, and integrated inventory management. Enhance operational efficiency and reduce downtime with our advanced telephony solutions.",
  },
  {
    id: 6,
    name: "Insurance",
    image: pic04,
    info: "For the Insurance industry, our VoIP services provide a comprehensive communication platform that enhances client interactions and improves operational efficiency. Features include automated claim processing, secure call handling, and integrated customer relationship management (CRM) tools. Streamline your communication and improve customer service with our reliable and feature-rich solutions.",
  },
];

const Industries = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const openModal = (industry) => {
    setSelectedIndustry(industry);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedIndustry(null);
  };

  return (
    <div className="">
      <Header />
      <div className="ContainerJ">
        <div className="rowzr">
          <div className="colmd-6">
            <h1 className="subpage-title">
              Industries for Business Phone Services
            </h1>
            <h4>
              Emparex business phone service caters to the industry-specific
              needs of our business customers by incorporating the future-proof
              features required to gain and maintain your competitive advantage.
            </h4>
          </div>
        </div>
      </div>
      <div className="industries-list-container">
        <div className="industries-list">
          {industriesData.map((industry) => (
            <div className="rowz" key={industry.id}>
              <div className="col-sm-6 col-md-4">
                <div onClick={() => openModal(industry)} className="btn-move">
                  <img
                    className="pic00"
                    src={industry.image}
                    alt={industry.name}
                  />
                </div>
                <div onClick={() => openModal(industry)} className="btn-move">
                  {industry.name} <span className="arrow">⟶</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="industries-list">
          {industriesData2.map((industry) => (
            <div className="rowz" key={industry.id}>
              <div className="col-sm-6 col-md-4">
                <div onClick={() => openModal(industry)} className="btn-move">
                  <img
                    className="pic00"
                    src={industry.image}
                    alt={industry.name}
                  />
                </div>
                <div onClick={() => openModal(industry)} className="btn-move">
                  {industry.name} <span className="arrow">⟶</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactForm />
      <Footer />

      {selectedIndustry && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Industry Modal"
        >
          <div className="modal-content">
            <h2>{selectedIndustry.name}</h2>
            <img src={selectedIndustry.image} alt={selectedIndustry.name} />
            <p>{selectedIndustry.info}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Industries;
