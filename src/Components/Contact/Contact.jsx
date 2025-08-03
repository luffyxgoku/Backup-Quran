import React, { useState, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
    topic: "Appreciation",
    rating: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState("");

  const form = useRef();

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const msgPlaceholderMap = {
    Appreciation: "Glad you like the app. Share your thoughts.",
    Problem: "Describe the issue you're facing.",
    Suggestions: "Share your suggestions for improvement.",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setFormData({
            fullName: "",
            phone: "",
            message: "",
          });
          setIsSubmitting(false);

          setStatus("Message Sent Successfully");
          setTimeout(() => {
            setStatus("");
          }, 7000);
        },
        (error) => {
          setIsSubmitting(false);
          setStatus("Message Failed");
          setTimeout(() => {
            setStatus("");
          }, 7000);
        }
      );
  };

  return (
    <div className="contact-page-container">
      <div className="contact-header-section">
        <p className="contact-title">Contact Us</p>
        <p className="contact-description">
          Let us know what’s on your mind — be it feedback, suggestions, or
          anything else. We appreciate your thoughts!
        </p>
      </div>

      <div className="contact-form-section">
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="topic" className="form-label">
              Select Topic
            </label>
            <select
              name="topic"
              id="topic"
              value={formData.topic}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="Appreciation"> Appreciation</option>
              <option value="Problem"> Problem</option>
              <option value="Suggestions"> Suggestions</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={
                msgPlaceholderMap[formData.topic] ||
                "Write your message here..."
              }
              className="form-textarea"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label className="form-label-rating">Rating</label>
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star-icon ${
                    star <= formData.rating ? "filled" : ""
                  }`}
                  onClick={() => setFormData({ ...formData, rating: star })}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="form-submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending" : "Submit"}
          </button>
        </form>
      </div>

      <AnimatePresence>
        {status && (
          <motion.p
            className="form-status-message"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          >
            {status}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
