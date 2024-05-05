import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="ad-container">
      <div className="text-container">
        <img
          src={require("../constants/logoWriting.PNG")}
          alt="Logo"
          className="logo"
        />
        <h1>Driven to deliver your brand's message</h1>
        <p>
          Tully and Drive helps build trust in your business by working with
          stakeholders to share compelling stories.
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
