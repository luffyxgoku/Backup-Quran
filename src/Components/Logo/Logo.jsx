import React, { useState } from "react";
import "./Logo.css";
import logo from "../../assets/q-1.png";
import menu from "../../assets/menu.png";
import Sidebar from "../Sidebar/Sidebar";

export default function Logo() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
          onClick={openSideBar}
          className="main-logo-sidebar"
          src={menu}
          alt="logo"
        />
      </div>
      {isSidebarOpen && <Sidebar setIsSidebarOpen={setIsSidebarOpen} />}
    </>
  );
}
