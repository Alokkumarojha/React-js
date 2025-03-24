import { useState } from "react";
import Signup from "./Components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
