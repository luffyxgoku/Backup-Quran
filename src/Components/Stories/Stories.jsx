import React, { useState } from "react";
import { allProphets } from "./DATA/storiesData";
import { useNavigate } from "react-router-dom";
import "./Stories.css";
import search from "../../assets/search.png";
import searchdark from "../../assets/searchdark.png";
import storyimg from "../../assets/prophet-stories.jpg";

import { useTheme } from "../../Context/ThemeContext";

export default function Stories() {
  const { theme } = useTheme();

  const navigation = useNavigate();

  const [input, setInput] = useState("");

  const handleProphetNavigation = (prophetName) => {
    navigation(`/stories/${prophetName}`);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = (allProphets, input) => {
    return allProphets.filter((singleProphet) =>
      singleProphet.name.toLowerCase().includes(input.toLowerCase())
    );
  };

  return (
    <>
      <div className="hadith-animation-banner">
        <img className="load-animation-unique" src={storyimg} alt="img" />
      </div>

      <div className="stories-container">
        <p className="names-main-heading">
          Timeless Stories of the Prophets of Allah
        </p>
        <div className="right-search-container hadith-search-cont">
          <div className="input-container">
            <input
              type="text"
              onChange={handleChange}
              value={input}
              className="search-input"
              placeholder={"Eg. Muhammad"}
            />
            <div className="search-img-container">
              <img
                src={search}
                alt="search"
                className={theme ? "search-img-dark" : "search-img"}
              />
            </div>
          </div>
        </div>
        <div className="prophets-cont">
          {handleSearch(allProphets, input).map((prophet, index) => (
            <div
              key={index}
              className="single-prophet-cont"
              onClick={() => handleProphetNavigation(prophet.name)}
            >
              <p className="prophets-names">{prophet.name}</p>
              <img
                src={prophet.icon}
                alt="prophetimg"
                className="prophets-images"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
