import React, { useContext } from "react";
import prayerimg from "../../assets/prayerimg.jpg";
import "./Prayer.css";
import PrayerInfo from "./PrayerInfo";
import { useTheme } from "../../Context/ThemeContext";

export default function Prayer() {
  const { theme } = useTheme();

  return (
    <>
      <div className="hadith-animation-banner">
        <img className="load-animation-unique" src={prayerimg} alt="img" />
      </div>
      <div className="prayer-container">
        <p className="prayer-visual-text">The Salah Series</p>
        <div className="prayer-visual-container"></div>
        <div className="prayer-info-container">
          <PrayerInfo theme={theme} />
        </div>
      </div>
    </>
  );
}
