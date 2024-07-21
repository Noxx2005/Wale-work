import React from "react";
import "./HomeTop.css"; // Import the CSS file
import pic1 from "../../Assets/drop-3698073_1920.jpg";

const HomeTop = () => {
  return (
    <div className="home-top">
      <div className="container">
        <table className="table">
          <thead>
            <tr>{/* <th></th> */}</tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="no-border"
                style={{ borderLeft: ".5px solid #dee2e6" }}
              >
                <h2 className="table-title1">We cost less and deliver more</h2>
              </td>
              <td
                className="no-border"
                style={{
                  borderLeft: ".5px solid #dee2e6",
                  marginBottom: "20px",
                }}
              >
                <h3 className="text-center">Increased Productivity</h3>
                <ul className="plus">
                  <li>No more missed calls</li>
                  <li>Mobile enabled</li>
                  <li>Over 40 features</li>
                </ul>
              </td>
              <td
                className="no-border"
                style={{
                  borderLeft: ".5px solid #dee2e6",
                  borderRight: ".5px solid #dee2e6",
                }}
              >
                <h2 className="text-center">Huge Cost Savings</h2>
                <ul className="plus">
                  <li>Slash costs by 40%</li>
                  <li>No upfront costs</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td
                className=""
                style={{
                  borderBottom: ".5px solid #dee2e6",
                  borderLeft: ".5px solid #dee2e6",
                }}
              ></td>
              <td
                className="no-border"
                style={{
                  borderBottom: ".5px solid #dee2e6",
                  borderLeft: ".5px solid #dee2e6",
                }}
              >
                <h3 className="table-title">Guaranteed Reliability</h3>
                <ul className="plus">
                  <li>99.999% uptime</li>
                  <li>HD call quality</li>
                  <li>4.3 star user reviews</li>
                </ul>
              </td>
              <td
                className="no-border"
                style={{
                  borderBottom: ".5px solid #dee2e6",
                  borderLeft: ".5px solid #dee2e6",
                  borderRight: ".5px solid #dee2e6",
                }}
              >
                <h3 className="table-title">Seamless Switching</h3>
                <ul className="plus">
                  <li>On-site evaluation</li>
                  <li>In-person installation</li>
                  <li>Own account manager</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container">
        <div className="row1">
          <div className="col-md-6 b-right padding-3">
            <h3 className="reviews-title">70+ Google Reviews</h3>
            <div className="reviewer-name">Roger D.C.</div>
            <div className="review-star">
              <div className="star-img"></div>
              <div className="star-img"></div>
              <div className="star-img"></div>
              <div className="star-img"></div>
              <div className="star-img"></div>
              <div className="star-value">5.0</div>
            </div>
            <p className="quote">
              “Excellent service provider. Their business telecom systems
              are reliable and their service is cost effective, coupled with
              superb, friendly customer support. Highly recommended!”
            </p>
            <a href="google-reviews.html" className="btn btn-hvr-dark">
              Read more reviews
            </a>
          </div>

          <div className="col-md-6 padding-4">
            <img
              src={pic1}
              alt="phone"
              loading="lazy"
              className="full-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
