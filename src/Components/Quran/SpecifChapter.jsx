import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { juzNames } from "./DATA/JuzzNames";
import { juzzVerseCount } from "./DATA/JuzzVerseCount";
import mecca from "../../assets/mecca.png";
import madina from "../../assets/madina.png";
import play from "../../assets/play.png";
import copy from "../../assets/copy.png";
import bismillah from "../../assets/bismillah.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import ribbon from "../../assets/ribbon.png";
import close from "../../assets/close.png";
import { useTheme } from "../../Context/ThemeContext";
import "./Quran.css";

export default function SpecifChapter() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [isTranlationActive, setIsTranslationActive] = useState(true);
  const [quranChapter, setQuranChapter] = useState({ english: [], arabic: [] });
  const [quranInfo, setQuranInfo] = useState({
    englishName: "",
    arabicName: "",
    verseCount: "",
  });
  const { id } = useParams();
  const { chapterType } = useParams();

  const [audioFileSrc, setAudioFileSrc] = useState("");

  useEffect(() => {
    const getChapterDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://quranapi.pages.dev/api/${id}.json`
        );
        setQuranChapter({
          english: response.data.english,
          arabic: response.data.arabic1,
          revaltionPlace: response.data.revelationPlace,
        });
        setQuranInfo({
          englishName: response.data.surahNameTranslation,
          arabicName: response.data.surahName,
          verseCount: response.data.totalAyah,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    juzNames.includes(chapterType) ? getJuzzDetails() : getChapterDetails();
  }, [id]);

  const getJuzzDetails = async () => {
    setLoading(true);
    try {
      const arabicResponse = await axios.get(
        `https://api.alquran.cloud/v1/juz/${id}/quran-uthmani`
      );
      const arabicText = arabicResponse.data.data.ayahs.map(
        (ayah) => ayah.text
      );

      const englishResponse = await axios.get(
        `https://api.alquran.cloud/v1/juz/${id}/en.sahih`
      );
      const englishText = englishResponse.data.data.ayahs.map(
        (ayah) => ayah.text
      );

      setQuranChapter({
        arabic: arabicText,
        english: englishText,
        revaltionPlace: englishResponse.data.revaltionPlace,
        verseMeta: arabicResponse.data.data.ayahs.map((ayah) => ({
          surah: ayah.surah.number,
          numberInSurah: ayah.numberInSurah,
        })),
      });

      setQuranInfo({
        englishName: englishResponse.data.surahNameTranslation,
        arabicName: englishResponse.data.surahName,
        verseCount: englishResponse.data.totalAyah,
      });
    } catch (error) {
      console.log("Error fetching Juzz details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTranslation = () => setIsTranslationActive(true);
  const handleReading = () => setIsTranslationActive(false);

  const handleShareToWhatsapp = (arabic, english, index) => {
    const chapterNum = `Chapter ${id}`;
    const chapName = quranInfo.arabicName || "";
    const verseNumber = index + 1;
    const message = `${chapName}\n ${chapterNum}-${verseNumber}\n ${arabic}\n\n${english}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const playAudio = async (surahId, verseNumber) => {
    try {
      const ayahNumber = `${surahId}:${verseNumber}`;
      const response = await axios.get(
        `https://api.alquran.cloud/v1/ayah/${ayahNumber}/ar.alafasy`
      );
      const url = response.data.data.audio;
      setAudioFileSrc(url);
    } catch (err) {
      console.error("Audio fetch error:", err);
    }
  };

  return (
    <>
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
            autoPlay
          >
            <source src={audioFileSrc} type="audio/mpeg" />
          </audio>
        </div>
      )}

      {loading ? (
        <div className="skeleton-container">
          <Skeleton width={100} height={30} />
          <Skeleton height={40} />
          <Skeleton height={100} />
          <Skeleton height={50} count={3} style={{ marginTop: "5rem" }} />
        </div>
      ) : (
        <>
          <div className="chap-info-container">
            <p className="al-quran-arabicText">{`${id}. ${
              quranInfo.arabicName || juzNames[id - 1]
            }`}</p>
          </div>

          <div className="quran-nav-container">
            <div
              className={
                isTranlationActive
                  ? "quran-nav-element"
                  : "quran-nav-element-inactive"
              }
            >
              <p className="quran-element" onClick={handleTranslation}>
                Translation
              </p>
            </div>
            <div
              className={
                !isTranlationActive
                  ? "quran-nav-element"
                  : "quran-nav-element-inactive"
              }
            >
              <p className="quran-element" onClick={handleReading}>
                Read
              </p>
            </div>
          </div>

          <div className="revelation-container">
            <div className="quran-info-container">
              <p className="surah-arabicname">
                {quranInfo.arabicName || chapterType}
              </p>
              <p className="surah-englishName">
                {quranInfo.englishName ||
                  (juzNames.includes(chapterType) && quranInfo.englishName)}
              </p>
              <p className="surah-verses">
                {quranInfo.verseCount || juzzVerseCount[id - 1]} verses
              </p>
              <p className="surah-revelation">
                {quranChapter.revaltionPlace || "some-text"}
              </p>
            </div>
            <img
              src={quranChapter.revaltionPlace === "Mecca" ? mecca : madina}
              alt="revelation-img"
              className="revelation-img"
            />
          </div>

          <div className="bismillah-container">
            <img
              src={bismillah}
              alt="bismillah"
              className={theme ? "bismillah-dark" : "bismillah"}
            />
          </div>

          <div className="all-verses-container">
            {isTranlationActive
              ? quranChapter.arabic.map((arabicVerse, index) => {
                  const specialPhrase =
                    "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";
                  const startsWithBismillah =
                    arabicVerse.startsWith(specialPhrase);
                  const restOfVerse = startsWithBismillah
                    ? arabicVerse.slice(specialPhrase.length).trim()
                    : arabicVerse;

                  return (
                    <div key={index} className="verse-container">
                      <div className="verse-util">
                        <p className="number">
                          {juzNames.includes(chapterType)
                            ? index + 1
                            : `${id} : ${index + 1}`}
                        </p>

                        <div className="share-container">
                          <img
                            src={play}
                            alt="Play"
                            className={theme ? "share-img-dark" : "share-img"}
                            onClick={() => {
                              const meta = quranChapter.verseMeta?.[index];
                              if (meta) {
                                playAudio(meta.surah, meta.numberInSurah);
                              } else {
                                playAudio(id, index + 1);
                              }
                            }}
                          />
                          {/* <img
                            src={ribbon}
                            alt=""
                            className={theme ? "share-img-dark" : "share-img"}
                          /> */}
                          <img
                            src={copy}
                            alt="copy"
                            className={theme ? "share-img-dark" : "share-img"}
                            onClick={() =>
                              handleShareToWhatsapp(
                                quranChapter.arabic[index],
                                quranChapter.english[index],
                                index
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="arabic-verse-container">
                        <p className="arabic-text">
                          {startsWithBismillah && (
                            <span className="bismillah-text">
                              {specialPhrase}
                            </span>
                          )}
                          {restOfVerse && ` ${restOfVerse}`}
                          <span className="verse-no">{index + 1}</span>
                        </p>
                      </div>
                      <div className="english-verse-container">
                        <p className="english-text">
                          {quranChapter.english[index]}
                        </p>
                      </div>
                    </div>
                  );
                })
              : quranChapter.arabic.map((arabicVerse, index) => {
                  const specialPhrase =
                    "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";
                  const startsWithBismillah =
                    arabicVerse.startsWith(specialPhrase);
                  const restOfVerse = startsWithBismillah
                    ? arabicVerse.slice(specialPhrase.length).trim()
                    : arabicVerse;

                  return (
                    <div key={index} className="verse-container-read">
                      <div className="arabic-verse-container-read">
                        <div className="arabic-txt-readnumber-c">
                          <p className="arabic-text-readnumber">{index + 1}</p>
                        </div>
                        <div className="arabic-txt-readverse-c">
                          <p className="arabic-text-read">
                            {startsWithBismillah && (
                              <span className="bismillah-text-read">
                                {specialPhrase}
                              </span>
                            )}
                            {restOfVerse && ` ${restOfVerse}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </>
      )}
    </>
  );
}
