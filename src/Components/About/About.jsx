import React from "react";
import "./About.css";
import { aboutData } from "./DATA/Data";
export default function About() {
  return (
    <div className="about-sec-cont">
      {aboutData.map((section, index) => (
        <div key={index} className="about-block">
          <h3 className="about-title-main">{section.title}</h3>
          <p className="about-text">{section.desc}</p>
        </div>
      ))}
    </div>
  );
}
