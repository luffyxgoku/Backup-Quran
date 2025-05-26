import React from "react";
import { useNavigate } from "react-router-dom";

export default function WideImages({ wideImages }) {
  const navigate = useNavigate();

  const handleNavigation = (time) => {
    navigate(`/dhikr/${time}`);
  };
  return (
    <div className="dhikr-container">
      {wideImages.map((image) => (
        <div
          className="wide-images-container"
          key={image.name}
          onClick={() => handleNavigation(image.name)}
        >
          <img src={image.source} alt={image.name} className="dhikr-images" />
          <p className="image-name">{image.name}</p>
        </div>
      ))}
    </div>
  );
}
