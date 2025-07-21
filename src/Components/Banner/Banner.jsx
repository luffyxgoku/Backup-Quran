import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "./Carousel";
import "./Banner.css";

export default function Banner({ BannerData }) {
  const [currIndex, setCurrIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prev) => (prev + 1) % BannerData.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const currentBanner = BannerData[currIndex];

  return (
    <>
      {location.pathname === "/" && (
        <h1 className="banner-events-text">Events</h1>
      )}
      <div className="banner-slider-container">
        <Carousel
          imgSrc={BannerData[currIndex].imgSrc}
          heading={BannerData[currIndex].heading}
          subheading={BannerData[currIndex].subheading}
          location={currentBanner.location}
        />
      </div>
    </>
  );
}
