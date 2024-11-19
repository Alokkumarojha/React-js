import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  ThemMode: "light", // Default values
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  // costom hook
  return useContext(ThemeContext);
}
