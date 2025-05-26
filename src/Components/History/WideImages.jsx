import React from "react";
import { useNavigate } from "react-router-dom";

export default function WideImages({ historyItems }) {
  const navigate = useNavigate();

  const handleClickOnHistoryItem = (name) => {
    navigate(`${name}`);
  };

  return (
    <div className="dhikr-container">
      {historyItems.map((item, index) => (
        <div
          key={index}
          className="wide-images-container"
          onClick={() => handleClickOnHistoryItem(item.name)}
        >
          <img src={item.img} alt="img" className="dhikr-images" />
          <p className="image-name">{item.heading}</p>
        </div>
      ))}
    </div>
  );
}
