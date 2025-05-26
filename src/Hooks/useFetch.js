import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(URL, initialValue) {
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    const fetchDATA = async () => {
      try {
        const response = await axios.get(URL);
        setFetchedData({
          city: response.data.city,
          region: response.data.region,
          country: response.data.country,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDATA();
  }, [URL]);

  return { fetchedData };
}
