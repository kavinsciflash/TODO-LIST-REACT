import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  changeTheme: (value) => {},
});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (value) => {
    setTheme(value);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
