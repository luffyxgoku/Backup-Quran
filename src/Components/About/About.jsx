import React from "react";
import "./About.css";
import footerbg from "../../assets/footer-bg-4.jpg";

import {
  aboutOne,
  aboutTwo,
  aboutThree,
  aboutFour,
  aboutFive,
  aboutSix,
} from "./DATA/Data";

export default function About() {
  return (
    <>
      <div className="about-bg-container">
        <img src={footerbg} alt="bg" className="about-bg" loading="lazy" />
      </div>
      <div className="about-sec-cont">
        {aboutOne.map((section, index) => (
          <div key={`aboutOne-${index}`} className="about-block">
            <h3 className="about-title-main">{section.title}</h3>
            <p className="about-text">{section.desc}</p>
          </div>
        ))}

        {aboutTwo.map((section, index) => (
          <div key={`aboutTwo-${index}`} className="about-block">
            <h2 className="about-heading">{section.heading}</h2>
            <ul className="feature-list">
              {section.feature.map((item, idx) => (
                <li key={`feature-${idx}`} className="about-feature">
                  <p className="feature-title">{item.title}</p>
                  <p className="feature-text">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {aboutThree.map((section, index) => (
          <div key={`aboutThree-${index}`} className="about-block">
            <h3 className="about-title">{section.title}</h3>
            <p className="about-text">{section.desc}</p>
          </div>
        ))}

        {aboutFour.map((section, index) => (
          <div key={`aboutFour-${index}`} className="about-block">
            {section.title && <h3 className="about-title">{section.title}</h3>}
            {section.desc && <p className="about-text">{section.desc}</p>}
            <ul className="about-list">
              {section.points.map((item, idx) => (
                <li key={`point-${idx}`} className="about-list-item">
                  {item.point}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {aboutSix.map((section, index) => (
          <div key={`aboutSix-${index}`} className="about-block">
            <h3 className="about-title">{section.title}</h3>
            {section.devs.map((dev, devIndex) => (
              <div key={`dev-${devIndex}`} className="div-dev">
                <p className="about-text-dev">
                  {dev.name} <span className="about-text-bio"> {dev.bio}</span>
                </p>
              </div>
            ))}
          </div>
        ))}

        {aboutFive.map((section, index) => (
          <div key={`aboutFive-${index}`} className="about-block">
            <h3 className="about-title">{section.title}</h3>
            <p className="about-text">{section.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
