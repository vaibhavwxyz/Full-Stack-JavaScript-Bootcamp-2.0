import React from "react";
import ChildThree from "./ChildThree";

const ChildTwo = ({ fName }) => {
  return (
    <div>
      <ChildThree fName={fName} />
    </div>
  );
};

export default ChildTwo;
