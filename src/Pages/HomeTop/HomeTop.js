import React from "react";
import "./HomeTop.css"; // Import the CSS file
import pic1 from "../../Assets/vecteezy_man-using-voip-headset-with-digital-tablet-computer-docking_5314322.jpg";

const HomeTop = () => {
  return (
    <div className="home-top">
      <div className="Container2e">
        {/* <div className="header">
          <h2 className="table-title1">We cost less and deliver more</h2>
        </div> */}
        <div className="features-container">
          <div className="feature-item">
            <h2 className="text2">Enhanced Productivity</h2>
            <ul className="plus">
              <li>No more missed calls</li>
              <li>Mobile enabled</li>
              <li>Custom software solutions</li>
            </ul>
          </div>
          <div className="feature-item">
            <h2 className="text2">Significant Cost Savings</h2>
            <ul className="plus">
              <li>Slash costs by 40%</li>
              <li>No upfront costs</li>
              <li>Efficient IT solutions</li>
            </ul>
          </div>
        </div>
        <div className="features-container">
          <div className="feature-item">
            <h2 className="text2">Reliable Technology</h2>
            <ul className="plus">
              <li>99.999% uptime</li>
              <li>HD call quality</li>
              <li>Top-rated software development</li>
            </ul>
          </div>
          <div className="feature-item">
            <h2 className="text2">Seamless Integration</h2>
            <ul className="plus">
              <li>On-site evaluation</li>
              <li>In-person installation</li>
              <li>Dedicated IT support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="Container2e3">
        <div className="row1">
          <div className="colmd-6 bright pad3">
            <h2 className="reviews-title">5 Star Capabilities</h2>
            <div className="review-star">
              <div className="star-img"></div>
              <div className="star-img"></div>
              <div className="star-img"></div>
              <div className="star-img"></div>
              <div className="star-img"></div>
              <div className="star-value">5.0</div>
            </div>
            <p className="quote">
              “We Provide Excellent service in business telecom systems, software development, and IT solutions. Our systems are reliable, cost-effective, and coupled with superb, friendly customer support.”
            </p>
          </div>

          <div className="colmd-6">
            <img src={pic1} alt="phone" loading="lazy" className="full-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
