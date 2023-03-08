import { useState } from "react";
import React from "react";

const UseState1 = () => {
  // const arr = useState();
  // console.log(arr)
  // console.log(arr[0]);
  // console.log(arr[1]);
  const [value, setValue] = useState(0);

  function oneUp() {
    setValue(value + 1);
  }

  return (
    <div>
      <h1>UseState1 {value}</h1>
      <button onClick={oneUp}>increase</button>
    </div>
  );
};

export default UseState1;
