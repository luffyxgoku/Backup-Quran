import React, { useEffect, useState } from "react";
import "../PrayerType.css";
import Hero from "../../../Hero/Hero";
import SinglePrayerTime from "./SinglePrayerTime";
import { useFetch } from "../../../../Hooks/useFetch";
import fajr from "../../../../assets/fajr.png";
import sunrise from "../../../../assets/sunrise.png";
import dhuhr from "../../../../assets/dhuhr.png";
import asr from "../../../../assets/asr.png";
import maghrib from "../../../../assets/maghrib.png";
import sunset from "../../../../assets/maghrib.png";
import isha from "../../../../assets/isha.png";
import midnight from "../../../../assets/midnight.png";
import clock from "../../../../assets/clock.png";
import axios from "axios";

export default function PrayerTime() {
  const [timings, setTimings] = useState([]);
  const API_TOKEN = import.meta.env.VITE_API_TOKEN;

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
        console.log(response);
        setTimings([
          {
            name: "Fajr",
            rakats: "2 Fard",
            time: response.data.data.timings.Fajr,
            icon: fajr,
          },
          {
            name: "Imsak",
            rakats: "End of Suhoor",
            time: response.data.data.timings.Imsak,
            icon: asr,
          },
          {
            name: "Sunrises",
            time: response.data.data.timings.Sunrise,
            icon: sunrise,
          },
          {
            name: "Dhuhr",
            rakats: "4 Fard",
            time: response.data.data.timings.Dhuhr,
            icon: dhuhr,
          },
          {
            name: "Asr",
            rakats: "4 Fard ",
            time: response.data.data.timings.Asr,
            icon: asr,
          },
          {
            name: "Maghrib",
            rakats: "3 Fard",
            time: response.data.data.timings.Maghrib,
            icon: maghrib,
          },
          {
            name: "Sunset",
            time: response.data.data.timings.Sunset,
            icon: sunset,
          },
          {
            name: "Isha",
            rakats: "4 Fard",
            time: response.data.data.timings.Isha,
            icon: isha,
          },
          {
            name: "Midnight",
            time: response.data.data.timings.Midnight,
            icon: midnight,
          },
        ]);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      }
    };

    fetchPrayerTimings();
  }, [location]);

  return (
    <>
      <Hero />
      <div className="title-container">
        <p className="prayer-title-timing">Prayer Timings </p>
        <img src={clock} alt="salah" className="prayer-icon" />
      </div>

      <SinglePrayerTime Timings={timings} />
    </>
  );
}
