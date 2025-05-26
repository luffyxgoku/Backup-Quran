import React from "react";
import sunnah from "../../assets/sunnahbanner.jpg";
import WideImages from "./WideImages";
import { sunnahItems } from "./DATA/SunnahData";

export default function Sunnah() {
  return (
    <>
      <div className="hadith-animation-banner">
        <img className="load-animation-unique" src={sunnah} alt="img" />
      </div>
      <p className="names-main-heading">
        The Sunnah: Timeless Teachings of Prophet Muhammad ﷺ
      </p>
      <WideImages sunnahItems={sunnahItems} />
    </>
  );
}
