import React, { useState } from "react";
import { Surah } from "./DATA/Data";
import "./PopSurah.css";
import axios from "axios";
import banner from "../../assets/popsurah-banner.jpg";

export default function PopSurah() {
  const [surah, setSurah] = useState([]);
  const [surahId, setSurahId] = useState(null);

  const handleClickOnSpecificSurah = async (id) => {
    if (surahId === id) {
      setSurahId(null);
      setSurah([]);
      return;
    }
    setSurahId(id);
    try {
      const response = await axios.get(
        `https://api.alquran.cloud/v1/surah/${id}`
      );
      const data = response.data.data.ayahs;
      setSurah(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="hadith-animation-banner">
        <img
          loading="lazy"
          className="load-animation-unique"
          src={banner}
          alt="img"
        />
      </div>

      <p className="imam-main-heading">Most-Read Surahs </p>
      <div className="ps-c">
        {Surah.map((surahName) => (
          <div key={surahName.id} className="ps-single-c">
            <div
              onClick={() => handleClickOnSpecificSurah(surahName.id)}
              className="ps-surahName"
            >
              <div className="ps-name-ayah-c">
                <p className="ps-name">{surahName.name} </p>
                <p className="ps-ayahs">({surahName.numberAyahs} Verses)</p>
              </div>

              <p className="ps-fazilat">Virtues - {surahName.fazilat}</p>
              <p className="ps-ref">Reference - {surahName.reference}</p>
            </div>
            {surahId === surahName.id && (
              <div>
                {surah.map((surah) => (
                  <div key={surah.number} className="single-surah">
                    <p className="ps-eachayah">{surah.numberInSurah}</p>
                    <p className="ps-textarab">{surah.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
