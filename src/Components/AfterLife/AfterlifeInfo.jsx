import React, { useState } from "react";
import bismillah from "../../assets/bismillah.png";

export default function AfterlifeInfo({ data }) {
  const [heading, setHeading] = useState(null);
  return (
    <div className="general-dua-container unique">
      <div className="bismillah-container-new">
        <img src={bismillah} alt="bismillah" className="bismillah-new" />
      </div>
      {data.map((afterlife) => (
        <div key={afterlife.title} className="general-dua-block">
          <div
            className="dua-title-heading"
            onClick={() =>
              setHeading(heading === afterlife.title ? null : afterlife.title)
            }
          >
            <p className="dua-title-heading-text">{afterlife.title}</p>
          </div>

          {heading === afterlife.title && (
            <div className="general-dua-content">
              <p className="main-dua-text">{afterlife.arabicText}</p>
              <p className="dua-transliteration">{afterlife.transliteration}</p>
              <p className="dua-translation">{afterlife.translation}</p>
              <p className="dua-reference-text-unique">{afterlife.reference}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
