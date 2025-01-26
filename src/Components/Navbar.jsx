// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// // import "./Navbar.css"; // Import the CSS file

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       {/* Logo Section */}
//       <div className="logo"><img src="src/Components/Studio-Project.png"></img></div>

//       {/* Navigation Links */}
//       <ul className="nav-links">
//         <li>
//           <Link to="/" className="nav-link">
//             Home
//           </Link>
//         </li>
//         <li>
//           <button>hello</button>
//           <Link to="/about" className="nav-link">
//             About
//           </Link>
//         </li>
//         <li>
//           <Link to="/services" className="nav-link">
//             Services
//           </Link>
//         </li>
//         <li>
//           <Link to="/gallery" className="nav-link">
//             Gallery
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="nav-link">
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <img
          src="src/Components/Studio-Project.png" // Replace with the path to your logo
          alt="TravelGuide Logo"
          className="logo"
        />
        <span className="logo-text"></span>
      </div>

      {/* Navigation Links */}
      <div className="nav-buttons">
      <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <Link to="/important-links" className="nav-link">
          Important Links
        </Link>
        <Link to="/our-merges" className="nav-link">
          Our Merges
        </Link>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;


