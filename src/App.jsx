import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from"./Components/Footer.jsx"
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Services from "./Pages/Services/Services.jsx";
import Gallery from "./Pages/Gallery/Gallery.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
