import React, { useState } from "react";
import "./cards.css";
import Halloween from "../assets/Halloween.jpg";
import WavesOfFood from "../assets/WavesOfFood.jpg";
import WhatsAppClone from "../assets/whatsAppClone.jpg";
import DayCare from "../assets/Cover.png"

function Projects() {
  const cardData = [
    {
      title: "Halloween Horror Movie Search App 🎃👻",
      description:
        "A spooky web app built with React.js and the IMDb API that allows users to search for horror movies and series. Featuring Halloween-themed visuals, users can explore movie titles, ratings, and posters in an eerie interface. The app offers smooth navigation with responsive design and interactive controls.Tech Stack: React.js, CSS, IMDb API.",
      image: Halloween,
    },
    {
      title: "Waves of Food - Food Ordering App 🍔📱",
      description: "An Android-based food ordering app developed using Kotlin, offering a seamless user experience for browsing menus, placing orders, and managing cart and order history. The app includes both user and admin panels, allowing restaurants to manage items and customers to enjoy an intuitive interface with real-time updates and responsive design.Tech Stack: Kotlin, XML, Firebase (for database and authentication).",
      image: WavesOfFood,
    },
    {
      title: "WhatsApp Clone - Messaging App 💬📲",
      description: "A feature-rich Android messaging app built as a WhatsApp clone using Firebase for real-time messaging, user authentication, and media storage. Users can send texts, share media, update their profile, and enjoy a sleek UI similar to WhatsApp. The app also includes options for message deletion, profile customization, and secure authentication.Tech Stack: Java, Firebase, XML.",
      image: WhatsAppClone,
    },
    {
      title: "Bright Mind's Day Home",
      description: "I designed and developed a custom, responsive website for Bright Minds Dayhome, focusing on user-friendly navigation and mobile optimization. The site reflects the daycare's mission to provide a safe, nurturing environment for children. Key features include interactive sections, clear CTAs, and smooth, engaging design across devices.Tech Stack: JavaScript, HTML, CSS",
      image: DayCare,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  return (
    <div className="carousel">
      <div className="card">
        <img
          src={cardData[currentIndex].image}
          alt={cardData[currentIndex].title}
          className="card-image"
        />
        <b><h3 onClick={() => window.open("https://github.com/ManjotSingh4241", "_blank")} style={{ cursor: "pointer", color:"black" }}>{cardData[currentIndex].title}</h3></b>
        <p>{cardData[currentIndex].description}</p>
      </div>
      <div className="buttons">
        <button onClick={handlePrevious} className="nav-button">
          Previous
        </button>
        <button onClick={handleNext} className="nav-button">
          Next
        </button>
      </div>
    </div>
  );
}
export default Projects;
