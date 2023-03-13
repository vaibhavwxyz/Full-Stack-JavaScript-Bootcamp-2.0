import React, { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // });

  const count = useRef(0);
  // console.log(count);
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        placeholder="type your name"
        maxLength={60}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Hello, {name}</h1>
      {/* <h2>Render: {count} times</h2> */}
      <h2>Render: {count.current} times</h2>
    </>
  );
};

export default UseRef;
