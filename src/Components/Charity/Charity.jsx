import React from "react";
import { toast } from "react-toastify";
import "./Charity.css";

export default function Charity() {
  const KEY = import.meta.env.VITE_RAZORPAY_PUBLIC_KEY;

  const handlePayment = (amount) => {
    const options = {
      key: KEY,
      amount: amount * 100,
      currency: "INR",
      name: "Quran Companion",
      description: "Charity (Sadqa)",
      handler: function (response) {
        toast.success(" Payment Successful!", {
          position: "top-right",
          autoClose: 5000,
          style: { backgroundColor: "#ffffff", color: "#5bce22" },
        });
      },
      prefill: {
        name: "Md Sami Adnan",
        email: "user@gmail.com",
        contact: "1234567890",
      },
      notes: { purpose: "Sadqa Donation" },
      theme: { color: "#528FF0" },
      modal: {
        ondismiss: function () {
          toast.error(" Payment Failed.", {
            position: "top-right",
            autoClose: 5000,
            style: { backgroundColor: "#ffffff", color: "#ff0000" },
          });
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="charity-wrapper">
      <div className="charity-header">
        <h1 className="charity-main-title">Charity (Sadqa)</h1>
        <p className="charity-description">
          Whatever you donate here will be directly transferred to poor people
          or your local masjid. <strong>We will not keep even 1 rupee</strong>.
          Every single rupee goes to the needy.
        </p>
      </div>

      <p className="charity-quran-verse">
        Those who spend in charity night and day, secretly and openly, will have
        their reward with their Lord. And there will be no fear for them, nor
        will they grieve.
      </p>

      <div className="charity-donation-section">
        <h2 className="donation-heading">Donate for a Cause (Sadqa)</h2>
        <div className="donation-buttons">
          <button className="donation-button" onClick={() => handlePayment(2)}>
            Donate ₹2
          </button>
          <button className="donation-button" onClick={() => handlePayment(5)}>
            Donate ₹5
          </button>
          <button className="donation-button" onClick={() => handlePayment(10)}>
            Donate ₹10
          </button>
        </div>
      </div>
    </div>
  );
}
