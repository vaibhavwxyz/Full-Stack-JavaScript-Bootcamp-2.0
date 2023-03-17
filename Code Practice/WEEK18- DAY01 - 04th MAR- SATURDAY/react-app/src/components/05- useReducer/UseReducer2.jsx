import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducer2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <>
      <h2>Count: {state.count}</h2>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrease</button>
    </>
  );
};

export default UseReducer2;
