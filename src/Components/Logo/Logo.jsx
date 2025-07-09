import React, { useState } from "react";
import "./Logo.css";
import logo from "../../assets/q-1.png";
import menu from "../../assets/menu.png";
import Sidebar from "../Sidebar/Sidebar";
import { useTheme } from "../../Context/ThemeContext";
import sunIcon from "../../assets/sun.png";
import moonIcon from "../../assets/night.png";

export default function Logo() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const openSideBar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <>
      <div className="main-logo-container">
        <div className="logo">
          <img className="main-logo-app" src={logo} alt="logo" />
          <p className="logo-title-text">Quran Companion</p>
        </div>
        <img
          className={theme ? "theme-icon-dark" : "theme-icon"}
          src={theme ? sunIcon : moonIcon}
          alt="Toggle Theme"
          onClick={toggleTheme}
        />
        <img
          onClick={openSideBar}
          className={theme ? "main-logo-sidebar-dark" : "main-logo-sidebar"}
          src={menu}
          alt="logo"
        />
      </div>
      {isSidebarOpen && <Sidebar setIsSidebarOpen={setIsSidebarOpen} />}
    </>
  );
}
