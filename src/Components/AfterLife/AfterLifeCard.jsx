import React from "react";
import { useNavigate } from "react-router-dom";

export default function AfterLifeCard({
  imgSrc,
  title,
  description,
  location,
}) {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(`/afterlife/${path}`);
  };
  return (
    <div className="afterlife-card" onClick={() => handleNavigation(location)}>
      <div className="left-afterlife-container">
        <h1 className="afterlife-title">{title}</h1>
        <p className="afterlife-description">{description}</p>
      </div>
      <img src={imgSrc} alt="afterlife" className="afterlife-img-right" />
    </div>
  );
}
