import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { hadithBooks } from "./DATA/HadithData";

export default function HadithBooks() {
  const navigate = useNavigate();

  const handleBookClick = (book) => {
    navigate(`/hadith/${book}`);
  };

  return (
    <div className="hadith-books-container">
      {hadithBooks.map((book) => (
        <div
          key={book.name}
          onClick={() => handleBookClick(book.slug)}
          className="hadith-book"
        >
          <p className="hadith-name">{book.name}</p>
        </div>
      ))}
    </div>
  );
}
