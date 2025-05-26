import React from "react";
import { useNavigate } from "react-router-dom";

export default function HadithColumn({ columnData, setIsSidebarOpen }) {
  const navigate = useNavigate();
  const handleNav = (path) => {
    navigate(path);
    setIsSidebarOpen(false);
  };

  return (
    <div className="column">
      {columnData.map((column) => (
        <p
          key={column.location}
          className="column-contents"
          onClick={() => handleNav(column.location)}
        >
          {column.name}
        </p>
      ))}
    </div>
  );
}
