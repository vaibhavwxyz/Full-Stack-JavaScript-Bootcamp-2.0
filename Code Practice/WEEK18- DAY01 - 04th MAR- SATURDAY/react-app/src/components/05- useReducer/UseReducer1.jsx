import React, { useState } from "react";

const UseReducer1 = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }
  return (
    <>
      <button onClick={increment}>increment</button>
      {count}
      <button onClick={decrement}>decrement</button>
    </>
  );
};

export default UseReducer1;
