import React, { useState } from "react";
import {
  wuduSteps,
  tayammumSteps,
  ghuslFemale,
  ghuslJanazahFemale,
  ghuslJanazahMale,
  ghuslMale,
} from "../Purification/Data";
import Purify from "./Purify";
import move from "../../../../assets/move.png";
import { PurifcationBannerData } from "../../../Banner/BannerData";
import Banner from "../../../Banner/Banner";
import { useTheme } from "../../../../Context/ThemeContext";

export default function Purification() {
  const { theme } = useTheme();

  const [methodActive, setMethodActive] = useState("");

  const purificationsMethod = [
    {
      name: "Wudu",
      data: wuduSteps,
    },
    {
      name: "Tayammum",
      data: tayammumSteps,
    },
    {
      name: "Ghusl Male",
      data: ghuslMale,
    },
    {
      name: "Ghusl Female",
      data: ghuslFemale,
    },
    {
      name: "Janaza Ghusl Male",
      data: ghuslJanazahMale,
    },
    {
      name: "Janazah Ghusl Female",
      data: ghuslJanazahFemale,
    },
  ];

  const handlePurificatonClick = (purification) => {
    setMethodActive((prev) =>
      prev === purification.name ? "" : purification.name
    );
  };

  return (
    <>
      <Banner BannerData={PurifcationBannerData} />
      <p className="purify-tilte">
        Purify yourself according to the sunnah & hadith
      </p>
      <div className="purification-container">
        {purificationsMethod.map((method) => {
          const isActive = methodActive === method.name;

          return (
            <div
              key={method.name}
              className="method-container"
              onClick={() => handlePurificatonClick(method)}
            >
              <div className="purifcation-title-container">
                <p className="purifcation-title">{method.name}</p>
                <img
                  src={move}
                  alt="icon"
                  className={`${isActive ? "side-icon" : "below-icon"} ${
                    theme ? "icon-dark" : "icon-light"
                  } `}
                />
              </div>
              {isActive && <Purify purifyData={method.data} />}
            </div>
          );
        })}
      </div>
    </>
  );
}
