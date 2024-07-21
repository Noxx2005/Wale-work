import React from 'react';
import './list.css';
import pic1 from '../../Assets/pexels-cottonbro-4065906.jpg'; // Import the images
import pic2 from '../../Assets/pexels-essow-k-251295-1042143.jpg';
import pic3 from '../../Assets/pexels-jessbaileydesign-788946.jpg';
import pic4 from '../../Assets/pexels-lastly-699122.jpg';

const devices = [
  { name: "Polycom VVX 500", image: pic1 },
  { name: "Yealink SIP-T46S", image: pic2 },
  { name: "Cisco SPA525", image: pic3 },
  { name: "Polycom Soundstation 2", image: pic4 }
];

const Home3 = () => {
  return (
    <div className="device-list-container">
      <h2 className="title">Multiple vendors and devices to choose from</h2>
      <div className="device-list">
        {devices.map((device, index) => (
          <div className="device-item" key={index}>
            <img src={device.image} alt={device.name} className="device-image" />
            <p className="device-name">{device.name} <span className="arrow">→</span></p>
          </div>
        ))}
      </div>
      <a href="see-more-devices.html" className="btnz btn-hvr-dark">See more devices</a>
    </div>
  );
};

export default Home3;
