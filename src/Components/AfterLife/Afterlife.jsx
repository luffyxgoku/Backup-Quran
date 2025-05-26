import React from "react";
import "./Afterlife.css";
import { afterLifeCardContents } from "./DATA/Data";
import AfterLifeCard from "./AfterLifeCard";

export default function Afterlife() {
  return (
    <div>
      {afterLifeCardContents.map((content) => (
        <AfterLifeCard
          key={content.title}
          imgSrc={content.imgSrc}
          title={content.title}
          description={content.description}
          location={content.location}
        />
      ))}
    </div>
  );
}
