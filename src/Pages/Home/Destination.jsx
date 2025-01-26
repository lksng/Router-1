import React from "react";
// import "./Destinations.css";

const destinations = [
  { name: "Paris", description: "The city of lights and romance", image: "paris.jpg" },
  { name: "Tokyo", description: "The vibrant city of technology and culture", image: "tokyo.jpg" },
  { name: "New York", description: "The city that never sleeps", image: "newyork.jpg" },
  { name: "New York", description: "The city that never sleeps", image: "newyork.jpg" }, { name: "New York", description: "The city that never sleeps", image: "newyork.jpg" }, { name: "New York", description: "The city that never sleeps", image: "newyork.jpg" }, { name: "New York", description: "The city that never sleeps", image: "newyork.jpg" }, { name: "New York", description: "The city that never sleeps", image: "newyork.jpg" }, { name: "New York", description: "The city that never sleeps", image: "newyork.jpg" },
];

const Destinations = () => {
  return (
    <div className="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination-cards">
        {destinations.map((destination, index) => (
          <div className="card" key={index}>
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
