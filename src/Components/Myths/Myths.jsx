import React, { useState } from "react";
import "./Myths.css";
import IslamicMyths from "./IslamicMyths";
import wrong from "../../assets/wrong.png";
import tv from "../../assets/tv.png";
import { mediaIslam, mythList } from "./DATA/MythsData";
import mythimg from "../../assets/myths-img.jpg";

export default function Myths() {
  return (
    <div className="myth-component">
      <div className="hadith-animation-banner">
        <img className="load-animation-unique" src={mythimg} alt="img" />
      </div>
      <p className="imam-main-heading">
        Dispelling Misconceptions: Uncovering the Truth Behind Common Myths
      </p>
      <p className="myths-texts-description">
        Some common misconceptions about Islam
      </p>
      <IslamicMyths mythIcon={wrong} list={mythList} />
      <p className="myths-texts-description">How media shows Islam</p>
      <IslamicMyths mythIcon={tv} list={mediaIslam} />
    </div>
  );
}
