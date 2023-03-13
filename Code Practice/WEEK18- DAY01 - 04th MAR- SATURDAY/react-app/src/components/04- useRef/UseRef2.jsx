import React, { useRef, useState } from "react";

const UseRef2 = () => {
  let [name, setName] = useState("vaibhav");
  const refElement = useRef("");

  function resetName() {
    setName((name = ""));
  }
  return (
    <>
      <h1>Hello, {name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button style={{ margin: "2px" }} value={name} onClick={resetName}>
        reset
      </button>
    </>
  );
};

export default UseRef2;
