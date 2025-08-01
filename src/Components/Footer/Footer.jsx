import React from "react";
import { useNavigate } from "react-router-dom";
import { columnOne, columnTwo, columnThree } from "./DATA/Data";
import linkedinLogo from "../../assets/linkedin.png";
import githubLogo from "../../assets/github.png";
import gmailLogo from "../../assets/gmail.png";
import "./Footer.css";

import { useTheme } from "../../Context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  const navigate = useNavigate();

  const handleNavigate = (location) => {
    navigate(location);
  };

  return (
    <div className="footer-container">
      <div className="footer-columns-no-overlay">
        <div className="footer-column">
          {columnOne.map((item, index) => (
            <div
              key={index}
              className="footer-item"
              onClick={() => handleNavigate(item.location)}
            >
              <p className="footer-item-text">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="footer-column">
          {columnTwo.map((item, index) => (
            <div
              key={index}
              className="footer-item"
              onClick={() => handleNavigate(item.location)}
            >
              <p className="footer-item-text">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="footer-column">
          {columnThree.map((item, index) => (
            <div
              key={index}
              className="footer-item"
              onClick={() => handleNavigate(item.location)}
            >
              <p className="footer-item-text">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-icons-section">
        <a
          href="https://www.linkedin.com/in/md-sami-adnan-501167225/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
        >
          <img
            src={linkedinLogo}
            alt="LinkedIn"
            className={theme ? "footer-icon-img-dark" : "footer-icon-img"}
          />
        </a>
        <a
          href="https://github.com/luffyxgoku"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
        >
          <img
            src={githubLogo}
            alt="GitHub"
            className={theme ? "footer-icon-img-dark" : "footer-icon-img"}
          />
        </a>

        <a
          href="mailto:samiadnan2806@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
        >
          <img
            src={gmailLogo}
            alt="Gmail"
            className={theme ? "footer-icon-img-dark" : "footer-icon-img"}
          />
        </a>
      </div>
      <div className="share-footer-c">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            "Check out the Quran Companion: https://quran-portal.netlify.app/"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-footer-a"
        >
          Share Quran Companion via WhatsApp
        </a>
      </div>
      <div className="footer-bottom-bar">
        <p className="footer-copy-left">
          &copy; {new Date().getFullYear()} Quran Companion. All rights
          reserved.
        </p>
        <p className="footer-copy-right">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/md-sami-adnan-501167225/"
            target="_blank"
            rel="noopener noreferrer"
            className="sami-link"
          >
            Sami
          </a>{" "}
          &{" "}
          <a
            href="https://www.linkedin.com/in/shadman-khan-a0a5221b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="shad-link"
          >
            Shadman
          </a>
        </p>
      </div>
    </div>
  );
}
