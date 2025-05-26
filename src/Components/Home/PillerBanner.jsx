import React from "react";
import faithimg from "../../assets/prophet-stories.jpg";

export default function PillerBanner({ imgSrc }) {
  return (
    <div className="right-banner-piller-container">
      <div className="right-banner-piller-container-left">
        <h1 className="piller-banner-heading">Essense of Islam</h1>
        <p className="piller-banner-subheading">Core Belief and practices</p>
      </div>
      <img src={imgSrc} alt="banner-img" className="banner-piller-img" />
    </div>
    // <div className="hadith-animation-banner">
    //   <img className="load-animation-unique" src={} alt="img" />
    // </div>
  );
}
