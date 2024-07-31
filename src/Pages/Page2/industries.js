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
    name: "Logistics",
    image: pic05,
    info: "For the Shipping and Logistics industry, our solutions provide streamlined communication channels, including real-time tracking updates, efficient call management, and integrated shipment notifications. We also offer custom software solutions to enhance logistics operations and improve efficiency.",
  },
  {
    id: 2,
    name: "Information Technology",
    image: pic06,
    info: "In the Information Technology sector, we offer robust and scalable communication tools, including high-quality voice and video calls, secure data transmission, and seamless integration with IT infrastructure. Our solutions support remote work and collaboration with advanced features such as cloud-based conferencing and unified messaging.",
  },
];

const industriesData2 = [
  {
    id: 5,
    name: "Manufacturing",
    image: pic02,
    info: "Our solutions for the Manufacturing industry include reliable communication systems and real-time coordination between production lines. We offer integrated inventory management and advanced telephony solutions to enhance operational efficiency and reduce downtime.",
  },
  {
    id: 6,
    name: "Insurance",
    image: pic04,
    info: "For the Insurance industry, we provide a comprehensive communication platform that enhances client interactions and operational efficiency. Our features include automated claim processing, secure call handling, and integrated CRM tools. We also offer IT solutions to streamline operations and improve customer service.",
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
              Industries for Business Phone Services and More
            </h1>
            <h4 className="header-text">
              Emparex offers business solutions tailored to industry-specific needs, including business phone services, software development, and IT solutions. Our advanced features help you gain and maintain a competitive edge.
            </h4>
          </div>
        </div>
      </div>
      <div className="industries-list-container">
        <div className="industries-list">
          {industriesData.map((industry) => (
            <div className="rowz" key={industry.id}>
              <div className="colmd-4">
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
              <div className="colmd-4">
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
          className="modal-head"
        >
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <p className="h21">{selectedIndustry.name}</p>
            <img src={selectedIndustry.image} alt={selectedIndustry.name} />
            <p>{selectedIndustry.info}</p>
            {/* <button onClick={closeModal}>Close</button> */}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Industries;
