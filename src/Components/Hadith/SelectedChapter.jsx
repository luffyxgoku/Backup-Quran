import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import ribbon from "../../assets/ribbon.png";
import copy from "../../assets/copy.png";
import { useTheme } from "../../Context/ThemeContext";

export default function SelectedChapter() {
  const { theme } = useTheme();

  const { hadithBooks, chapterName } = useParams();
  const location = useLocation();
  const { chapterNumber } = location.state || {};
  const HADITH_API_KEY = import.meta.env.VITE_HADITH_API_KEY;

  const [chapterData, setChapterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [totalHadiths, setTtotalHadiths] = useState(null);

  const fetchHadiths = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hadithapi.com/public/api/hadiths?apiKey=${HADITH_API_KEY}&book=${hadithBooks}&chapter=${chapterNumber}&page=${page}`
      );
      console.log(response);
      setTotalPages(response.data.hadiths.last_page);
      setChapterData(response.data.hadiths.data);
      setTtotalHadiths(response.data.hadiths.total);
    } catch (error) {
      console.error("Error fetching hadiths:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHadiths();
  }, [page]);

  const handleCopy = (hadith) => {
    const message = `${hadith.book.bookName} - ${hadith.hadithNumber}\n  ${
      hadith.englishNarrator || ""
    } \n\n${hadith.hadithArabic}\n\n${hadith.hadithEnglish} `;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="hadiths-specific-chap-cont">
      <div className="hadith-details-cont">
        <h1 className="hadith-chapterName">
          Chapter {chapterNumber}: {chapterName}
        </h1>
        <p className="hadith-total-hadiths">
          {totalHadiths || "Laoding"} ahadith in this Chapter
        </p>
      </div>
      {loading && <p>Loading</p>}
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
              <img
                src={ribbon}
                alt="ribbon"
                className={theme ? "share-img-dark" : "share-img"}
              />
              <img
                src={copy}
                alt="copy"
                className={theme ? "share-img-dark" : "share-img"}
                onClick={() => handleCopy(hadith)}
              />
            </div>
          </div>
          <h3 className="hadith-narrator">{hadith.englishNarrator}</h3>
          <p className="hadith-arabic">{hadith.hadithArabic}</p>
          <p className="hadith-english">{hadith.hadithEnglish}</p>
        </div>
      ))}
      {!loading && (
        <div className="pagination-cont">
          <button
            className="paginate-button"
            onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
            disabled={page === 1}
          >
            Prev
          </button>
          <label className="current-page-label">{page}</label>
          <button
            className="paginate-button"
            onClick={() =>
              setPage((prev) => (prev < totalPages ? prev + 1 : prev))
            }
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
         
    </div>
  );
}
