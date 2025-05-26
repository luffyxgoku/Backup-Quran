import React, { useState, useEffect } from "react";
import { ZakatBannerData } from "../Banner/BannerData";
import Banner from "../Banner/Banner";
import axios from "axios";

const ZakatCalculator = () => {
  const [apiError, setApiError] = useState(false);

  const [goldPrice, setGoldPrice] = useState(null);
  const [silverPrice, setSilverPrice] = useState(null);
  const [nisabGold, setNisabGold] = useState(null);
  const [nisabSilver, setNisabSilver] = useState(null);
  const [nisabUsed, setNisabUsed] = useState(null);
  const [formData, setFormData] = useState({
    savings: "",
    gold: "",
    silver: "",
    businessAssets: "",
    debts: "",
  });
  const [zakatDue, setZakatDue] = useState(null);

  const METALS_API_KEY = import.meta.env.VITE_METALS_API_KEY;

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          `https://api.metals.dev/v1/latest?api_key=${METALS_API_KEY}&currency=INR&unit=g`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        const data = response.data;

        const goldPerGram = parseFloat(data.metals.gold);
        const silverPerGram = parseFloat(data.metals.silver);

        const nisabG = goldPerGram * 87.48;
        const nisabS = silverPerGram * 612.36;

        setGoldPrice(goldPerGram);
        setSilverPrice(silverPerGram);
        setNisabGold(nisabG);
        setNisabSilver(nisabS);
        setNisabUsed(Math.min(nisabG, nisabS));
      } catch (error) {
        setApiError(true);
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateZakat = (e) => {
    e.preventDefault();
    const savings = parseFloat(formData.savings) || 0;
    const gold = parseFloat(formData.gold) || 0;
    const silver = parseFloat(formData.silver) || 0;
    const businessAssets = parseFloat(formData.businessAssets) || 0;
    const debts = parseFloat(formData.debts) || 0;

    const totalGoldValue = gold * goldPrice;
    const totalSilverValue = silver * silverPrice;

    const totalAssets =
      savings + totalGoldValue + totalSilverValue + businessAssets;

    const zakatableWealth = totalAssets - debts;

    if (zakatableWealth >= nisabUsed) {
      const zakat = zakatableWealth * 0.025;
      setZakatDue(zakat.toFixed(2));
    } else {
      setZakatDue(0);
    }
  };

  return (
    <>
      <Banner BannerData={ZakatBannerData} />
      <div className="zakat-calculator-container">
        <p className="names-main-heading">
          Calculate Your Zakat with Ease and Accuracy
        </p>
        {apiError ? (
          <div className="fallback-ui">
            <h2 className="fallback-title">⚠️ Live Price Fetch Failed</h2>
            <p className="fallback-text">
              We’re unable to fetch live gold and silver prices right now due to
              limited API availability.
            </p>
            <p className="fallback-text">
              Please try again later or consult with local scholars or pricing
              websites to calculate Nisab manually.
            </p>
          </div>
        ) : goldPrice && silverPrice && nisabUsed ? (
          <>
            <div className="zakat-price-info">
              <p className="price-item">
                <strong>Gold Price:</strong> ₹{goldPrice.toFixed(2)} / gram
              </p>
              <p className="price-item">
                <strong>Silver Price:</strong> ₹{silverPrice.toFixed(2)} / gram
              </p>
              <p className="price-item">
                <strong>Gold Nisab:</strong> ₹{nisabGold.toFixed(2)} (87.48g)
              </p>
              <p className="price-item">
                <strong>Silver Nisab:</strong> ₹{nisabSilver.toFixed(2)}{" "}
                (612.36g)
              </p>
              <p className="price-item">
                <strong>Nisab Used:</strong> ₹{nisabUsed.toFixed(2)} (Lower of
                Gold or Silver)
              </p>
            </div>

            <form className="zakat-form" onSubmit={calculateZakat}>
              <label className="zakat-input-group">
                Savings and Cash:
                <input
                  type="number"
                  name="savings"
                  value={formData.savings}
                  onChange={handleChange}
                  className="zakat-input"
                />
              </label>
              <label className="zakat-input-group">
                Gold in grams:
                <input
                  type="number"
                  name="gold"
                  value={formData.gold}
                  onChange={handleChange}
                  className="zakat-input"
                />
              </label>
              <label className="zakat-input-group">
                Silver in grams:
                <input
                  type="number"
                  name="silver"
                  value={formData.silver}
                  onChange={handleChange}
                  className="zakat-input"
                />
              </label>
              <label className="zakat-input-group">
                Business Assets:
                <input
                  type="number"
                  name="businessAssets"
                  value={formData.businessAssets}
                  onChange={handleChange}
                  className="zakat-input"
                />
              </label>
              <label className="zakat-input-group">
                Debts:
                <input
                  type="number"
                  name="debts"
                  value={formData.debts}
                  onChange={handleChange}
                  className="zakat-input"
                />
              </label>
              <button className="zakat-submit-button" type="submit">
                Calculate Zakat
              </button>
            </form>

            {zakatDue !== null && (
              <div className="zakat-result">
                {zakatDue > 0 ? (
                  <p className="zakat-due">
                    <strong>Zakat Due:</strong> ₹{zakatDue}
                  </p>
                ) : (
                  <p className="zakat-not-eligible">
                    You are not eligible to pay zakat (below Nisab).
                  </p>
                )}
              </div>
            )}
          </>
        ) : (
          <p className="loading-message">Loading gold and silver prices...</p>
        )}
      </div>
    </>
  );
};

export default ZakatCalculator;
