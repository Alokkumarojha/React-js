import { useEffect, useState } from "react";
import "./App.css";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";
import { ThemeProvider } from "./Context/Theme";

function App() {
  const [ThemeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  // actual change in a theme.

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(ThemeMode);
  }, [ThemeMode]); // dependency - agar Thememode me koi bhi changes ho to again run hona chahiye.

  return (
    <ThemeProvider value={{ ThemeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
