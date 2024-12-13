import React, { useState } from "react";
import { SlArrowRightCircle } from "react-icons/sl";

const Card = ({ title, image, onHover, isActive }) => {
  return (
    <div
      className={`relative flex justify-center items-center rounded-lg overflow-hidden transition-all duration-500 ${
        isActive ? "flex-[2]" : "flex-1"
      } h-full hover:z-10`}
      onMouseEnter={onHover}
    >
      <img
        src={image}
        alt={title}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-50"
        }`}
      />
      <div className="absolute top-4 left-4 z-20">
        <h3 className="text-white text-lg font-bold">{title}</h3>
      </div>
      <div className="absolute top-4 right-4 z-20">
        <SlArrowRightCircle size={24} style={{ color: 'white', fontWeight: 'bold' }} />
      </div>
    </div>
  );
};

const App = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    { id: 1, title: "Nature", image: "/nature.jpg" },
    { id: 2, title: "Technology", image: "/technology.jpg" },
    { id: 3, title: "Abstract", image: "/Abstract.jpg" },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="flex rounded-3xl overflow-hidden w-[90%] max-w-5xl h-96 bg-gray-800">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            title={card.title}
            image={card.image}
            isActive={activeCard === card.id}
            onHover={() => setActiveCard(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
