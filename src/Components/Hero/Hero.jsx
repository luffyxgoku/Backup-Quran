import React, { useState, useEffect, useRef } from "react";
import heroImage from "../../assets/heroImage.jpg";
import mapMarker from "../../assets/mapPin.png";
import "./Hero.css";
import { useFetch } from "../../Hooks/useFetch";
import axios from "axios";
import { useTheme } from "../../Context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  const API_TOKEN = import.meta.env.VITE_API_TOKEN;
  const timeRef = useRef(null);

  const [prayerData, setPrayerData] = useState({
    timings: {},
    currentPrayer: "Loading...",
    upcomingPrayer: { name: "Loading...", time: "" },
    timeLeft: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const today = new Date();
      const h = today.getHours().toString().padStart(2, "0");
      const m = today.getMinutes().toString().padStart(2, "0");
      if (timeRef.current) {
        timeRef.current.innerText = `${h}:${m}`;
      }
    };

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const { fetchedData: location } = useFetch(
    `https://ipinfo.io/json?token=${API_TOKEN}`,
    { city: "", region: "", country: "" }
  );

  useEffect(() => {
    if (!location.city || !location.country) return;

    const fetchPrayerTimings = async () => {
      try {
        const response = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity?city=${location.city}&country=${location.country}&method=1&school=1`
        );
        const timings = response.data.data.timings;
        determineCurrentPrayer(timings);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      }
    };

    fetchPrayerTimings();
  }, [location]);

  const determineCurrentPrayer = (timings) => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const prayers = [
      { name: "Fajr", time: timings.Fajr },
      { name: "Dhuhr", time: timings.Dhuhr },
      { name: "Asr", time: timings.Asr },
      { name: "Maghrib", time: timings.Maghrib },
      { name: "Isha", time: timings.Isha },
    ];

    let current = "Isha";
    let nextPrayer = prayers[0];
    let nextTimeDiff = 24 * 60;

    prayers.forEach((prayer, index) => {
      const [h, m] = prayer.time.split(":").map(Number);
      const prayerTime = h * 60 + m;

      if (currentTime >= prayerTime) {
        current = prayer.name;
      } else if (prayerTime - currentTime < nextTimeDiff) {
        nextPrayer = prayers[index];
        nextTimeDiff = prayerTime - currentTime;
      }
    });

    if (current === "Isha") {
      const [fajrH, fajrM] = timings.Fajr.split(":").map(Number);
      const fajrTime = fajrH * 60 + fajrM + 24 * 60;
      nextPrayer = { name: "Fajr", time: timings.Fajr };
      nextTimeDiff = fajrTime - currentTime;
    }

    setPrayerData({
      timings,
      currentPrayer: current,
      upcomingPrayer: nextPrayer,
      timeLeft:
        nextTimeDiff >= 60
          ? `${Math.floor(nextTimeDiff / 60)} hours ${
              nextTimeDiff % 60
            } min left`
          : `${nextTimeDiff} min left`,
    });
  };

  useEffect(() => {
    if (!prayerData.upcomingPrayer.time) return;

    const interval = setInterval(() => {
      const now = new Date();
      const [h, m] = prayerData.upcomingPrayer.time.split(":").map(Number);
      let prayerMinutes = h * 60 + m;
      let nowMinutes = now.getHours() * 60 + now.getMinutes();

      if (
        prayerData.currentPrayer === "Isha" &&
        prayerData.upcomingPrayer.name === "Fajr"
      ) {
        prayerMinutes += 24 * 60;
      }

      const diff = prayerMinutes - nowMinutes;

      setPrayerData((prev) => ({
        ...prev,
        timeLeft:
          diff >= 60
            ? `${Math.floor(diff / 60)} hours ${diff % 60} min left`
            : `${diff} min left`,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [prayerData.upcomingPrayer, prayerData.currentPrayer]);

  return (
    <div className="hero-container">
      <img
        src={heroImage}
        alt="hero-img"
        className={theme ? "heroImage-dark" : "heroImage"}
      />
      <div className="location-container">
        <div className="locate">
          <img src={mapMarker} alt="location-icon" className="location-icon" />
          <label className="location">
            {location.city}, {location.region}
          </label>
        </div>
      </div>
      <div className="main-time-container">
        <p ref={timeRef} className="time-displayer">
          00:00
        </p>
        <p className="time-name">
          Now{" "}
          <span className="prayer-time-name">{prayerData.currentPrayer}</span>
        </p>
      </div>
      <div className="upcoming-prayer-time-container">
        <p className="upcoming-prayer-time">Upcoming Prayer Time</p>
        <p className="upcoming-prayer">
          <span className="specifir-prayer-name">
            {prayerData.upcomingPrayer.name}
          </span>{" "}
          {prayerData.upcomingPrayer.time}
        </p>
      </div>
      <div className="time-left-container">
        <p className="time-left">{prayerData.timeLeft}</p>
      </div>
    </div>
  );
}

// import React, { useState, useEffect, useRef } from "react";
// import heroImage from "../../assets/heroImage.jpg";
// import mapMarker from "../../assets/mapPin.png";
// import "./Hero.css";
// import { useFetch } from "../../Hooks/useFetch";
// import axios from "axios";
// import azanAudioFile from "../../assets/azan.mp3";

// export default function Hero() {
//   const API_TOKEN = import.meta.env.VITE_API_TOKEN;
//   const timeRef = useRef(null);
//   const audioRef = useRef(null);
//   const lastPlayedRef = useRef("");
//   const [isAzanPlaying, setIsAzanPlaying] = useState(false);

//   const [prayerData, setPrayerData] = useState({
//     timings: {},
//     currentPrayer: "Loading...",
//     upcomingPrayer: { name: "Loading...", time: "" },
//     timeLeft: "",
//   });

//   useEffect(() => {
//     const updateTime = () => {
//       const today = new Date();
//       const h = today.getHours().toString().padStart(2, "0");
//       const m = today.getMinutes().toString().padStart(2, "0");
//       if (timeRef.current) {
//         timeRef.current.innerText = `${h}:${m}`;
//       }
//     };

//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const { fetchedData: location } = useFetch(
//     `https://ipinfo.io/json?token=${API_TOKEN}`,
//     { city: "", region: "", country: "" }
//   );

//   useEffect(() => {
//     if (!location.city || !location.country) return;

//     const fetchPrayerTimings = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.aladhan.com/v1/timingsByCity?city=${location.city}&country=${location.country}&method=1&school=1`
//         );
//         const timings = response.data.data.timings;
//         determineCurrentPrayer(timings);
//       } catch (error) {
//         console.error("Error fetching prayer times:", error);
//       }
//     };

//     fetchPrayerTimings();
//   }, [location]);

//   const determineCurrentPrayer = (timings) => {
//     const now = new Date();
//     const currentTime = now.getHours() * 60 + now.getMinutes();

//     const prayers = [
//       { name: "Fajr", time: timings.Fajr },
//       { name: "Dhuhr", time: timings.Dhuhr },
//       { name: "Asr", time: timings.Asr },
//       { name: "Maghrib", time: timings.Maghrib },
//       { name: "Isha", time: timings.Isha },
//     ];

//     let current = "Isha";
//     let nextPrayer = prayers[0];
//     let nextTimeDiff = 24 * 60;
//     prayers.forEach((prayer, index) => {
//       const [h, m] = prayer.time.split(":").map(Number);
//       const prayerTime = h * 60 + m;

//       if (currentTime >= prayerTime) {
//         current = prayer.name;
//       } else if (prayerTime - currentTime < nextTimeDiff) {
//         nextPrayer = prayers[index];
//         nextTimeDiff = prayerTime - currentTime;
//       }
//     });

//     if (current === "Isha") {
//       const [fajrH, fajrM] = timings.Fajr.split(":").map(Number);
//       const fajrTime = fajrH * 60 + fajrM + 24 * 60;
//       nextPrayer = { name: "Fajr", time: timings.Fajr };
//       nextTimeDiff = fajrTime - currentTime;
//     }

//     setPrayerData({
//       timings,
//       currentPrayer: current,
//       upcomingPrayer: nextPrayer,
//       timeLeft:
//         nextTimeDiff >= 60
//           ? `${Math.floor(nextTimeDiff / 60)} hours ${
//               nextTimeDiff % 60
//             } min left`
//           : `${nextTimeDiff} min left`,
//     });
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!prayerData.timings) return;

//       const now = new Date();
//       const h = now.getHours().toString().padStart(2, "0");
//       const m = now.getMinutes().toString().padStart(2, "0");
//       const currentTime = `${h}:${m}`;

//       const allPrayerTimes = Object.entries(prayerData.timings);

//       allPrayerTimes.forEach(([name, time]) => {
//         if (time === currentTime && lastPlayedRef.current !== time) {
//           if (audioRef.current) {
//             audioRef.current
//               .play()
//               .then(() => {
//                 setIsAzanPlaying(true);
//               })
//               .catch((e) => {
//                 console.error("Autoplay blocked or error:", e);
//               });
//             lastPlayedRef.current = time;
//           }
//         }
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [prayerData.timings]);

//   return (
//     <div className="hero-container">
//       <audio ref={audioRef} src={azanAudioFile} preload="auto" />

//       {isAzanPlaying && (
//         <button
//           onClick={() => {
//             if (audioRef.current) {
//               audioRef.current.pause();
//               audioRef.current.currentTime = 0;
//               setIsAzanPlaying(false);
//             }
//           }}
//           className="stop-azan-btn"
//         >
//           Stop Azan
//         </button>
//       )}

//       <img src={heroImage} alt="hero-img" className="heroImage" />
//       <div className="location-container">
//         <div className="locate">
//           <img src={mapMarker} alt="location-icon" className="location-icon" />
//           <label className="location">
//             {location.city}, {location.region}
//           </label>
//         </div>
//       </div>
//       <div className="main-time-container">
//         <p ref={timeRef} className="time-displayer">
//           00:00
//         </p>
//         <p className="time-name">
//           Now{" "}
//           <span className="prayer-time-name">{prayerData.currentPrayer}</span>
//         </p>
//       </div>
//       <div className="upcoming-prayer-time-container">
//         <p className="upcoming-prayer-time">Upcoming Prayer Time</p>
//         <p className="upcoming-prayer">
//           <span className="specifir-prayer-name">
//             {prayerData.upcomingPrayer.name}
//           </span>{" "}
//           {prayerData.upcomingPrayer.time}
//         </p>
//       </div>
//       <div className="time-left-container">
//         <p className="time-left">{prayerData.timeLeft}</p>
//       </div>
//     </div>
//   );
// }
