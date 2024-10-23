import React, { useState } from "react";
import "./cards.css";
import testImg from "../assets/manjot-portfolio.jpg";

function GraphicDesigning() {
  const cardData = [
    {
      title: "Card 1",
      description:
        "manjot dfaaaaafffffffffffffffffffff adffffffffffff aedoooooooooooooo aoeeeeeeeeeeeeeeeeeeeeeeeee gfffffffffwer f ewf ew fewf e g  w g ewr  gwr  gsr gsr g",
      image: testImg,
    },
    {
      title: "Card 2",
      description: "This is the second card.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Card 3",
      description: "This is the third card.",
      image: "https://via.placeholder.com/150",
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
        <h3>{cardData[currentIndex].title}</h3>
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
export default GraphicDesigning;
