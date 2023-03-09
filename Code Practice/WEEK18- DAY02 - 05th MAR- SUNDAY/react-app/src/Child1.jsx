import React from "react";
import Child2 from "./Child2";

const Child1 = ({ fName }) => {
  return (
    <div>
      <Child2 fName={fName} />
    </div>
  );
};

export default Child1;
