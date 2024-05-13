import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="ad-container" id="home">
      <div className="text-container">
        <div class="logo-container">
          <img
            src={require("../constants/logoWriting.PNG")}
            alt="Logo"
            className="logo"
          />
        </div>
        <h1>We Revolve Around Our Customers</h1>
        <p>
          Our mission is to support global companies in outsourcing their
          business processes by delivering exceptional performance, dedication,
          and reliability.
        </p>
        <button>FIND OUT HOW</button>
      </div>
      <div className="image-container">
        <img
          src={require("../constants/highFive.png")}
          alt="People high-fiving"
        />
      </div>
    </div>
  );
};

export default Home;
