import React from "react";
import "./Dhikr.css";
import { dhikrInfo } from "./DATA/DhikrData";
import WideImages from "./WideImages";
import dhikrimg from "../../assets/dhikr-img.jpg";

export default function Dhikr() {
  return (
    <div className="main-dhikr">
      <div className="hadith-animation-banner">
        <img className="load-animation-unique" src={dhikrimg} alt="img" />
      </div>
      {/* <p className="dhikr-description">
        Verily, in the remembrance of Allah do hearts find rest [13:28]
      </p> */}
      <p className="names-main-heading">
        In the Remembrance of Allah, Hearts Find Peace [13:28]
      </p>

      <WideImages wideImages={dhikrInfo} />
    </div>
  );
}
