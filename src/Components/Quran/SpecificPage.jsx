import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SpecifPage() {
  const { startPage } = useParams();
  const [currPage, setCurrPage] = useState(+startPage);
  const [verses, setVerses] = useState([]);

  const handleNext = () => {
    setCurrPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    setCurrPage((prev) => prev - 1);
  };

  useEffect(() => {
    const getPageDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.alquran.cloud/v1/page/${currPage}/quran-uthmani`
        );
        setVerses(response.data.data.ayahs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getPageDetails();
  }, [currPage]);

  return (
    <>
      <div className="page-quran-container">
        {verses.map((ayah, index) => (
          <span key={ayah.number} className="page-quran-verse">
            {ayah.text}
            <span className="page-ayah-number">({ayah.numberInSurah})</span>
          </span>
        ))}
      </div>
      <div className="pagination-cont quran-pagination">
        <button
          className="paginate-button"
          onClick={handlePrev}
          disabled={currPage === 1}
        >
          Prev
        </button>
        <label className="current-page-label">{currPage}</label>
        <button
          className="paginate-button"
          onClick={handleNext}
          disabled={currPage === 604}
        >
          Next
        </button>
      </div>
    </>
  );
}
