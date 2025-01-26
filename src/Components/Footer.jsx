import React from "react";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Logo Section */}
      <div className="footer-logo">
        Tour<span>Guide</span>
      </div>

      {/* Navigation Links */}
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
      </div>

      {/* Social Media Links */}
      <div className="footer-social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          href="mailto:info@tourguide.com"
          className="social-icon email"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>

      {/* Copyright Section */}
      <p>&copy; 2025 TourGuide. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
