import React, { useState, useEffect } from "react";
import img1 from "../../Assets/pexels-fauxels-3182773.jpg";
import img2 from "../../Assets/futuristic-smart-city-with-5g-global-network-technology.jpg";
import img3 from "../../Assets/vecteezy_man-using-voip-headset-with-digital-tablet-computer-docking_5314322.jpg";
import "./SlideShow.css";
import ChatIcon from "../Home/ChatIcon/ChatIcon.jsx";
import ContactModal from "../Home/ChatIcon/ContactModal.jsx";

const images = [img1, img2, img3];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault(); // Prevents navigation to pricing.html
    setIsModalOpen(true);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slideshow-container">
      <img
        src={images[currentIndex]}
        alt="Slideshow"
        className="slideshow-image"
      />
      <div className="overlay">
        <div className="content">
          <div className="row">
            <div className="col-md-10">
              <div className="heading">
                Revolutionize your communication with our reliable and
                affordable VoIP solutions.
              </div>
              <a
                href="/features"
                className="btn1zz btn-hvr-dar2k"
                tabindex="-1"
              >
                Read more
              </a>

              <a
                href="#"
                className="btn1zz btn-hvr-dar2k"
                onClick={openModal}
                data-target="page-bottom"
                tabIndex="-1"
              >
                Request Consultation
              </a>

              {isModalOpen && (
                <ContactModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
