import React from "react";
import { pillersData } from "./DATA/Data";
import { useNavigate } from "react-router-dom";

export default function Pillers() {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(`/pillers/${path}`);
  };

  return (
    <div className="pillers-container">
      {pillersData.map((piller) => (
        <div
          className="piller-contents"
          key={piller.title}
          onClick={() => handleNavigation(piller.location)}
        >
          <img
            src={piller.imgSrc}
            alt={piller.title}
            className="piller-icon"
            loading="lazy"
          />
          <p className="piller-title">{piller.title}</p>
        </div>
      ))}
    </div>
  );
}
