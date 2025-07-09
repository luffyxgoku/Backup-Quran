import React, { useEffect, useState } from "react";
import "./Quran.css";
import { chapters } from "./DATA/ChaptersData";
import { juzs } from "./DATA/JuzData";
import Navbar from "../Navbar/Navbar";
import Chapters from "./Chapters";
import search from "../../assets/search.png";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";

import { useTheme } from "../../Context/ThemeContext";

export default function Quran() {
  const { theme } = useTheme();

  const [isChapterActive, setIsChapterActive] = useState(true);
  const [isJuzActive, setIsJuzActive] = useState(false);
  const [isPageActive, setIsPageActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [audioFileSrc, setAudioFileSrc] = useState("");

  const displayChapters = () => {
    setIsChapterActive(true);
    setIsJuzActive(false);
    setIsPageActive(false);
  };

  const displayJuz = () => {
    setIsJuzActive(true);
    setIsChapterActive(false);
    setIsPageActive(false);
  };
  const displayPage = () => {
    setIsPageActive(true);
    setIsJuzActive(false);
    setIsChapterActive(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const normalizeText = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9\s]/gi, "");
  };

  const filteredData =
    isChapterActive || isPageActive
      ? chapters.filter(
          (chapter) =>
            normalizeText(chapter.name).includes(normalizeText(searchQuery)) ||
            normalizeText(chapter.arabicName).includes(
              normalizeText(searchQuery)
            )
        )
      : juzs.filter(
          (juz) =>
            normalizeText(juz.name).includes(normalizeText(searchQuery)) ||
            normalizeText(juz.arabicName).includes(normalizeText(searchQuery))
        );

  return (
    <>
      <div className="quran-service-container">
        <p className="names-main-heading">
          The Holy Quran The Final Revelation from Allah
        </p>
        <div className="search-container">
          <div className="right-search-container">
            <div className="input-container">
              <input
                type="text"
                onChange={handleSearchChange}
                value={searchQuery}
                className="search-input"
                placeholder={isChapterActive ? "Eg. Al-Fatiha" : "Eg. Sayaqool"}
              />
              <div className="search-img-container">
                <img
                  src={search}
                  alt="search"
                  className={theme ? "search-img-dark" : "search-img"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="quran-nav-container">
          <div
            className={
              isChapterActive
                ? "quran-nav-element"
                : "quran-nav-element-inactive "
            }
            onClick={displayChapters}
          >
            <p className="quran-element">Chapter</p>
          </div>
          <div
            className={
              isJuzActive ? "quran-nav-element" : "quran-nav-element-inactive "
            }
            onClick={displayJuz}
          >
            <p className="quran-element">Juz</p>
          </div>
          <div
            className={
              isPageActive ? "quran-nav-element" : "quran-nav-element-inactive "
            }
            onClick={displayPage}
          >
            <p className="quran-element">Page</p>
          </div>
        </div>
        <div>
          {audioFileSrc && (
            <div className="audio-container">
              <img
                onClick={() => setAudioFileSrc("")}
                src={close}
                alt="close"
                className="close-img"
              />
              <audio
                key={audioFileSrc}
                id="quran-audio"
                className="audio-tag"
                controls
              >
                <source src={audioFileSrc} type="audio/mpeg" />
              </audio>
            </div>
          )}
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <Chapters
                key={item.id}
                id={item.id}
                chapterNo={item.id}
                name={item.name}
                arabicName={item.arabicName}
                verses={item.verses}
                revelation={item.revelation}
                startPage={item.startPage}
                isJuzActive={isJuzActive}
                isPageActive={isPageActive}
                isChapterActive={isChapterActive}
                setAudioFileSrc={setAudioFileSrc}
              />
            ))
          ) : (
            <p className="no-results">No results found.</p>
          )}
        </div>
      </div>
    </>
  );
}
