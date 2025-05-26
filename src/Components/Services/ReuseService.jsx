import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReuseService({ imgSrc, heading, subHeading, path }) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/${path}`);
  };
  return (
    <div className="reuse-container" onClick={handleNavigation}>
      <div className="reuse-left">
        <h3 className="reuse-main-text">{heading}</h3>
        <p className="reuse-sub-text">{subHeading}</p>
      </div>
      <div className="reuse-right">
        <img src={imgSrc} className="reuse-img" alt={imgSrc} />
      </div>
    </div>
  );
}
