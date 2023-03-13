import React, { useState } from "react";

const UseRef2 = () => {
  let [name, setName] = useState("vaibhav");

  function resetName() {
    setName((name = ""));
  }
  return (
    <>
      <h1>Hello, {name}</h1>
      <input type="text" />
      <button
        style={{ margin: "2px" }}
        onClick={resetName}
        onChange={(e) => setName(e.target.value)}
      >
        reset
      </button>
    </>
  );
};

export default UseRef2;
