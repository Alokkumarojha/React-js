import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount } from "../Counter/counterSlice";

function Navbar() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      i am a counter {count}
      <div>
        <button onClick={() => dispatch(incrementByAmount(3))}>
          Increment by 3
        </button>
      </div>
    </div>
  );
}

export default Navbar;
