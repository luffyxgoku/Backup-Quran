import React from "react";
import { useParams } from "react-router-dom";
import PrayerTime from "./PRAYER-TYPE/PrayerTime/PrayerTime";
import FourKalima from "./PRAYER-TYPE/Kalima/FourKalima";
import PrimaryConcerns from "./PRAYER-TYPE/PrimaryConcerns/PrimaryConcerns";
import DifferentPrayer from "./PRAYER-TYPE/DifferentPrayer/DifferentPrayer";
import ImportantDua from "./PRAYER-TYPE/ImportantDua/ImportantDua";
import FuneralPrayer from "./PRAYER-TYPE/FuneralPrayer/FuneralPrayer";
import Purification from "./PRAYER-TYPE/Purification/Purification";
import Jumuah from "./PRAYER-TYPE/Jumua'h/Jumuah";

export default function PrayerType() {
  const { prayerType } = useParams();
  return (
    <div>
      {prayerType === "Prayer Time & Rakat" && <PrayerTime />}
      {prayerType === "Four Kalima" && <FourKalima />}
      {prayerType === "Purification" && <Purification />}
      {prayerType === "Primary concerns of Prayer" && <PrimaryConcerns />}
      {prayerType === "How to perform different prayer" && <DifferentPrayer />}
      {prayerType === "Important Dua for Prayer" && <ImportantDua />}
      {prayerType === "Funeral Prayer" && <FuneralPrayer />}
      {prayerType === "Jumua'h Prayer" && <Jumuah />}
    </div>
  );
}
