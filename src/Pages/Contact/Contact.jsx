import React from "react";
// import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-icons">
        <p><i className="fas fa-phone"></i> 8119984614</p>
        <p><i className="fas fa-envelope"></i> lksdan22@gmail.com</p>
        <p><i className="fas fa-map-marker-alt"></i> 123 Adventure St, Dream City</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Your Phone Number" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
