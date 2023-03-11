import React, { useState, useEffect } from "react";

const UseEffect3 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Run useEffect", count);
    return () => {
      console.log("Clean up", count);
    };
  }, [count]);

  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
};

export default UseEffect3;
