import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8); // for length
  const [numberAllowed, setNumberAllowed] = useState(false); // for number
  const [charAllowed, setCharAllowed] = useState(false); // for charactor
  const [Password, setPassword] = useState(""); // for password update in input fild

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789"; // if number allowed then upend thestrwithdigit
    if (charAllowed) str += "!@#$%^&*_+={}[]`~"; // if charactor is alloed then upend str with special charactor
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClicpBoard = useCallback(() => {
    passwordRef.current?.select(); // sellec all
    passwordRef.current?.setSelectionRange(0, 5); // from where to where to select .
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const passwordRef = useRef(null);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600">
        <h1 className="text-4xl text-center text-white my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            value={Password}
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClicpBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={5}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Label: {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numerInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charactorInput"
              className="cursor-pointer"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charactorInput">Charactors</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
