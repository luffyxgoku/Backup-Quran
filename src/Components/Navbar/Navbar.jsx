import React from "react";
import NavIcon from "./NavIcon";
import { NavElement } from "./NavElement";

export default function Navbar() {
  return (
    <>
      <div className="nav-container">
        {NavElement.map((nav) => (
          <NavIcon
            key={nav.menuName}
            imgSrc={nav.imgSource}
            activeImgSource={nav.activeImgSource}
            menuName={nav.menuName}
            path={nav.path}
          />
        ))}
      </div>
    </>
  );
}
