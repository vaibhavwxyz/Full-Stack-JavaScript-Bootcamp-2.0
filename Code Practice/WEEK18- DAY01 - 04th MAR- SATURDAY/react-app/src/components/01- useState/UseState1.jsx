import { useState } from "react";
import React from "react";

const UseState1 = () => {
  const arr = useState();
  console.log(arr[0]);
  console.log(arr[1]);

  return <div>UseState1 {arr}</div>;
};

export default UseState1;
