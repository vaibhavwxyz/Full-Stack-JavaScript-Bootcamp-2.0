import React, { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // clean up function
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <h1>{time} in seconds</h1>
    </>
  );
};

export default UseEffect2;
