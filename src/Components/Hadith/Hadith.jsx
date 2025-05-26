import React from "react";
import HadithBooks from "./HadithBooks";
import hadithimg from "../../assets/hadith-img.jpg";
import "./Hadith.css";

export default function Hadith() {
  return (
    <div>
      <div className="hadith-animation-banner">
        <img className="load-animation-unique" src={hadithimg} alt="img" />
      </div>
      <p className="names-main-heading">
        Explore the Core Teachings: The Six Major Books of Hadith
      </p>

      <HadithBooks />
    </div>
  );
}
