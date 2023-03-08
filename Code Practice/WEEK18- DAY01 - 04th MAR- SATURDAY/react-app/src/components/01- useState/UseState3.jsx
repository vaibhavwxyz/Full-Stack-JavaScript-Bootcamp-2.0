import { useState } from "react";

import React from "react";

const UseState3 = () => {
  let [value, setValue] = useState(0);
  const [name, setName] = useState();

  function oneUp() {
    setValue(value + 1);
  }

  function reset() {
    setValue((value = 0));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="type anything"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <h1>
        {name} has been clicked {value} times
      </h1>
      <button onClick={oneUp}>click me</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default UseState3;
