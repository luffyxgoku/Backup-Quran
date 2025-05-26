import React from "react";
import "./Navbar.css";
import { useNavigate, useMatch } from "react-router-dom";

export default function NavIcon({ imgSrc, menuName, path, activeImgSource }) {
  const navigate = useNavigate();
  const match = useMatch(`/${path}/*`);

  const handleNavigation = () => {
    navigate(`/${path}`);
  };

  return (
    <div className="nav-icon-container" onClick={handleNavigation}>
      <img
        src={match ? activeImgSource : imgSrc}
        alt={menuName}
        className="nav-icon"
      />
      <p className="menu-name">{menuName}</p>
    </div>
  );
}
