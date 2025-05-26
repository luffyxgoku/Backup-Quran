import React from "react";
import bismillah from "../../../../assets/bismillah.png";

import { kalimas } from "./Data";

export default function AllKalimas() {
  return (
    <div className="kalimas">
      <div className="bismillah-container">
        <img src={bismillah} alt="bismillah" className="bismillah" />
      </div>
      {kalimas.map((kalima, index) => (
        <div key={index} className="single-kalima-container">
          <div className="kalima-name-container">
            <p className="kalima-name">{kalima.name}</p>
          </div>
          <p className="kalima-arabic">{kalima.arabic}</p>
          <p className="kalima-translit">{kalima.transliteration}</p>
          <p className="kalima-translation">{kalima.translation}</p>
        </div>
      ))}
    </div>
  );
}
