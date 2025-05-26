import React, { useState } from "react";
import { wuduSteps } from "../Purification/Data";
import { PrayerConcernBannerData } from "../../../Banner/BannerData";
import Banner from "../../../Banner/Banner";
import move from "../../../../assets/move.png";
import { primaryPrayerConcerns } from "./Data";

export default function PrimaryConcerns() {
  const [methodActive, setMethodActive] = useState("");

  const handlePurificatonClick = (concern) => {
    setMethodActive((prev) => (prev === concern.title ? "" : concern.title));
  };
  return (
    <>
      <Banner BannerData={PrayerConcernBannerData} />
      <p className="purify-tilte">
        Explore the Core Foundations of Salah from Qur’an and Sunnah
      </p>
      <div className="purification-container">
        {primaryPrayerConcerns.map((concern, index) => {
          const isActive = methodActive === concern.title;

          return (
            <div
              key={concern.title}
              className="method-container"
              onClick={() => handlePurificatonClick(concern)}
            >
              <div className="purifcation-title-container">
                <p className="purifcation-title">{concern.title}</p>
                <img
                  src={move}
                  alt="icon"
                  className={isActive ? "side-icon" : "below-icon"}
                />
              </div>
              {isActive && (
                <div
                  className={
                    index === primaryPrayerConcerns.length - 1
                      ? "concerned-points-last-container"
                      : "concerned-points-container"
                  }
                >
                  <p className="concers-subheading">{concern.subheading}</p>
                  {concern.description.map((description) => (
                    <p className="prayer-concern-points">{description}</p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
