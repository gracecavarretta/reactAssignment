import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div>
      <h2>Counter Assignment</h2>
      <p>{count}</p>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
}
