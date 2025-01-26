import React from "react";
// import "./../styles/Services.css";

const Services = () => {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="service-list">
        <div className="service-card">
          <h3>Travel Packages</h3>
          <p>Explore tailored travel packages that suit every budget and preference.</p>
        </div>
        <div className="service-card">
          <h3>Guided Tours</h3>
          <p>Get insights and stories about destinations with our expert-guided tours.</p>
        </div>
        <div className="service-card">
          <h3>Hotel Bookings</h3>
          <p>Book comfortable accommodations at top-rated hotels worldwide.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
