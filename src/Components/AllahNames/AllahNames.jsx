import React from "react";
import banner from "../../assets/bannerNames.jpg";
import bismillah from "../../assets/bismillah.png";

import { Names } from "./DATA/Data";
import "./AllahNames.css";
import { useTheme } from "../../Context/ThemeContext";

export default function AllahNames() {
  const { theme } = useTheme();

  return (
    <>
      <div className="hadith-animation-banner">
        <img
          className="load-animation-unique"
          src={banner}
          alt="img"
          loading="lazy"
        />
      </div>
      <p className="names-main-heading">
        Discover the 99 Names of Allah ﷻ and Their Divine Attributes
      </p>
      <div className="bismillah-container-new">
        <img
          src={bismillah}
          alt="bismillah"
          className={theme ? "bismillah-dark" : "bismillah"}
        />
      </div>
      <div className="names-cont">
        {Names.map((n, index) => (
          <div key={index} className="single-name-cont">
            <p className="name-arabic">{n.arabicName}</p>
            <p className="name-english">{n.englishName} </p>
            <p className="name-meaning">{n.englishMeaning}</p>
            <p className="name-number"> {index + 1}</p>
          </div>
        ))}
      </div>
    </>
  );
}
