import React, { useState } from "react";

export default function PillerInfo({ data }) {
  const [heading, setHeading] = useState(null);
  return (
    <div className="general-dua-container unique">
      {data.map((piller) => (
        <div key={piller.title} className="general-dua-block">
          <div
            className="dua-title-heading"
            onClick={() =>
              setHeading(heading === piller.title ? null : piller.title)
            }
          >
            <p className="dua-title-heading-text">{piller.title}</p>
          </div>

          {heading === piller.title && (
            <div className="general-dua-content">
              <p className="main-dua-text">{piller.arabicText}</p>
              <p className="dua-transliteration">{piller.transliteration}</p>
              <p className="dua-translation">{piller.translation}</p>
              <p className="dua-reference-text-unique">{piller.reference}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
