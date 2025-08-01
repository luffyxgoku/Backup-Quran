import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Quran from "./Components/Quran/Quran";
import Home from "./Components/Home/Home";
import SpecifChapter from "./Components/Quran/SpecifChapter";
import SpecificPage from "./Components/Quran/SpecificPage";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Dua from "./Components/Dua/Dua";
import Dhikr from "./Components/Dhikr/Dhikr";
import Prayer from "./Components/Prayer/Prayer";
import Navbar from "./Components/Navbar/Navbar";
import Zakat from "./Components/Zakat/Zakat";
import PrayerType from "./Components/Prayer/PrayerType";
import Hadith from "./Components/Hadith/Hadith";
import HadithChapters from "./Components/Hadith/HadithChapters";
import SelectedChapter from "./Components/Hadith/SelectedChapter";
import SingleHadith from "./Components/Hadith/SingleHadith";
import DhikrTime from "./Components/Dhikr/DhikrTime";
import ProphetStories from "./Components/Stories/ProphetStories";
import Stories from "./Components/Stories/Stories";
import History from "./Components/History/History";
import SingleHistory from "./Components/History/SingleHistory";
import Sunnah from "./Components/Sunnah/Sunnah";
import SingleSunnah from "./Components/Sunnah/SingleSunnah";
import Myths from "./Components/Myths/Myths";
import PerticularPiller from "./Components/Home/PerticularPiller";
import PerticularAfterWorld from "./Components/AfterLife/PerticularAfterWorld";
import About from "./Components/About/About";
import Logo from "./Components/Logo/Logo";
import AllahNames from "./Components/AllahNames/AllahNames";
import Imam from "./Components/Imam/Imam";
import PopSurah from "./Components/PopSurah/PopSurah";
import Notfound from "./Components/Notfound/Notfound";
import Footer from "./Components/Footer/Footer";
import { useTheme } from "./Context/ThemeContext";
import Assistant from "./Components/Assistant/Assistant";
import Contact from "./Components/Contact/Contact";
import Charity from "./Components/Charity/Charity";

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme ? "dark-mode" : "light-mode"}>
      <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
        <BrowserRouter>
          <ToastContainer position="top-right" autoClose={5000} />
          <AppContent />
        </BrowserRouter>
      </SkeletonTheme>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Logo />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/assistant" element={<Assistant />} />

        <Route path="/quran" element={<Quran />} />
        <Route path="/quran/:chapterType/:id" element={<SpecifChapter />} />
        <Route
          path="/quran/:chapterType/:id/:startPage"
          element={<SpecificPage />}
        />
        <Route path="/zakat" element={<Zakat />} />
        <Route path="/dua" element={<Dua />} />
        <Route path="/dhikr" element={<Dhikr />} />
        <Route path="/dhikr/:time" element={<DhikrTime />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/:prophetName" element={<ProphetStories />} />
        <Route path="/hadith" element={<Hadith />} />
        <Route path="/hadith/:hadithBooks" element={<HadithChapters />} />
        <Route
          path="/hadith/:hadithBooks/:chapterName"
          element={<SelectedChapter />}
        />
        <Route
          path="/hadith/:hadithBooks/hadith/:hadithNumber"
          element={<SingleHadith />}
        />
        <Route path="/history" element={<History />} />
        <Route path="/history/:name" element={<SingleHistory />} />
        <Route path="/myths" element={<Myths />} />
        <Route path="/allah-names" element={<AllahNames />} />
        <Route path="/sunnah" element={<Sunnah />} />
        <Route path="/sunnah/:name" element={<SingleSunnah />} />
        <Route path="/imam" element={<Imam />} />
        <Route path="/surah" element={<PopSurah />} />
        <Route path="/prayer" element={<Prayer />} />
        <Route path="/prayer/:prayerType" element={<PrayerType />} />
        <Route path="/pillers/:piller" element={<PerticularPiller />} />
        <Route
          path="/afterlife/:perticularAfterlife"
          element={<PerticularAfterWorld />}
        />
        <Route path="*" element={<Notfound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/charity" element={<Charity />} />
      </Routes>

      {location.pathname !== "/assistant" && <Navbar />}
      {location.pathname !== "/assistant" && <Footer />}
    </>
  );
}

export default App;
