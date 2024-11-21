import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  multiply,
} from "./Counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button> Currently count
        is Zero: {count}{" "}
        <button onClick={() => dispatch(increment())}>+</button>
        <br />
        <button onClick={() => dispatch(multiply())}>X2</button>
      </div>
    </>
  );
}

export default App;
