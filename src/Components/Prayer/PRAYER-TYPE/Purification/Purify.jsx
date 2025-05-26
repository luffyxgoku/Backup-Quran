import React from "react";

export default function Purify({ purifyData }) {
  return (
    <div className="purify-container">
      {purifyData.map((data, index) => (
        <div className="purify-single-container">
          <p className="purify-step">
            {index + 1}. {data.step}
          </p>
          <p className="purify-desc">{data.description}</p>
          <p className="purify-ref">{data.reference}</p>
        </div>
      ))}
    </div>
  );
}
