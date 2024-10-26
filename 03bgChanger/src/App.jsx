import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("#212121")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "#212121" }}
            >
              Dark
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("#fff")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-xl border border-gray-500"
              style={{ backgroundColor: "#fff" }}
            >
              white
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
