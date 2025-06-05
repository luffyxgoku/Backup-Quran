import React, { useState } from "react";
import { duasList, generalDuaList } from "./DATA/DuaList";
import Navbar from "../Navbar/Navbar";
import dua from "../../assets/dua.png";
import "./Dua.css";
import duaimg from "../../assets/dua-img.jpg";

export default function Dua() {
  const [selectedOption, setSelectedOption] = useState("General");
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedGeneralDua, setSelectedGeneralDua] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="hadith-animation-banner">
        <img className="load-animation-unique" src={duaimg} alt="img" />
      </div>
      <div className="dua-container">
        <p className="names-main-heading">
          Find Tranquility Through Heartfelt Duas
        </p>

        <div className="subheading-dua-container">
          <p className="subheading-dua-text">Choose Your Mood & Recite a Dua</p>{" "}
          <img src={dua} alt="dua" className="dua-icon" />
        </div>
        <div className="dropdown-container">
          <select
            className="mood-need-dropdown"
            value={selectedOption}
            onChange={handleChange}
          >
            <option className="select-options" value="General">
              General
            </option>
            <option className="select-options" value="Your Mood">
              Your Mood
            </option>
          </select>
        </div>

        {selectedOption === "Your Mood" && (
          <div className="button-container">
            {duasList.map((item) => (
              <button
                className={
                  selectedMood?.mood === item.mood
                    ? "mood-button-active"
                    : "mood-button"
                }
                key={item.mood}
                onClick={() => setSelectedMood(item)}
              >
                {item.mood}
              </button>
            ))}
          </div>
        )}

        {selectedMood && selectedOption === "Your Mood" && (
          <div className="whole-mood-container">
            <h2 className="dua-header-text">
              Duas for {selectedMood.mood} you!
            </h2>
            {selectedMood.duas.map((dua, index) => (
              <div key={index} className="moodial-dua-contianer">
                <p className="main-dua-text">{dua.text}</p>
                <p className="dua-transliteration">{dua.transliteration}</p>
                <p className="dua-translation">{dua.translation}</p>
                <p className="dua-reference-text-unique">{dua.reference}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedOption === "General" && (
        <div className="general-duas-container">
          {generalDuaList.map((dua) => (
            <div key={dua.title} className="general-dua-block">
              <div
                className="dua-title-heading"
                onClick={() =>
                  setSelectedGeneralDua(
                    selectedGeneralDua === dua.title ? null : dua.title
                  )
                }
              >
                <p className="dua-title-heading-text">{dua.title}</p>
              </div>

              {selectedGeneralDua === dua.title && (
                <div className="general-dua-content">
                  <p className="main-dua-text">{dua.arabicText}</p>
                  <p className="dua-transliteration">{dua.transliteration}</p>
                  <p className="dua-translation">{dua.translation}</p>
                  <p className="dua-reference-text-unique">{dua.reference}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <Navbar />
    </>
  );
}
