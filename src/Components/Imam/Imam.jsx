import React from "react";
import { ImamIntro, ImamData } from "./DATA/Data";

import "./Imam.css";
import banner from "../../assets/imam-banner.jpg";
export default function Imam() {
  const { intro } = ImamIntro[0];
  return (
    <>
      <div className="hadith-animation-banner">
        <img
          loading="lazy"
          className="load-animation-unique"
          src={banner}
          alt="img"
        />
      </div>
      <p className="imam-main-heading">
        Discover the righteous 4 Imam of The Islam
      </p>
      <p className="imam-info">{intro}</p>
      <div className="imam-data-c">
        {ImamData.map((data, id) => (
          <div className="imam-single-c" key={id}>
            <p className="imam-name">{data.name}</p>
            <p className="imam-des">{data.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
