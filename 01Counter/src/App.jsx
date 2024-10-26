import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  let increseNumber = () => {
    if (count < 20) {
      count = count + 1;
      setCount(count);
    } else {
      setCount("20 ke uper nahi jayega");
    }
  };
  let DecreseNumber = () => {
    if (count > 0) {
      count = count - 1;
      setCount(count);
    } else {
      setCount("Negative number is not allowed");
    }
  };
  return (
    <>
      <h1>Increse and Decrese Number</h1>
      <h2>Count is: {count}</h2>
      <button onClick={increseNumber}>Increse</button>
      <button onClick={DecreseNumber}>Decrese</button>
    </>
  );
}

export default App;
