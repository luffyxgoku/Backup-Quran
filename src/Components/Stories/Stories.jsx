import React, { useState } from "react";
import { allProphets } from "./DATA/storiesData";
import { useNavigate } from "react-router-dom";
import "./Stories.css";
import search from "../../assets/search.png";

import storyimg from "../../assets/prophet-stories.jpg";

export default function Stories() {
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
        {/* <p className="stories-title">Stories of the Prophets of Allah</p> */}
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
              <img src={search} alt="search" className="search-img" />
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
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
