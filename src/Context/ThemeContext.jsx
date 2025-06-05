import React, { useState, createContext, useContext, useEffect } from "react";

const ThemeContextValue = createContext();

export const useTheme = () => useContext(ThemeContextValue);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <ThemeContextValue.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextValue.Provider>
  );
}
