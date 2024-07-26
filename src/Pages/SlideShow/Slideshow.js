import React, { useState, useEffect } from 'react';
import img1 from "../../Assets/drop-3698073_1920 .jpg";
import img2 from "../../Assets/futuristic-smart-city-with-5g-global-network-technology.jpg";
import img3 from "../../Assets/vecteezy_man-using-voip-headset-with-digital-tablet-computer-docking_5314322.jpg";
import './SlideShow.css'; // Import the CSS file

const images = [img1, img2, img3];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
                Serving over 25,000 businesses, multiple industry awards, rated A+ by the BBB.
              </div>
              <a href="pricing.html" className="btn1zz btn-hvr-dar2k" tabindex="-1">Read more</a>
              <a href="pricing.html" className="btn1zz btn-hvr-dar2k" data-target="page-bottom" tabindex="-1">View demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
