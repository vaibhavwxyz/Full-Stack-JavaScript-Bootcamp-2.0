import React, { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [time, setTime] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setTime(time + 1);
  //   }, 1000);
  // });

  return (
    <>
      <h1>{time} in seconds</h1>
    </>
  );
};

export default UseEffect2;
