import React, { useState, useEffect } from "react";

const UseRef = () => {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="type your name"
        maxLength={60}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Hello, {name}</h1>
    </>
  );
};

export default UseRef;
