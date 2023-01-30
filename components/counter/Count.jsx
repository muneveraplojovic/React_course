import React, { useState } from "react";
import "./Count.css";

const Count = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((counter) => counter + 1);
  const decrement = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    }
  };
  const reset = () => setCounter(0);
  if (counter === 0) {
  }
  return (
    <div className="counter">
      <h1>Counter</h1>
      <div>
        <span>{counter}</span>
      </div>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Count;
