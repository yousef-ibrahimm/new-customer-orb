// AdComponent.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image-container">
        <img
          src={require("../constants/working.png")}
          alt="People working together"
        />
      </div>
      <div className="description-container">
        <div className="title-container">
          <h1>We are Customer Orb</h1>
        </div>
        <div>
          <p>
            We are a group of talented and well-trained ex-Amazon employees.
          </p>
          <p>Dedicated to the utmost level of customer satisfaction!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
