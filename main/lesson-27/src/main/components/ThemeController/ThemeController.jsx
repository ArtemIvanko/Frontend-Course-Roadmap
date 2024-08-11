import { useState } from "react";

export const ThemeController = () => {
  const [theme, setTheme] = useState("light");

  // I used the only string "light" and "dark" instead of spending time on creating a new styles statement for the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <h2>ThemeController</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme: {theme}</p>
    </div>
  );
};