import React from "react";
import { useLocation } from "react-router-dom";

export default function ({ imgSrc, heading, subheading }) {
  const location = useLocation();
  return (
    <div className={location.pathname === "/" ? "carousel" : "zakat-carousel"}>
      <div className="carousel-left">
        <h1 className="banner-heading">{heading}</h1>
        <p className="banner-subheading">{subheading}</p>
      </div>
      <div className="carousel-right">
        <img src={imgSrc} alt={imgSrc} className="banner-img" />
      </div>
    </div>
  );
}
