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
            <h2 className="text2">Increased Productivity</h2>
            <ul className="plus">
              <li>No more missed calls</li>
              <li>Mobile enabled</li>
              <li>Over 40 features</li>
            </ul>
          </div>
          <div className="feature-item">
            <h2 className="text2">Huge Cost Savings</h2>
            <ul className="plus">
              <li>Slash costs by 40%</li>
              <li>No upfront costs</li>
            </ul>
          </div>
        </div>
        <div className="features-container">
          <div className="feature-item">
            <h2 className="text2">Guaranteed Reliability</h2>
            <ul className="plus">
              <li>99.999% uptime</li>
              <li>HD call quality</li>
              <li>4.3 star user reviews</li>
            </ul>
          </div>
          <div className="feature-item">
            <h2 className="text2">Seamless Switching</h2>
            <ul className="plus">
              <li>On-site evaluation</li>
              <li>In-person installation</li>
              <li>Own account manager</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="Container2e">
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
              “We Provide Excellent service. Our business telecom systems are
              reliable and our service is cost effective, coupled with superb,
              friendly customer support”
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
