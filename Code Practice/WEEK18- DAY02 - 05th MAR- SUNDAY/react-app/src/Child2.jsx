import React from "react";
import Child3 from "./Child3";

const Child2 = ({ fName }) => {
  return (
    <div>
      <Child3 fName={fName} />
    </div>
  );
};

export default Child2;
