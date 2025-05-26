import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { sunnahItems } from "./DATA/SunnahData";

export default function SingleSunnah() {
  const { name } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);

  const singleSunnah = sunnahItems.find((s) => s.name === name);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="hadith-animation-banner">
        <img
          className="load-animation-unique"
          src={singleSunnah.banner}
          alt="img"
        />
      </div>

      <div className="singlehistory-cont">
        <p className="singlehistory-heading">{singleSunnah.heading}</p>
        <p className="singlehistory-desc">{singleSunnah.desc}</p>

        <div className="prophetstories-content-cont">
          {singleSunnah.items.map((item, index) => (
            <div key={index} className="history-item-wrapper">
              <div
                className="prophet-story-list"
                onClick={() => handleClick(index)}
              >
                <p className="story-title">{item.name}</p>
              </div>
              {activeIndex === index && (
                <p className="prophetstories-text">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
