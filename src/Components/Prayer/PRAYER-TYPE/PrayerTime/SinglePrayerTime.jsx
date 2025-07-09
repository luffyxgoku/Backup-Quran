import React from "react";

export default function SinglePrayerTime({ Timings, theme }) {
  return (
    <div className="singleprayertime-container">
      {Timings &&
        Timings.map((time, index) => (
          <div className="single-prayertime-container" key={index}>
            <div className="prayertime-left">
              <div className="icon-container">
                <img
                  src={time.icon}
                  alt="home"
                  className={theme ? "prayertime-img-dark" : "prayertime-img"}
                />
              </div>

              <div className="column1">
                <p className="prayertime-title">{time.name}</p>
                <p className="rakats">{time.rakats}</p>
              </div>
            </div>

            <p className="prayertime-time">{time.time}</p>
          </div>
        ))}
    </div>
  );
}
