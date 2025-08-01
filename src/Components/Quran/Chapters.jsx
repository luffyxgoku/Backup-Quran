import React, { useEffect, useState } from "react";
import stop from "../../assets/stop.png";
import { useNavigate } from "react-router-dom";
import play from "../../assets/play.png";
import axios from "axios";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animation.json";

import { useTheme } from "../../Context/ThemeContext";

export default function Chapters({
  name,
  id,
  arabicName,
  revelation,
  verses,
  isJuzActive,
  isPageActive,
  startPage,
  isChapterActive,
  setAudioFileSrc,
}) {
  const { theme } = useTheme();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleChapterNavigation = () => {
    const newChapterName = name;
    isPageActive
      ? navigate(`/quran/${newChapterName}/${id}/${startPage}`)
      : navigate(`/quran/${newChapterName}/${id}`);
  };

  const getChapterAudio = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.quran.com/api/v4/chapter_recitations/7/${id}`
      );
      console.log(response.data.audio_file);
      setAudioFileSrc(response.data.audio_file.audio_url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="chapter-container">
        <div
          className="chapter-left-container"
          onClick={handleChapterNavigation}
        >
          <div className="chaper-no-container">
            <p className="chapter-no">{id}</p>
            <img src={stop} alt="stop" className="stop-img" />
          </div>
          <div className="chaper-details-container">
            <p className="chapter-name">{name}</p>
            <p className="chapter-verse-revelation">
              {verses} {!isJuzActive && "Verses"} | {revelation}
            </p>
          </div>
        </div>
        <div className="chapter-right-container">
          <p className="chapter-arabic-name">{arabicName}</p>
          {isChapterActive && (
            <div className="play-button-container" onClick={getChapterAudio}>
              {loading ? (
                <Lottie
                  className="load-animation"
                  animationData={loadingAnimation}
                />
              ) : (
                <img
                  src={play}
                  alt="Play"
                  className={theme ? "play-button-dark" : "play-button"}
                />
              )}
            </div>
          )}
          {isPageActive && (
            <p className="chapter-start-page">Page: {startPage}</p>
          )}
        </div>
      </div>
    </>
  );
}
