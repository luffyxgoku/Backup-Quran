import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import search from "../../assets/search.png";
import Banner from "../Banner/Banner";
import { HadithBannerData } from "../Banner/BannerData";
import searchdark from "../../assets/searchdark.png";

import { useTheme } from "../../Context/ThemeContext";

export default function HadithChapters() {
  const { theme } = useTheme();

  const { hadithBooks } = useParams();
  const [loading, setLoading] = useState(false);
  const [chapters, setChapters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const HADITH_API_KEY = import.meta.env.VITE_HADITH_API_KEY;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchChaptersName = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://hadithapi.com/api/${hadithBooks}/chapters?apiKey=${HADITH_API_KEY}`
        );
        setChapters(response.data.chapters);
      } catch (error) {
        console.log("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchChaptersName();
  }, []);

  const navigateToChapter = (chap, chapterNumber) => {
    navigate(`/hadith/${hadithBooks}/${chap}`, {
      state: { chapterNumber },
    });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <Banner BannerData={HadithBannerData} />
      <div className="all-chap-cont">
        <div className="right-search-container hadith-search-cont">
          <div className="input-container">
            <input
              type="text"
              onChange={handleSearchChange}
              value={searchQuery}
              className="search-input"
              placeholder={" Search by Hadith Number Eg. 123"}
            />
            <div className="search-img-container">
              <img
                src={search}
                alt="search"
                className={theme ? "search-img-dark" : "search-img"}
                onClick={() =>
                  navigate(`/hadith/${hadithBooks}/hadith/${searchQuery}`)
                }
              />
            </div>
          </div>
        </div>
        {loading && <p>loading</p>}
        <div className="chap-cont">
          {chapters
            .filter(
              (chapter) =>
                chapter.chapterEnglish !== "Al-Maharbeen" &&
                chapter.chapterEnglish !==
                  "Call to Prayers (Adhaan) (Sufa-Tu-Salat)"
            )
            .map((chapter, index) => (
              <div
                className="single-chap-cont"
                key={index}
                onClick={() =>
                  navigateToChapter(
                    chapter.chapterEnglish,
                    chapter.chapterNumber
                  )
                }
              >
                <p className="chap-name-title">
                  {chapter.chapterNumber} {chapter.chapterEnglish}
                </p>
              </div>
            ))}
        </div>
      </div>
          
    </>
  );
}
