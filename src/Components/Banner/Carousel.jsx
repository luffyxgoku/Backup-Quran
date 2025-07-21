import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ({
  imgSrc,
  heading,
  subheading,
  location: bannerPath,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (bannerPath) {
      navigate(bannerPath);
    }
  };

  return (
    <div
      className={location.pathname === "/" ? "carousel" : "zakat-carousel"}
      onClick={handleClick}
    >
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
