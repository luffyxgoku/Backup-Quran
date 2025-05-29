import React, { useState } from "react";
import { SERVICESDATA } from "./ServicesDATA";
import ReuseService from "./ReuseService";
import "./Services.css";

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div className="explore-container">
        <div className="explore-left">
          <h3 className="explore-text">Explore</h3>
          <p className="worship-text">Worship features for you</p>
        </div>
        <div className="explore-right">
          <p className="show-all-text" onClick={toggleShowAll}>
            {showAll ? "Show Less" : "Show All"}
          </p>
        </div>
      </div>
      <div className="card-container">
        {SERVICESDATA.slice(0, showAll ? SERVICESDATA.length : 4).map(
          (data) => (
            <ReuseService
              className="services-card"
              key={data.heading}
              imgSrc={data.imgSrc}
              heading={data.heading}
              subHeading={data.subHeading}
              path={data.path}
            />
          )
        )}
      </div>
    </>
  );
}
