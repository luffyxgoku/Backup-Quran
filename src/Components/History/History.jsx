import React from "react";
import history from "../../assets/history-banner.jpg";
import WideImages from "./WideImages";
import { historyItems } from "./DATA/HistoryData";
import "./History.css";

export default function History() {
  return (
    <>
      <div className="hadith-animation-banner">
        <img className="load-animation-unique" src={history} alt="img" />
      </div>
      <p className="names-main-heading">
        Unfolding the Rich and Inspiring History of Islam
      </p>
      <WideImages historyItems={historyItems} />
    </>
  );
}
