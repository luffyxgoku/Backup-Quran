import React from "react";
import "../PrayerType.css";
import Banner from "../../../Banner/Banner";
import { KalimaBannerData } from "../../../Banner/BannerData";
import AllKalimas from "./AllKalimas";

export default function FourKalima() {
  return (
    <div className="kalimas-container">
      <Banner BannerData={KalimaBannerData} />
      <p className="kailmas-title">All Kalimas</p>
      <AllKalimas />
    </div>
  );
}
