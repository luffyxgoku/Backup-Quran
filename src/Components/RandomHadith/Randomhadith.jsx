import React, { useEffect, useState } from "react";
import "./RandomHadith.css";
import axios from "axios";

export default function Randomhadith() {
  const [hadith, setHadith] = useState([]);
  const [loading, setLoading] = useState(true);
  const [readMore, setReadMore] = useState(false);
  const HADITH_API_KEY = import.meta.env.VITE_HADITH_API_KEY;

  const handleReadMoreClick = () => {
    setReadMore((prev) => !prev);
  };

  const randomNumber = Math.floor(Math.random() * 7563) + 1;
  const hadithBook = ["sahih-bukhari", "sahih-muslim"];
  const randomBook = hadithBook[Math.floor(Math.random() * hadithBook.length)];

  useEffect(() => {
    const getHadith = async () => {
      try {
        const res = await axios.get(
          `https://hadithapi.com/public/api/hadiths?apiKey=${HADITH_API_KEY}&hadithNumber=${randomNumber}&book=${randomBook}`
        );
        const data = res.data.hadiths.data;
        setHadith(data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        console.log(error);
      }
    };

    getHadith();
  }, []);
  return (
    <div className="randomhadith-main-cont">
      {hadith.map((h) => (
        <div className="randomhadith-cont" key={h.id}>
          <div className="random-number-cont">
            <p className="randomhadith-humber">
              {h.book.bookName}-
              <span className="random-num">{h.hadithNumber}</span>
            </p>
          </div>
          <p className="randomhadith-narr">{h.englishNarrator}</p>
          <p className="randomhadith-english">
            {readMore || h.hadithEnglish.length <= 300
              ? h.hadithEnglish
              : h.hadithEnglish.slice(0, 300)}
            {h.hadithEnglish.length > 300 && (
              <span onClick={handleReadMoreClick} className="readmore">
                {readMore ? "Read Less" : "Read More"}
              </span>
            )}
          </p>
          <div className="share-c">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `${h.book.bookName} - Hadith No: ${h.hadithNumber}\nNarrator: ${h.englishNarrator}\n${h.hadithEnglish}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-share-btn"
            >
              Share
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
