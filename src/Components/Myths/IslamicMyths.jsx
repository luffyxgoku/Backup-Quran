import React, { useState } from "react";
import move from "../../assets/move.png";
import { useTheme } from "../../Context/ThemeContext";

export default function IslamicMyths({ mythIcon, list }) {
  const { theme } = useTheme();

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleReality = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="myths-whole-container">
      {list.map((myth, index) => (
        <div key={index}>
          <div
            className="myth-container"
            onClick={() => toggleReality(index)}
            style={{ cursor: "pointer" }}
          >
            <div className="myth-container-left">
              <img src={mythIcon} alt="icon" className="myth-icon" />
              <p className="myth-title">{myth.myth}</p>
            </div>

            <img
              src={move}
              alt="icon"
              className={`${
                activeIndex === index ? "side-icon" : "below-icon"
              } ${theme ? "icon-dark" : "icon-light"} `}
            />
          </div>

          {activeIndex === index && (
            <p className="myth-reality">{myth.reality}</p>
          )}
        </div>
      ))}
    </div>
  );
}
