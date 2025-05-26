import React from "react";
import { funeralPrayerDuas as prayer } from "./Data";
import Banner from "../../../Banner/Banner";
import { FuneralBannerData } from "../../../Banner/BannerData";
import bismillah from "../../../../assets/bismillah.png";

export default function FuneralPrayer() {
  return (
    <>
      <Banner BannerData={FuneralBannerData} />
      <div className="bismillah-container">
        <img src={bismillah} alt="bismillah" className="bismillah" />
      </div>
      <div className="kalimas">
        {prayer.map((prayer, index) => (
          <div key={index} className="single-kalima-container">
            <div className="kalima-name-container">
              <p className="kalima-name">{prayer.name}</p>
            </div>
            <p className="kalima-arabic">{prayer.arabic}</p>
            <p className="kalima-translit">{prayer.transliteration}</p>
            <p className="kalima-translation">{prayer.translation}</p>
          </div>
        ))}
      </div>
    </>
  );
}
