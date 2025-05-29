import React from "react";
import { jumuahData as prayer } from "./Data";
import Banner from "../../../Banner/Banner";
import { JumuahBannerData } from "../../../Banner/BannerData";
import bismillah from "../../../../assets/bismillah.png";

export default function Jumuah() {
  return (
    <>
      <Banner BannerData={JumuahBannerData} />
      <div className="bismillah-container">
        <img src={bismillah} alt="bismillah" className="bismillah" />
      </div>
      <div className="kalimas">
        {prayer.map((item, index) => (
          <div key={index} className="single-kalima-container">
            <div className="kalima-name-container">
              <p className="kalima-name">{item.name}</p>
            </div>
            <p className="kalima-arabic">{item.arabic}</p>
            <p className="kalima-translit">{item.transliteration}</p>
            <p className="kalima-translation">{item.translation}</p>
          </div>
        ))}
      </div>
    </>
  );
}
