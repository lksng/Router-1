import React from "react";
// import "./Gallery.css";

const Gallery = () => {
  const galleryItems = [
    {
      title: "Paris, France",
      description: "The City of Light offers iconic landmarks like the Eiffel Tower and the Louvre Museum.",
      imageUrl: "https://via.placeholder.com/300x200?text=Paris",
    },
    {
      title: "Maldives",
      description: "Experience serene beaches and luxurious overwater bungalows in the Maldives.",
      imageUrl: "https://via.placeholder.com/300x200?text=Maldives",
    },
    {
      title: "Tokyo, Japan",
      description: "A vibrant blend of tradition and modernity awaits in Tokyo.",
      imageUrl: "https://via.placeholder.com/300x200?text=Tokyo",
    },
    {
      title: "Santorini, Greece",
      description: "Famous for white-washed buildings and breathtaking sunsets.",
      imageUrl: "https://via.placeholder.com/300x200?text=Santorini",
    },
    {
      title: "New York, USA",
      description: "Explore the bustling streets and landmarks like Times Square and Central Park.",
      imageUrl: "https://via.placeholder.com/300x200?text=New+York",
    },
    {
      title: "Great Barrier Reef, Australia",
      description: "Dive into the world's largest coral reef system.",
      imageUrl: "https://via.placeholder.com/300x200?text=Great+Barrier+Reef",
    },
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.imageUrl} alt={item.title} className="gallery-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="read-more-button">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
