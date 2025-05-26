import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { DhikrData } from "./DATA/DhikrData";
import move from "../../assets/move.png";

export default function DhikrTime() {
  const [show, setShow] = useState([]);
  const { time } = useParams();

  const handleToggle = (index, type) => {
    setShow((prev) => {
      const newShow = [...prev];
      newShow[index] = {
        ...newShow[index],
        [type]: !newShow[index]?.[type],
      };
      return newShow;
    });
  };

  return (
    <div className="dhikrtime-container">
      <p className="dhikrtime-title">{time} dhikr</p>
      {DhikrData[time]?.map((dhikr, index) => {
        const toggle = show[index] || {};

        return (
          <div className="dhikrtime-single-container" key={index}>
            <p className="dhikrtime-arabic">{dhikr.arabic}</p>
            <p className="dhikrtime-reference times"> ({dhikr.times}X)</p>
            <div
              className="translation-container-dhikr"
              onClick={() => handleToggle(index, "transliteration")}
            >
              <img
                src={move}
                className={`dhikr-open-icon ${
                  toggle.transliteration ? "rotate" : ""
                }`}
                alt="dhikr-icon"
              />
              <p className="dhikrtime-title-heading">Transliteration</p>
            </div>
            {toggle.transliteration && (
              <p className="dhikrtime-transliteration">
                {dhikr.transliteration}
              </p>
            )}

            <div
              className="translation-container-dhikr"
              onClick={() => handleToggle(index, "translation")}
            >
              <img
                src={move}
                className={`dhikr-open-icon ${
                  toggle.translation ? "rotate" : ""
                }`}
                alt="dhikr-icon"
              />
              <p className="dhikrtime-title-heading">Translation</p>
            </div>
            {toggle.translation && (
              <p className="dhikrtime-translation">{dhikr.translation}</p>
            )}

            <div
              className="translation-container-dhikr"
              onClick={() => handleToggle(index, "virtue")}
            >
              <img
                src={move}
                className={`dhikr-open-icon ${toggle.virtue ? "rotate" : ""}`}
                alt="dhikr-icon"
              />
              <p className="dhikrtime-title-heading">Virtue</p>
            </div>
            {toggle.virtue && (
              <p className="dhikrtime-virtue">{dhikr.virtue}</p>
            )}

            <p className="dhikrtime-reference">{dhikr.reference}</p>
          </div>
        );
      })}
    </div>
  );
}
