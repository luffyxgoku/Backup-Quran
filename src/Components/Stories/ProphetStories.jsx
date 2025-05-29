import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allProphets, totalProphets } from "./DATA/storiesData";

export default function ProphetStories() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { prophetName } = useParams();

  const prophet = allProphets.find((p) => p.name === prophetName);
  const perticularProphet = totalProphets.find((p) => p.name === prophetName);

  const handleStoryClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="parent-prophet-cont">
      <div className="prophetstories-cont">
        <div className="prophetstories-banner-container">
          <img
            src={prophet.img}
            alt="image"
            className="prophetstories-img"
            loading="lazy"
          />
        </div>
        <p className="prophetstories-title">Story of Prophet {prophet.name}</p>
      </div>

      <div className="prophetstories-content-cont">
        {perticularProphet.storyList.map((title, index) => (
          <div key={index}>
            <div
              className="prophet-story-list"
              onClick={() => handleStoryClick(index)}
            >
              <p className="story-title">{title}</p>
            </div>
            {activeIndex === index && (
              <p className="prophetstories-text">
                {perticularProphet[`story${index + 1}`]
                  .split("\n")
                  .map((line, idx) => {
                    if (line.trim().startsWith("*Reference:*")) {
                      return (
                        <p key={idx} className="prophet-reference-text">
                          {line.replace("*Reference:*", "Reference:")}
                        </p>
                      );
                    }
                    return <p key={idx}>{line}</p>;
                  })}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
