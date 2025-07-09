import React, { useState } from "react";
import { differentPrayers } from "./Data";
import { DifferentPrayerBannerData } from "../../../Banner/BannerData";
import Banner from "../../../Banner/Banner";
import move from "../../../../assets/move.png";
import bismillah from "../../../../assets/bismillah.png";
import { useTheme } from "../../../../Context/ThemeContext";

export default function DifferentPrayer() {
  const { theme } = useTheme();
  const [methodActive, setMethodActive] = useState("");

  const handlePrayerClick = (prayer) => {
    setMethodActive((prev) => (prev === prayer.title ? "" : prayer.title));
  };
  return (
    <div className="different-prayer-container">
      <Banner BannerData={DifferentPrayerBannerData} />
      <p className="purify-tilte">
        Perform Salah according to The Qur’an and Sunnah
      </p>
      <div className="bismillah-container">
        <img src={bismillah} alt="bismillah" className="bismillah" />
      </div>
      <div className="purification-container">
        {differentPrayers.map((prayer, index) => {
          const isActive = methodActive === prayer.title;

          return (
            <div
              key={prayer.title}
              className="method-container"
              onClick={() => handlePrayerClick(prayer)}
            >
              <div className="purifcation-title-container">
                <p className="purifcation-title">{prayer.title}</p>
                <img
                  src={move}
                  alt="icon"
                  className={`${isActive ? "side-icon" : "below-icon"} ${
                    theme ? "icon-dark" : "icon-light"
                  } `}
                />
              </div>
              {isActive && (
                <div
                  className={
                    index === differentPrayers.length - 1
                      ? "concerned-points-last-container"
                      : "concerned-points-container"
                  }
                >
                  <p className="concers-subheading">{prayer.subheading}</p>
                  {prayer.description.map((description) => (
                    <p className="prayer-concern-points">{description}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
