import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { historyItems } from "./DATA/HistoryData";

export default function SingleHistory() {
  const { name } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);

  const singleHistory = historyItems.find((h) => h.name === name);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="hadith-animation-banner">
        <img
          className="load-animation-unique"
          src={singleHistory.banner}
          alt="img"
        />
      </div>

      <div className="singlehistory-cont">
        <p className="singlehistory-heading">{singleHistory.heading}</p>
        <p className="singlehistory-desc">{singleHistory.desc}</p>

        <div className="prophetstories-content-cont">
          {singleHistory.items.map((item, index) => (
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
