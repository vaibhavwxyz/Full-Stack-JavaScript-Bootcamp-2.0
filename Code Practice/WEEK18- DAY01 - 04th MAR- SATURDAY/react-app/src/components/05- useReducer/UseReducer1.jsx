import React, { useState, useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  return { count: state.count + 1 };
};

const UseReducer1 = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  function increment() {
    dispatch();
  }

  function decrement() {}
  return (
    <>
      <h2>Count: {state.count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
};
sdfsd;
export default UseReducer1;
