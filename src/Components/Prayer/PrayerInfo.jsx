import React from "react";
import move from "../../assets/move.png";
import { prayerInfo } from "./DATA/PrayerData";
import { useNavigate } from "react-router-dom";

export default function PrayerInfo({ theme }) {
  const navigate = useNavigate();
  return (
    <>
      {prayerInfo.map((prayer) => (
        <div
          key={prayer.prayerInfoText}
          className="prayer-info"
          onClick={() => navigate(`/prayer/${prayer.prayerInfoText}`)}
        >
          <div className="left-info-container">
            <img
              src={prayer.prayerInfoIcon}
              alt="icon"
              className={theme ? "prayer-info-icon-dark" : "prayer-info-icon"}
            />
            <p className="prayer-info-text">{prayer.prayerInfoText}</p>
          </div>
          <img
            src={move}
            alt=""
            className={theme ? "move-icon-dark" : "move-icon"}
          />
        </div>
      ))}
    </>
  );
}
