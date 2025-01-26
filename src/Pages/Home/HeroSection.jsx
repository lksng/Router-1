import React from "react";
// import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <video src="src/Components/twgmonastry.mp4" autoPlay loop muted className="hero-video" />
      <div className="hero-text">
        <h1>Explore the World with TourGuide</h1>
        <p>Your ultimate travel companion</p>
        <button className="cta-button">Explore Destinations</button>
      </div>
    </div>
  );
};

export default HeroSection;
