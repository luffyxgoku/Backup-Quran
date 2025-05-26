import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ribbon from "../../assets/bookmark.png";
import copy from "../../assets/copy.png";

export default function SingleHadith() {
  const { hadithBooks, hadithNumber } = useParams();
  const [loading, setLoading] = useState(false);
  const [chapterData, setChapterData] = useState([]);
  const HADITH_API_KEY = import.meta.env.VITE_HADITH_API_KEY;

  useEffect(() => {
    const fetchChaptersName = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://hadithapi.com/public/api/hadiths?apiKey=${HADITH_API_KEY}&hadithNumber=${hadithNumber}&book=${hadithBooks}`
        );
        setChapterData(response.data.hadiths.data);
      } catch (error) {
        console.log("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchChaptersName();
  }, []);

  const handleCopy = (hadith) => {
    const message = `${hadith.book.bookName} - ${hadith.hadithNumber}\n  ${
      hadith.englishNarrator || ""
    } \n\n${hadith.hadithArabic}\n\n${hadith.hadithEnglish} `;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="single-searched-hadith">
      {chapterData.map((hadith, index) => (
        <div key={index} className="single-hadith-container">
          <div className="hadith-details-ref-cont">
            <div className="hadith-ref">
              <h4 className="hadith-bookname">
                {hadith.book.bookName}-{hadith.hadithNumber}
              </h4>
              <p className="hadith-status">{hadith.status} Hadith</p>
            </div>
            <div className="hadith-ref-img-cont">
              <img src={ribbon} alt="ribbon" className="ref-icon" />
              <img
                src={copy}
                alt="copy"
                className="ref-icon"
                onClick={() => handleCopy(hadith)}
              />
            </div>
          </div>
          <h3 className="hadith-narrator">{hadith.englishNarrator}</h3>
          <p className="hadith-arabic">{hadith.hadithArabic}</p>
          <p className="hadith-english">{hadith.hadithEnglish}</p>
        </div>
      ))}
    </div>
  );
}
